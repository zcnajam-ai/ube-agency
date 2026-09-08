import { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/services";
import { FEATURED_PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unifiedbrandingexperts.com";

  // 1. Core & Research Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl },
    { url: `${baseUrl}/services` },
    { url: `${baseUrl}/packages` },
    { url: `${baseUrl}/work` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/insights` },
    { url: `${baseUrl}/research/ai-search-readiness-study-2026`, lastModified: new Date("2026-08-31") },
    { url: `${baseUrl}/contact` },
  ];

  // 2. Primary Service Pages (14)
  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
  }));

  // 3. Dedicated Package Hub Pages (8)
  const packageRoutes: MetadataRoute.Sitemap = [
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

  // 6. Insights Articles (/insights/[slug] - 23)
  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
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
