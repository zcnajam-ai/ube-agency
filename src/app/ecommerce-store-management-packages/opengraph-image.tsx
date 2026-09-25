import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Store Management Packages and pricing from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Store Management Packages", eyebrow: "TRANSPARENT PACKAGES", detail: "Essentials · Growth · Scale", badge: "From $249/mo" }); }
