import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Social Media Management from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Social Media Management", eyebrow: "SENIOR U.S. SERVICE", detail: "Strategy · Content · Publishing" }); }
