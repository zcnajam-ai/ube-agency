import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";

export const alt = "Services & Capabilities | Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createBrandedOgImage({
    title: "Websites, Marketing, Automation & eCommerce",
    eyebrow: "UBE SERVICES",
    detail: "Explore the services that fit your project",
  });
}
