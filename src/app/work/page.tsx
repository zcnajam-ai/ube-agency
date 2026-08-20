import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import InteractiveMedia from "@/components/common/InteractiveMedia";
import BackgroundGrid from "@/components/common/BackgroundGrid";
import OversizedTypography from "@/components/common/OversizedTypography";
import PurpleGlowField from "@/components/common/PurpleGlowField";
import { Heading3DSparkle } from "@/components/common/Brand3DIcons";
import PortfolioAutoScroll from "@/components/work/PortfolioAutoScroll";

export const metadata: Metadata = {
  title: "Featured Case Studies & Work Portfolio",
  description:
    "Explore case studies in custom Shopify eCommerce, brand identity design, Next.js web applications, and multi-channel performance marketing.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/work",
  },
  openGraph: {
    title: "Featured Case Studies & Work Portfolio",
    description:
      "Explore case studies in custom Shopify eCommerce, brand identity design, Next.js web applications, and multi-channel performance marketing.",
    url: "https://unifiedbrandingexperts.com/work",
    type: "website",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-brand-1.webp",
        width: 1200,
        height: 630,
        alt: "Unified Branding Experts Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Case Studies & Work Portfolio | Unified Branding Experts",
    description:
      "Explore case studies in custom Shopify eCommerce, brand identity design, Next.js web applications, and multi-channel performance marketing.",
    images: ["https://unifiedbrandingexperts.com/images/projects/project-brand-1.webp"],
  },
};

export default function WorkIndexPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Featured Client Case Studies",
    url: "https://unifiedbrandingexperts.com/work",
    description: "Explore case studies across eCommerce, brand identity, and web engineering.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://unifiedbrandingexperts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://unifiedbrandingexperts.com/work",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16 overflow-hidden">
        {/* Ambient Atmosphere */}
        <BackgroundGrid opacity={0.03} size={80} maskRadial />
        <PurpleGlowField position="top-right" size={700} opacity={0.08} />
        <OversizedTypography text="CASE STUDIES" direction="left" className="top-24 opacity-30" />

        {/* Editorial Page Hero */}
        <div className="relative z-10 space-y-4 max-w-3xl border-b border-[#E0DDDB] pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num uppercase tracking-wider text-[#9F8BE7] font-bold shadow-xs">
            <Heading3DSparkle size={16} />
            <span>PORTFOLIO &amp; CLIENT CASE STUDIES</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Digital Platforms Built to Move Brands Forward.
          </h1>
          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Explore our latest brand transformations, bespoke fragrance and apparel systems, high-converting Shopify storefronts, and search optimization campaigns.
          </p>
        </div>

        {/* Featured Case Studies Spotlight Carousel (Auto-Scrolling) */}
        <div className="relative z-10">
          <PortfolioAutoScroll />
        </div>

        {/* Complete Client Work Directory */}
        <div className="relative z-10 space-y-8 pt-6 border-t border-[#E0DDDB]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#161616]">
                All Client Case Studies
              </h2>
              <p className="text-xs sm:text-sm text-[#585858]">
                Browse all verified project deliveries, branding kits, and custom storefront builds.
              </p>
            </div>
            <span className="text-xs font-mono-num text-[#9F8BE7] font-bold bg-[#FAF7F6] px-3 py-1 rounded-full border border-[#E0DDDB]">
              Showing {FEATURED_PROJECTS.length} Projects
            </span>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden hover:border-[#9F8BE7] transition-all duration-300 group flex flex-col justify-between shadow-xs"
            >
              <div>
                <Link href={`/work/${project.slug}`} className="block relative">
                  <InteractiveMedia
                    src={project.heroImage}
                    alt={project.title}
                    aspectRatio="aspect-[16/10]"
                    badgeText={project.category}
                  />
                </Link>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono-num text-[#585858]">
                    <span className="font-semibold text-[#161616]">{project.client}</span>
                    <span className="font-bold text-[#9F8BE7]">{project.year}</span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors leading-tight">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.services.slice(0, 3).map((srv) => (
                      <span
                        key={srv}
                        className="px-2.5 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-[11px] font-mono-num text-[#585858]"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-[#E0DDDB]/60 mt-4 flex items-center justify-between">
                <span className="text-xs font-mono-num text-emerald-600 font-bold">
                  {project.results[0]?.metric} {project.results[0]?.label}
                </span>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
                </Link>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
