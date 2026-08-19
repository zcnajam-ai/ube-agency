import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const forwardedHost = request.headers.get("x-forwarded-host");
  const hostHeader = request.headers.get("host") || "";
  const hostname = (forwardedHost || hostHeader || request.nextUrl.hostname).split(":")[0].toLowerCase();

  // Check if current hostname is the official production domain
  const isProduction =
    hostname === "unifiedbrandingexperts.com" ||
    hostname === "www.unifiedbrandingexperts.com";

  if (!isProduction) {
    // Prevent search indexing on all preview/staging environments (Vercel preview, ube-agency.vercel.app, localhost)
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  } else {
    // Explicitly allow indexing on production domain
    response.headers.set("X-Robots-Tag", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
