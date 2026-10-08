import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICE_PILLARS } from "@/data/services";

export const metadata: Metadata = {
  title: "Websites, Marketing, Automation & eCommerce Services",
  description:
    "Explore website development, digital marketing, AI automation, and eCommerce services. Compare the scope of each and find the right starting point for your business.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services",
  },
  openGraph: {
    title: "Websites, Marketing, Automation & eCommerce Services",
    description:
      "Website development, digital marketing, AI automation, and eCommerce services from Unified Branding Experts.",
    url: "https://unifiedbrandingexperts.com/services",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/services/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Services - Unified Branding Experts",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* Editorial Page Hero */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#E0DDDB] pb-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-SERVICE AGENCY CAPABILITIES</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Websites, marketing, automation &amp; eCommerce services.
          </h1>
          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Start with the work your business needs now: a website, marketing, automation, or an online store. We connect the pieces when a project calls for more than one service. Branding and mobile apps support those projects where relevant.
          </p>
        </div>

        {/* Dedicated Packages Hub CTA */}
        <Link
          href="/packages"
          className="px-6 py-4 rounded-3xl bg-[#161616] text-white hover:bg-[#9F8BE7] hover:text-[#161616] transition-all flex items-center justify-between gap-4 shadow-sm shrink-0 group"
        >
          <div>
            <span className="text-[11px] font-mono-num text-[#DDF160] group-hover:text-[#161616] font-bold block uppercase tracking-wider">
              Transparent Pricing
            </span>
            <span className="font-display font-bold text-sm block">
              View Packages Directory →
            </span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[#9F8BE7] group-hover:text-[#161616] transition-colors" />
        </Link>
      </div>

      <nav aria-label="Explore core services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Websites", href: "/services/web-design-development", detail: "Business websites and custom web development" },
          { title: "Marketing", href: "/services/digital-marketing", detail: "Search, social content, and paid campaigns" },
          { title: "Automation", href: "/services/ai-automation", detail: "CRM workflows and connected operations" },
          { title: "eCommerce", href: "/services/ecommerce", detail: "Store builds, marketplaces, and management" },
        ].map((path) => (
          <Link key={path.title} href={path.href} className="group flex flex-col justify-between gap-5 rounded-2xl border border-[#E0DDDB] bg-white/95 p-6 transition-colors hover:border-[#6B4BA7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B4BA7]">
            <span className="font-display text-xl font-bold text-[#161616]">{path.title}</span>
            <span className="flex items-end justify-between gap-3 text-sm text-[#585858]">
              <span>{path.detail}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[#6B4BA7] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </nav>

      {/* Detailed Services Overview */}
      <div className="space-y-16">
        {SERVICE_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            id={pillar.id}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E0DDDB] pb-6">
              <div>
                <span className="text-xs font-mono-num text-[#9F8BE7] font-bold uppercase tracking-widest block">
                  PILLAR {pillar.number} • {pillar.kicker}
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight mt-1">
                  {pillar.title}
                </h2>
              </div>
              <p className="text-sm text-[#585858] max-w-lg font-body">{pillar.description}</p>
            </div>

            {/* Sub-services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillar.subServices.map((sub) => (
                <div
                  key={sub.slug}
                  className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono-num text-[#9F8BE7] font-bold uppercase">
                      {sub.kicker}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                      <Link href={sub.slug === "tiktok-shop-setup" ? "/tiktok-shop" : `/services/${sub.slug}`}>{sub.title}</Link>
                    </h3>
                    <p className="text-xs text-[#585858] font-body leading-relaxed line-clamp-3">
                      {sub.summary}
                    </p>
                  </div>

                  <div className="border-t border-[#E0DDDB] pt-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono-num text-[#9F8BE7] font-bold">
                      {sub.deliverableScope}
                    </span>
                    <Link
                      href={sub.slug === "tiktok-shop-setup" ? "/tiktok-shop" : `/services/${sub.slug}`}
                      className="text-xs font-display font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Package Quick Strip */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#161616] text-white flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs font-mono-num text-[#DDF160] uppercase font-bold tracking-widest">
            DIRECT PACKAGE PATHWAYS
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Need Fixed Scope Packages &amp; Transparent Tiers?
          </h3>
          <p className="text-xs sm:text-sm text-[#ACACAC]">
            Branding from $299 • AI SEO from $349 • Automation from $349 • TikTok from $299/mo • Mobile Apps from $999.
          </p>
        </div>

        <Link
          href="/packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md w-full sm:w-auto min-w-0 flex flex-wrap items-center justify-center text-center gap-2"
        >
          <span>Open Packages Directory</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
