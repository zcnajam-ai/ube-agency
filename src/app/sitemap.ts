import { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/services";
import { FEATURED_PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unifiedbrandingexperts.com";

  // Core Pages (7)
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl },
    { url: `${baseUrl}/services` },
    { url: `${baseUrl}/packages` },
    { url: `${baseUrl}/work` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/insights` },
    { url: `${baseUrl}/contact` },
  ];

  // Primary Service Pages (13)
  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
  }));

  // Dedicated Commercial Package Pages (6)
  const packageRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/branding-packages` },
    { url: `${baseUrl}/ai-seo-packages` },
    { url: `${baseUrl}/ai-automation-packages` },
    { url: `${baseUrl}/tiktok-marketing-packages` },
    { url: `${baseUrl}/mobile-app-packages` },
    { url: `${baseUrl}/ecommerce-growth-packages`, lastModified: new Date("2026-08-27T00:00:00.000Z") },
  ];

  // Case Studies (/work/[slug] - 11)
  const projectRoutes: MetadataRoute.Sitemap = FEATURED_PROJECTS.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
  }));

  // Insights Articles (/insights/[slug] - 13)
  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...packageRoutes,
    ...projectRoutes,
    ...insightRoutes,
  ];
}
