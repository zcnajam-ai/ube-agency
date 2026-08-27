import { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/services";
import { FEATURED_PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unifiedbrandingexperts.com";

  // Dedicated Static Routes with content-specific lastmod dates
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date("2026-02-18T00:00:00.000Z"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date("2026-02-15T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/packages`, lastModified: new Date("2026-02-15T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/work`, lastModified: new Date("2026-02-16T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-02-10T00:00:00.000Z"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified: new Date("2026-02-17T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-02-15T00:00:00.000Z"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date("2026-01-15T00:00:00.000Z"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date("2026-01-15T00:00:00.000Z"), changeFrequency: "yearly", priority: 0.3 },

    // Dedicated Requested Service Routes
    { url: `${baseUrl}/best-logo-design-agency`, lastModified: new Date("2026-02-12T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/professional-web-design-services`, lastModified: new Date("2026-02-12T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/best-website-development-agency`, lastModified: new Date("2026-02-12T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-services-agency`, lastModified: new Date("2026-02-12T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/custom-web-development`, lastModified: new Date("2026-02-12T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/professional-content-writing-services`, lastModified: new Date("2026-02-12T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },

    // Dedicated Requested Package Routes
    { url: `${baseUrl}/logo-design-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/web-design-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/our-website-development-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/our-digital-marketing-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/our-custom-web-design-development-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/our-content-writing-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/branding-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ai-seo-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ai-automation-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/tiktok-marketing-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ecommerce-growth-packages`, lastModified: new Date("2026-08-27T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mobile-app-packages`, lastModified: new Date("2026-02-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 0.9 },
  ];

  // Dynamic Service routes (including /services/ai-automation)
  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date("2026-02-15T00:00:00.000Z"),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Project routes
  const projectRoutes: MetadataRoute.Sitemap = FEATURED_PROJECTS.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date("2026-02-16T00:00:00.000Z"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic Insight routes
  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: new Date("2026-02-17T00:00:00.000Z"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...insightRoutes];
}
