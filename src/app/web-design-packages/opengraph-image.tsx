import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Web Design Packages and pricing from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Web Design Packages", eyebrow: "TRANSPARENT PACKAGES", detail: "Launch · Growth · Custom", badge: "From $300" }); }
