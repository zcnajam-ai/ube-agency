import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICE_PILLARS } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Capabilities | eCommerce, Web Apps, Branding & AI SEO",
  description:
    "Explore our full spectrum of digital agency services: eCommerce store setup, bespoke web development, mobile applications, brand strategy, AI SEO, and performance advertising.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services",
  },
  openGraph: {
    title: "Services & Capabilities | eCommerce, Web Apps, Branding & AI SEO",
    description:
      "Explore our full spectrum of digital agency services: eCommerce store setup, bespoke web development, mobile applications, brand strategy, and AI SEO.",
    url: "https://unifiedbrandingexperts.com/services",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
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
            Architected for Growth. Engineered to Perform.
          </h1>
          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            We combine branding, full-stack engineering, high-velocity eCommerce, and AI search optimization under one unified growth strategy.
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

      {/* 4 Pillars Overview */}
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
                      <Link href={`/services/${sub.slug}`}>{sub.title}</Link>
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
                      href={`/services/${sub.slug}`}
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
      <div className="p-8 sm:p-12 rounded-3xl bg-[#161616] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
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
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md shrink-0 flex items-center gap-2"
        >
          <span>Open Packages Directory</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
