import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";

export const alt = "AI Search Readiness Study | Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createBrandedOgImage({
    title: "AI Search Readiness Study",
    eyebrow: "100 BUSINESS WEBSITES AUDITED",
    detail: "Original research · 45 readiness criteria",
  });
}
