import type { Metadata } from "next";
import CommerceHubPage from "@/components/commerce/CommerceHubPage";
import { MARKETPLACE_HUBS } from "@/data/marketplace-hubs";
const hub = MARKETPLACE_HUBS.ebay;
export const metadata: Metadata = { title: { absolute: `${hub.title} | UBE` }, description: hub.description, alternates: { canonical: "https://unifiedbrandingexperts.com/ebay" }, openGraph: { title: `${hub.title} | UBE`, description: hub.description, url: "https://unifiedbrandingexperts.com/ebay", type: "article", publishedTime: "2026-09-22", modifiedTime: "2026-09-22" }, twitter: { card: "summary_large_image", title: `${hub.title} | UBE`, description: hub.description } };
export default function EbayHubPage() { return <CommerceHubPage hub={hub} />; }
