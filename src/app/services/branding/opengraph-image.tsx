import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Branding Services from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Branding Services", eyebrow: "SENIOR U.S. SERVICE", detail: "Strategy · Logo · Visual Identity" }); }
