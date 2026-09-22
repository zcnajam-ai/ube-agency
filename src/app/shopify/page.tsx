import type { Metadata } from "next";
import CommerceHubPage from "@/components/commerce/CommerceHubPage";
import { MARKETPLACE_HUBS } from "@/data/marketplace-hubs";
const hub = MARKETPLACE_HUBS.shopify;
export const metadata: Metadata = { title: { absolute: hub.title }, description: hub.description, alternates: { canonical: "https://unifiedbrandingexperts.com/shopify" }, openGraph: { title: hub.title, description: hub.description, url: "https://unifiedbrandingexperts.com/shopify", type: "article", publishedTime: "2026-09-22", modifiedTime: "2026-09-22" }, twitter: { card: "summary_large_image", title: hub.title, description: hub.description } };
export default function ShopifyHubPage() { return <CommerceHubPage hub={hub} />; }
