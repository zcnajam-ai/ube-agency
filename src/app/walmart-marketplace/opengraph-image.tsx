import { createCommerceHubOg } from "@/components/commerce/CommerceHubOg";
import { MARKETPLACE_HUBS } from "@/data/marketplace-hubs";
export const alt = "Walmart Marketplace agency setup, catalog, integration, and management guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return createCommerceHubOg(MARKETPLACE_HUBS["walmart-marketplace"]); }
