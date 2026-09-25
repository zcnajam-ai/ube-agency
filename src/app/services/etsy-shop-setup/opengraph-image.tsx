import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "Etsy Shop Setup from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "Etsy Shop Setup", eyebrow: "SENIOR U.S. SERVICE", detail: "Branding · Listings · Etsy SEO" }); }
