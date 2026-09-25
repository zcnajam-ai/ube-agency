import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Digital Marketing Packages and pricing from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Digital Marketing Packages", eyebrow: "TRANSPARENT PACKAGES", detail: "Starter · Growth · Performance", badge: "From $299/mo" }); }
