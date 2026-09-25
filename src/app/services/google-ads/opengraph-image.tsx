import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Google Ads Management from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Google Ads Management", eyebrow: "SENIOR U.S. SERVICE", detail: "Search · Shopping · Measurement" }); }
