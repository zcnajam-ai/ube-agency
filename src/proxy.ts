import { NextRequest, NextResponse } from "next/server";

// Preserve a single-hop 301 for these legacy URLs with trailing slashes.
const legacySlashRedirects: Record<string, string> = {
  "/best-logo-design-agency/": "/services/branding",
  "/logo-design-packages/": "/branding-packages",
  "/portfolio/": "/work",
};

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
  const host = request.headers.get("host")?.split(":")[0].toLowerCase() || "";

  // Canonical-host enforcement for production deployments only.
  // Preview deployments remain accessible and are noindex via root metadata.
  if (process.env.VERCEL_ENV === "production" && host.endsWith(".vercel.app")) {
    const canonicalUrl = new URL(
      `${pathname}${request.nextUrl.search}`,
      "https://unifiedbrandingexperts.com"
    );
    return NextResponse.redirect(canonicalUrl, 308);
  }

  // Match Next.js' usual 308 normalization on unrelated URLs, while keeping
  // the three legacy slash URLs on a direct 301 to their canonical destination.
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = new URL(request.url);
    const legacyTarget = legacySlashRedirects[pathname];
    url.pathname = legacyTarget ?? pathname.replace(/[/]+$/, "");
    return NextResponse.redirect(url, legacyTarget ? 301 : 308);
  }

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
  // Run on public page requests so production Vercel aliases can be canonicalized,
  // while excluding framework assets that do not need host-level SEO redirects.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
