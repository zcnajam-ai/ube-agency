"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { SERVICE_PILLARS, ALL_SERVICES } from "@/data/services";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import CursorImagePreview from "../common/CursorImagePreview";
import BackgroundGrid from "../common/BackgroundGrid";
import OversizedTypography from "../common/OversizedTypography";
import PurpleGlowField from "../common/PurpleGlowField";

const SERVICE_VISUALS: Record<
  string,
  {
    image: string;
    kicker: string;
    metrics: string;
    packageUrl: string;
    packageText: string;
    starting: string;
  }
> = {
  "ecommerce-store-setup": {
    image: "/images/official/ecommerce/storefront-setup.jpeg",
    kicker: "eCommerce Storefronts",
    metrics: "Custom Store Architecture",
    packageUrl: "/our-custom-web-design-development-packages",
    packageText: "Explore eCommerce Packages",
    starting: "From $450",
  },
  "shopify-development-service": {
    image: "/images/official/ecommerce/storefront-setup.jpeg",
    kicker: "Shopify Store Setup",
    metrics: "Custom Theme & Integrations",
    packageUrl: "/our-custom-web-design-development-packages",
    packageText: "Explore Shopify Packages",
    starting: "From $450",
  },
  "etsy-shop-setup-service": {
    image: "/images/official/branding/brand-guidelines.jpeg",
    kicker: "13-Tag Etsy SEO & Launch",
    metrics: "13/13 Optimized Listing Tags",
    packageUrl: "/branding-packages",
    packageText: "Explore Branding Packages",
    starting: "From $299",
  },
  "tiktok-shop-setup-service": {
    image: "/images/official/tiktok/tiktok-growth.jpeg",
    kicker: "Social Commerce & Affiliates",
    metrics: "TikTok Seller & Catalog Sync",
    packageUrl: "/tiktok-marketing-packages",
    packageText: "Explore TikTok Packages",
    starting: "From $299/mo",
  },
  "web-design-dev": {
    image: "/images/official/branding/brand-identity.jpeg",
    kicker: "Next.js Web Development",
    metrics: "Responsive Design & CMS",
    packageUrl: "/web-design-packages",
    packageText: "Explore Web Design Packages",
    starting: "From $300",
  },
  "mobile-app-dev": {
    image: "/images/official/automation/system-integration.jpeg",
    kicker: "iOS & Android Apps",
    metrics: "Cross-Platform Engineering",
    packageUrl: "/mobile-app-packages",
    packageText: "Explore Mobile App Packages",
    starting: "From $999",
  },
  "branding-identity": {
    image: "/images/official/branding/branding-hero.jpeg",
    kicker: "Distinctive Visual Systems",
    metrics: "100% Custom Vector Assets",
    packageUrl: "/branding-packages",
    packageText: "Explore Branding Packages",
    starting: "From $299",
  },
  "aiseo-search": {
    image: "/images/official/aiseo/ai-discovery.jpeg",
    kicker: "AI Search Optimization",
    metrics: "Entity & Schema Architecture",
    packageUrl: "/ai-seo-packages",
    packageText: "Explore AI SEO Packages",
    starting: "From $349",
  },
  "google-ads": {
    image: "/images/official/aiseo/ai-monitoring.jpeg",
    kicker: "High-Intent Paid Search",
    metrics: "Google Search & Shopping",
    packageUrl: "/our-digital-marketing-packages",
    packageText: "Explore Marketing Packages",
    starting: "From $299/mo",
  },
  "meta-ads": {
    image: "/images/official/tiktok/tiktok-growth.jpeg",
    kicker: "Visual Social Funnels",
    metrics: "Meta CAPI & Creative Testing",
    packageUrl: "/our-digital-marketing-packages",
    packageText: "Explore Marketing Packages",
    starting: "From $299/mo",
  },
  "tiktok-marketing": {
    image: "/images/official/tiktok/tiktok-growth.jpeg",
    kicker: "Short-Form Video Ads",
    metrics: "Creative Scripting & Ads",
    packageUrl: "/tiktok-marketing-packages",
    packageText: "Explore TikTok Packages",
    starting: "From $299/mo",
  },
  "social-media-management": {
    image: "/images/official/branding/brand-strategy.jpeg",
    kicker: "Omnichannel Brand Voice",
    metrics: "Consistent Social Authority",
    packageUrl: "/our-digital-marketing-packages",
    packageText: "Explore Marketing Packages",
    starting: "From $299/mo",
  },
};

