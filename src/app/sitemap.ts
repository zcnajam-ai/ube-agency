import { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/services";
import { FEATURED_PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unifiedbrandingexperts.com";

  // 1. Core & Research Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/packages`, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/insights`, lastModified: new Date() },
    { url: `${baseUrl}/research/ai-search-readiness-study-2026`, lastModified: new Date("2026-08-31") },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];

  // 2. Primary Service Pages (14)
  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  // 3. Dedicated Package Hub Pages (8)
  const packageRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/branding-packages`, lastModified: new Date() },
    { url: `${baseUrl}/web-design-packages`, lastModified: new Date() },
    { url: `${baseUrl}/digital-marketing-packages`, lastModified: new Date() },
    { url: `${baseUrl}/ai-seo-packages`, lastModified: new Date() },
    { url: `${baseUrl}/ai-automation-packages`, lastModified: new Date() },
    { url: `${baseUrl}/tiktok-marketing-packages`, lastModified: new Date() },
    { url: `${baseUrl}/mobile-app-packages`, lastModified: new Date() },
    { url: `${baseUrl}/ecommerce-growth-packages`, lastModified: new Date() },
  ];

  // 4. Legal / Information Pages (2)
  const legalRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
  ];

  // 5. Case Studies (/work/[slug] - 11)
  const projectRoutes: MetadataRoute.Sitemap = FEATURED_PROJECTS.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  // 6. Insights Articles (/insights/[slug] - 23)
  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: new Date(),
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
