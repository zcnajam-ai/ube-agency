import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";

export const alt = "Discuss Your Project | Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createBrandedOgImage({
    title: "Discuss Your Project",
    eyebrow: "CONTACT UNIFIED BRANDING EXPERTS",
    detail: "Share your scope and get a clear next step",
  });
}
