import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";

export const alt = "Selected Work | Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createBrandedOgImage({
    title: "Selected Work",
    eyebrow: "PORTFOLIO & CASE STUDIES",
    detail: "Explore projects and verified deliverables",
  });
}
