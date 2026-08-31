import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https:;
  font-src 'self' https://fonts.gstatic.com data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  connect-src 'self' https:;
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspHeader,
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 2,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Legacy Portfolio URLs -> Canonical Work Destination (/work)
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/portfolio/", destination: "/work", permanent: true },
      { source: "/pricing", destination: "/packages", permanent: true },
      { source: "/pricing/", destination: "/packages", permanent: true },

      // Legacy WordPress Category Archives -> Canonical Destinations
      { source: "/category/ui-ux-design", destination: "/services/web-design-development", permanent: true },
      { source: "/category/ui-ux-design/", destination: "/services/web-design-development", permanent: true },
      { source: "/category/case-studies", destination: "/work", permanent: true },
      { source: "/category/case-studies/", destination: "/work", permanent: true },

      // Legacy Service Overlaps -> Canonical Service Destinations
      { source: "/best-logo-design-agency", destination: "/services/branding", permanent: true },
      { source: "/best-logo-design-agency/", destination: "/services/branding", permanent: true },
      { source: "/professional-web-design-services", destination: "/services/web-design-development", permanent: true },
      { source: "/professional-web-design-services/", destination: "/services/web-design-development", permanent: true },
      { source: "/best-website-development-agency", destination: "/services/web-design-development", permanent: true },
      { source: "/best-website-development-agency/", destination: "/services/web-design-development", permanent: true },
      { source: "/custom-web-development", destination: "/services/web-design-development", permanent: true },
      { source: "/custom-web-development/", destination: "/services/web-design-development", permanent: true },
      { source: "/digital-marketing-services-agency", destination: "/services/digital-marketing", permanent: true },
      { source: "/digital-marketing-services-agency/", destination: "/services/digital-marketing", permanent: true },
      { source: "/professional-content-writing-services", destination: "/services", permanent: true },
      { source: "/professional-content-writing-services/", destination: "/services", permanent: true },

      // Legacy Package Overlaps -> Canonical Package Destinations
      { source: "/logo-design-packages", destination: "/branding-packages", permanent: true },
      { source: "/logo-design-packages/", destination: "/branding-packages", permanent: true },
      { source: "/our-website-development-packages", destination: "/web-design-packages", permanent: true },
      { source: "/our-website-development-packages/", destination: "/web-design-packages", permanent: true },
      { source: "/our-digital-marketing-packages", destination: "/digital-marketing-packages", permanent: true },
      { source: "/our-digital-marketing-packages/", destination: "/digital-marketing-packages", permanent: true },
      { source: "/our-custom-web-design-development-packages", destination: "/ecommerce-growth-packages", permanent: true },
      { source: "/our-custom-web-design-development-packages/", destination: "/ecommerce-growth-packages", permanent: true },
      // Legacy Insights Cannibalization -> Canonical Pillar Destination
      { source: "/insights/what-is-ai-seo-seo-vs-aeo-vs-geo-explained", destination: "/insights/ai-seo-aeo-geo-guide", permanent: true },
      { source: "/insights/what-is-ai-seo-seo-vs-aeo-vs-geo-explained/", destination: "/insights/ai-seo-aeo-geo-guide", permanent: true },
    ];
  },
};

export default nextConfig;
