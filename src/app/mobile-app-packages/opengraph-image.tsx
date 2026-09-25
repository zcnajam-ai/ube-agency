import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Mobile App Packages and pricing from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Mobile App Packages", eyebrow: "TRANSPARENT PACKAGES", detail: "Concept · Starter · Growth · Advanced", badge: "From $999" }); }
