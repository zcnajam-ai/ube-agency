import { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/services";
import { FEATURED_PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unifiedbrandingexperts.com";

  // 1. Core & Research Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date("2026-10-03") },
    { url: `${baseUrl}/services`, lastModified: new Date("2026-10-03") },
    { url: `${baseUrl}/packages` },
    { url: `${baseUrl}/work`, lastModified: new Date("2026-10-03") },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-10-03") },
    { url: `${baseUrl}/insights`, lastModified: new Date("2026-10-03") },
    { url: `${baseUrl}/ai-seo`, lastModified: new Date("2026-09-14") },
    { url: `${baseUrl}/shopify`, lastModified: new Date("2026-09-22") },
    { url: `${baseUrl}/tiktok-shop`, lastModified: new Date("2026-09-22") },
    { url: `${baseUrl}/amazon`, lastModified: new Date("2026-09-22") },
    { url: `${baseUrl}/walmart-marketplace`, lastModified: new Date("2026-09-22") },
    { url: `${baseUrl}/ebay`, lastModified: new Date("2026-09-22") },
    { url: `${baseUrl}/research/ai-search-readiness-study-2026`, lastModified: new Date("2026-08-31") },
    { url: `${baseUrl}/contact` },
  ];

  // 2. Primary Service Pages (14)
  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES
    .filter((s) => s.slug !== "tiktok-shop-setup")
    .map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
    }));

  // 3. Dedicated Package Hub Pages (8)
  const packageRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/ecommerce-store-management-packages` },
    { url: `${baseUrl}/branding-packages` },
    { url: `${baseUrl}/web-design-packages` },
    { url: `${baseUrl}/digital-marketing-packages` },
    { url: `${baseUrl}/ai-seo-packages` },
    { url: `${baseUrl}/ai-automation-packages` },
    { url: `${baseUrl}/tiktok-marketing-packages` },
    { url: `${baseUrl}/mobile-app-packages` },
    { url: `${baseUrl}/ecommerce-growth-packages` },
  ];

  // 4. Legal / Information Pages (2)
  const legalRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy-policy` },
    { url: `${baseUrl}/terms` },
  ];

  // 5. Case Studies (/work/[slug] - 11)
  const projectRoutes: MetadataRoute.Sitemap = FEATURED_PROJECTS.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
  }));

  // 6. Canonical unique insight articles. Redirected legacy slugs & duplicates stay out of the sitemap.
  const seenInsightSlugs = new Set<string>();
  const uniqueInsights = INSIGHTS.filter((i) => {
    if (["how-to-start-a-tiktok-shop", "shopify-store-setup-cost"].includes(i.slug)) return false;
    if (seenInsightSlugs.has(i.slug)) return false;
    seenInsightSlugs.add(i.slug);
    return true;
  });

  const refreshedInsightSlugs = new Set([
    "how-much-does-professional-logo-design-cost",
    "shopify-store-setup-cost-2026",
  ]);

  const insightRoutes: MetadataRoute.Sitemap = uniqueInsights.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    ...(refreshedInsightSlugs.has(i.slug)
      ? { lastModified: new Date("2026-10-03") }
      : {}),
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...packageRoutes,
    ...legalRoutes,
    ...projectRoutes,
    ...insightRoutes,
  ];
}
