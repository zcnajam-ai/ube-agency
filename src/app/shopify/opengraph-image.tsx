import { createCommerceHubOg } from "@/components/commerce/CommerceHubOg";
import { MARKETPLACE_HUBS } from "@/data/marketplace-hubs";
export const alt = "Shopify agency custom store, performance, conversion, and AI SEO guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return createCommerceHubOg(MARKETPLACE_HUBS.shopify); }
