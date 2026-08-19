import { NextResponse } from "next/server";

// In-memory rate limiting map for form submissions (IP-based sliding window)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

export async function POST(request: Request) {
  try {
    // 1. IP Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    const now = Date.now();

    const clientRate = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - clientRate.lastReset > RATE_LIMIT_WINDOW_MS) {
      clientRate.count = 1;
      clientRate.lastReset = now;
    } else {
      clientRate.count += 1;
    }

    rateLimitMap.set(ip, clientRate);

    if (clientRate.count > MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    let body: Record<string, unknown> = {};
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON request." }, { status: 400 });
    }

    const name = typeof body.name === "string" ? body.name : "";
    const email = typeof body.email === "string" ? body.email : "";
    const phone = typeof body.phone === "string" ? body.phone : "";
    const company = typeof body.company === "string" ? body.company : "";
    const service = typeof body.service === "string" ? body.service : "General Inquiry";
    const budget = typeof body.budget === "string" ? body.budget : "Not Specified";
    const timeline = typeof body.timeline === "string" ? body.timeline : "Flexible";
    const description = typeof body.description === "string" ? body.description : "";
    const honeypot = typeof body.honeypot === "string" ? body.honeypot : "";

    // Honeypot check (bot protection)
    if (honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // Required fields check
    if (!name.trim() || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Sanitize lengths
    const sanitized = {
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 120),
      phone: phone.trim().slice(0, 30),
      company: company.trim().slice(0, 100),
      service: service.trim().slice(0, 100),
      budget: budget.trim().slice(0, 50),
      timeline: timeline.trim().slice(0, 50),
      description: description.trim().slice(0, 2000),
    };

    console.log(`[Project Inquiry] Name: ${sanitized.name} | Email: ${sanitized.email} | Service: ${sanitized.service}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your project inquiry has been received. Our team will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("API /contact error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please contact us directly at info@unifiedbrandingexperts.com" },
      { status: 500 }
    );
  }
}
