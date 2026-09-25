import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Mobile App Development from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Mobile App Development", eyebrow: "SENIOR U.S. SERVICE", detail: "iOS · Android · Product Engineering" }); }
