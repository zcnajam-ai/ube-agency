import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Web Design & Development from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Web Design & Development", eyebrow: "SENIOR U.S. SERVICE", detail: "UX · Development · Performance" }); }
