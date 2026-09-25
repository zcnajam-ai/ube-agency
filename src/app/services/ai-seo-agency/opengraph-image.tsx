import { createBrandedOgImage, OG_IMAGE_SIZE } from "@/components/seo/BrandedOgImage";
export const alt = "AI SEO Agency from Unified Branding Experts";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() { return createBrandedOgImage({ title: "AI SEO Agency", eyebrow: "SENIOR U.S. SERVICE", detail: "ChatGPT · AI Overviews · Perplexity" }); }
