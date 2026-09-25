import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "eCommerce Growth Packages and pricing from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "eCommerce Growth Packages", eyebrow: "TRANSPARENT PACKAGES", detail: "Launch · Growth · Scale", badge: "From $399" }); }
