import { NextRequest, NextResponse } from "next/server";

// Edge Sliding Window IP Rate Limiter
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimitStore = new Map<string, RateLimitRecord>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 30; // Max 30 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

// Clean up stale IP records periodically
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitStore.entries()) {
      if (now > record.resetTime) {
        rateLimitStore.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Intercept all API routes
  if (pathname.startsWith("/api/")) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 1. Edge Rate Limiting Check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    // 2. Strict HTTP Method & Content-Type Enforcement
    if (pathname === "/api/contact" || pathname === "/api/concierge") {
      if (request.method !== "POST") {
        return NextResponse.json(
          { error: `Method ${request.method} Not Allowed` },
          { status: 405, headers: { Allow: "POST" } }
        );
      }

      const contentType = request.headers.get("content-type") || "";
      if (!contentType.toLowerCase().includes("application/json")) {
        return NextResponse.json(
          { error: "Content-Type must be application/json" },
          { status: 400 }
        );
      }
    }

    if (pathname === "/api/indexnow") {
      if (request.method !== "GET") {
        return NextResponse.json(
          { error: `Method ${request.method} Not Allowed` },
          { status: 405, headers: { Allow: "GET" } }
        );
      }
    }

    if (pathname === "/api/indexnow/submit") {
      if (request.method !== "POST") {
        return NextResponse.json(
          { error: `Method ${request.method} Not Allowed` },
          { status: 405, headers: { Allow: "POST" } }
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
