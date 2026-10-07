import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";

export const alt = "Insights & Guides | Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createBrandedOgImage({
    title: "Insights & Guides",
    eyebrow: "BUYER GUIDES",
    detail: "Practical answers for founders and store owners",
  });
}
