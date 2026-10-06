import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";

export const alt = "Packages & Pricing | Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createBrandedOgImage({
    title: "Packages & Pricing",
    eyebrow: "TRANSPARENT SERVICE PLANS",
    detail: "Compare scope, deliverables and pricing",
  });
}