export default function InteractiveServices() {
  const [activeServiceId, setActiveServiceId] = useState("ecommerce-store-setup");
  const [hoveredService, setHoveredService] = useState<{ image: string; title: string } | null>(null);
  const { openProjectModal } = useScroll();

  const activeService =
    ALL_SERVICES.find((s) => s.id === activeServiceId) || ALL_SERVICES[0];

  const activeVisual = SERVICE_VISUALS[activeService.id] || SERVICE_VISUALS["ecommerce-store-setup"];

  return (
    <section id="services" className="relative py-24 sm:py-36 px-4 sm:px-6 md:px-12 bg-[#FAF7F6] border-t border-[#E0DDDB] overflow-hidden">
      {/* Background Decor */}
      <BackgroundGrid opacity={0.035} size={80} maskRadial />
      <PurpleGlowField position="bottom-left" size={700} opacity={0.12} parallaxSpeed={0.15} />
      <OversizedTypography text="SYSTEMS" direction="right" className="top-1/3 opacity-40" />

      {/* Floating Desktop Cursor Image Preview */}
      <CursorImagePreview
        activeImage={hoveredService?.image || null}
        activeTitle={hoveredService?.title || ""}
        isVisible={Boolean(hoveredService)}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 / AGENCY CAPABILITIES &amp; SYSTEMS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#161616] tracking-tight">
              One Unified Engine for Complete Digital Growth.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body">
              Branding, high-speed Shopify stores, performance advertising, and AI Search Optimization working in seamless harmony.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-xs font-display font-bold px-4 py-2.5 rounded-full bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] text-[#161616] transition-all shadow-xs"
            >
              <span>Dedicated Packages Hub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors"
            >
              <span>All 14 Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        {/* Interactive 2-Column Split: Interactive Rows (Left) & Dynamic Visual Stage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Service Rows */}
          <div className="lg:col-span-6 space-y-3">
            {ALL_SERVICES.map((service) => {
              const isSelected = service.id === activeServiceId;
              const visual = SERVICE_VISUALS[service.id];

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => {
                    setActiveServiceId(service.id);
                    if (visual) {
                      setHoveredService({ image: visual.image, title: service.shortTitle });
                    }
                  }}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#9F8BE7] shadow-[0_8px_30px_rgba(159,139,231,0.18)] ring-2 ring-[#9F8BE7]/20"
                      : "bg-white/60 border-[#E0DDDB] hover:bg-white hover:border-[#9F8BE7]/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono-num font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            isSelected
                              ? "bg-[#9F8BE7]/15 text-[#9F8BE7]"
                              : "bg-[#FAF7F6] text-[#585858]"
                          }`}
                        >
                          {service.kicker}
                        </span>
                        {visual?.starting && (
                          <span className="text-[10px] font-mono-num text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            {visual.starting}
                          </span>
                        )}
                      </div>
                      <h3
                        className={`font-display text-base sm:text-lg font-bold transition-transform duration-200 group-hover:translate-x-1.5 ${
                          isSelected ? "text-[#161616]" : "text-[#303030]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? "bg-[#9F8BE7] text-[#161616] border-[#9F8BE7] rotate-45 scale-110"
                          : "bg-[#FAF7F6] text-[#585858] border-[#E0DDDB] group-hover:border-[#9F8BE7] group-hover:text-[#161616]"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-[#E0DDDB]/70 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-num text-[#585858] animate-fadeIn">
                      <span className="text-[#9F8BE7] font-bold">{service.deliverableScope}</span>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors"
                      >
                        <span>Deep Dive Page</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visual Stage (Sticky Desktop) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#9F8BE7]/40 shadow-[0_15px_45px_rgba(159,139,231,0.12)] space-y-6">
              {/* Dynamic Image Stage */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#E0DDDB] bg-[#FAF7F6]">
                <Image
                  key={activeVisual.image}
                  src={activeVisual.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-700 animate-fadeIn"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num font-bold text-[#161616] shadow-xs">
                  {activeService.shortTitle}
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#9F8BE7] text-[#161616] text-xs font-mono-num font-bold shadow-md">
                  {activeVisual.metrics}
                </div>
              </div>

              {/* Active Service Details */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
                    {activeService.kicker}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#161616]">
                    {activeService.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  {activeService.summary}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono-num uppercase tracking-wider text-[#161616] font-bold block">
                    Core Deliverables &amp; Tech Stack:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.deliverables.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#303030]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 border-t border-[#E0DDDB] flex flex-wrap items-center gap-3">
                  <Link
                    href={activeVisual.packageUrl}
                    className="flex-1 py-3 px-4 rounded-full bg-[#9F8BE7] hover:bg-[#b4a3f7] text-[#161616] font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_15px_rgba(159,139,231,0.3)] text-center"
                  >
                    <span>{activeVisual.packageText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/services/${activeService.slug}`}
                    className="py-3 px-5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-[#161616] font-display font-bold text-xs flex items-center justify-center gap-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
