import { createCommerceHubOg } from "@/components/commerce/CommerceHubOg";
import { MARKETPLACE_HUBS } from "@/data/marketplace-hubs";
export const alt = "TikTok Shop agency setup, management, creator affiliate, and advertising guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return createCommerceHubOg(MARKETPLACE_HUBS["tiktok-shop"]); }
