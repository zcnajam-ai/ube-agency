"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function PlatformEcosystem() {
  const platforms = [
    { name: "Shopify Plus", category: "Commerce", role: "High-Volume Storefronts" },
    { name: "WooCommerce", category: "Commerce", role: "Custom Open-Source Stores" },
    { name: "Next.js App Router", category: "Engineering", role: "Sub-Second Web & Headless" },
    { name: "React & TypeScript", category: "Engineering", role: "Interactive Interfaces" },
    { name: "React Native & Swift", category: "Mobile", role: "Native iOS & Android" },
    { name: "Stripe & Checkout", category: "Fintech", role: "Global Multi-Currency APIs" },
    { name: "Google Ads & PMax", category: "Growth", role: "High-Intent Paid Search" },
    { name: "Meta Ads & CAPI", category: "Growth", role: "Direct-Response Social Funnels" },
    { name: "TikTok Events API", category: "Growth", role: "Viral Short-Form Scaling" },
    { name: "JSON-LD & Schema", category: "AISEO", role: "Answer Engine Graphs" },
    { name: "Tailwind CSS & GSAP", category: "Motion", role: "60fps Editorial UI" },
    { name: "Klaviyo & CRM", category: "Automation", role: "Retention & Email Flows" },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-6 md:px-12 bg-[#FAF7F6] border-t border-[#E0DDDB] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10 / PLATFORM & TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Platforms & Technologies We Work With
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            We leverage industry-leading commerce platforms, modern full-stack frameworks, and enterprise advertising APIs to build scalable digital assets.
          </p>
        </div>

        {/* 12 Platform Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {platforms.map((plat) => (
            <div
              key={plat.name}
              className="p-5 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all shadow-xs group"
            >
              <span className="text-[10px] font-mono-num uppercase tracking-wider text-[#9F8BE7] font-bold block">
                {plat.category}
              </span>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#161616] mt-1 group-hover:text-[#9F8BE7] transition-colors">
                {plat.name}
              </h3>
              <p className="text-[11px] text-[#585858] font-body mt-0.5">
                {plat.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
