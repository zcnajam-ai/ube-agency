import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "TikTok Marketing from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "TikTok Marketing", eyebrow: "SENIOR U.S. SERVICE", detail: "Organic · Paid · Creator Content" }); }
