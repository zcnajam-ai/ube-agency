import { NextResponse } from "next/server";
import { sendProjectInquiryEmails } from "@/lib/emailService";

export async function POST(request: Request) {
  try {
    // 1. Content-Type Check
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 400 }
      );
    }

    // 2. Body Reading with Length Enforcement (Max 32KB)
    const rawBody = await request.text();
    if (rawBody.length > 32768) {
      return NextResponse.json(
        { error: "Payload size exceeds maximum allowed threshold (32KB)." },
        { status: 413 }
      );
    }

    // 3. Parse JSON Body safely
    let body: Record<string, unknown> = {};
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload format." }, { status: 400 });
    }

    // 4. Extract and Type-Check Allowed Fields
    const name = typeof body.name === "string" ? body.name : "";
    const email = typeof body.email === "string" ? body.email : "";
    const phone = typeof body.phone === "string" ? body.phone : "";
    const company = typeof body.company === "string" ? body.company : "";
    const service = typeof body.service === "string" ? body.service : "General Inquiry";
    const budget = typeof body.budget === "string" ? body.budget : "Not Specified";
    const timeline = typeof body.timeline === "string" ? body.timeline : "Flexible";
    const description = typeof body.description === "string" ? body.description : "";
    const honeypot = typeof body.honeypot === "string" ? body.honeypot : "";
    const sourcePage = typeof body.sourcePage === "string" ? body.sourcePage : "";

    // 5. Bot Defense (Honeypot Check)
    if (honeypot.trim().length > 0) {
      // Quietly return success to bots without processing
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // 6. Strict Field Validation
    const trimmedName = name.trim();
    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json({ error: "Please provide a valid name (2-100 characters)." }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 120) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // 7. Sanitize Field Values & Length Limits
    const sanitized = {
      name: trimmedName.slice(0, 100),
      email: trimmedEmail.slice(0, 120),
      phone: phone.trim().slice(0, 30),
      company: company.trim().slice(0, 100),
      service: service.trim().slice(0, 100),
      budget: budget.trim().slice(0, 50),
      timeline: timeline.trim().slice(0, 50),
      description: description.trim().slice(0, 2000),
      sourcePage: sourcePage.trim().slice(0, 250),
    };

    // Log generic audit event
    console.log(`[Project Inquiry Received] Service: ${sanitized.service} | Budget: ${sanitized.budget}`);

    // 8. Send Transactional Emails (Internal UBE Notification + Client Confirmation)
    await sendProjectInquiryEmails(sanitized);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${sanitized.name}. We've received your project inquiry. Our team will review your requirements and follow up with you.`,
        summary: {
          service: sanitized.service,
          budget: sanitized.budget,
          timeline: sanitized.timeline,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("API /contact error occurred", err);
    return NextResponse.json(
      { error: "We couldn't submit your inquiry right now. Please try again." },
      { status: 500 }
    );
  }
}
