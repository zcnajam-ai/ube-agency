import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Branding Packages and pricing from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Branding Packages", eyebrow: "TRANSPARENT PACKAGES", detail: "Logo · Starter · Identity", badge: "From $299" }); }
