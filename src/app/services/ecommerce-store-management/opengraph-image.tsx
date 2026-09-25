import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "eCommerce Store Management from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "eCommerce Store Management", eyebrow: "SENIOR U.S. SERVICE", detail: "Catalog · Inventory · Operations" }); }
