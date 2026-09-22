import type { Metadata } from "next";
import CommerceHubPage from "@/components/commerce/CommerceHubPage";
import { MARKETPLACE_HUBS } from "@/data/marketplace-hubs";
const hub = MARKETPLACE_HUBS.amazon;
export const metadata: Metadata = { title: { absolute: `${hub.title} | UBE` }, description: hub.description, alternates: { canonical: "https://unifiedbrandingexperts.com/amazon" }, openGraph: { title: `${hub.title} | UBE`, description: hub.description, url: "https://unifiedbrandingexperts.com/amazon", type: "article", publishedTime: "2026-09-22", modifiedTime: "2026-09-22" }, twitter: { card: "summary_large_image", title: `${hub.title} | UBE`, description: hub.description } };
export default function AmazonHubPage() { return <CommerceHubPage hub={hub} />; }
