"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import InteractiveMedia from "../common/InteractiveMedia";
import TikTokMinimalVisual from "../common/TikTokMinimalVisual";
import BackgroundGrid from "../common/BackgroundGrid";
import PurpleGlowField from "../common/PurpleGlowField";
import OversizedTypography from "../common/OversizedTypography";
import {
  TikTok3DIcon,
  Meta3DIcon,
  Google3DIcon,
  Heading3DGrowth,
} from "../common/Brand3DIcons";

export default function GrowthAdsMarketing() {
  const { openProjectModal } = useScroll();
  const [activeTab, setActiveTab] = useState<"tiktok" | "meta" | "google">("tiktok");

  const channels = {
    tiktok: {
      title: "TikTok Shop & Video Marketing",
      tagline: "Turn Short-Form Content into Direct Sales & Brand Discovery",
      badge: "TIKTOK COMMERCE & ADS",
      packageUrl: "/tiktok-marketing-packages",
      image: "/images/official/tiktok/tiktok-growth.jpeg",
      desc: "We build structured TikTok content strategies, video creative frameworks, creator whitelisting, and TikTok Shop storefront integrations designed to connect with engaged buyers.",
      icon: <TikTok3DIcon size={24} />,
      deliverables: [
        "TikTok Shop Storefront Setup & Product Catalog Sync",
        "Short-Form Video Concepting & Scripting Frameworks",
        "Spark Ads & Targeted Campaign Setup",
        "TikTok Events API & Pixel Configuration",
      ],
      scopeTag: "TikTok Shop Setup & Content Strategy",
    },
    meta: {
      title: "Meta Ads (Instagram & Facebook)",
      tagline: "Visual Advertising & Conversion API Funnels",
      badge: "META AD MANAGEMENT",
      packageUrl: "/services/meta-ads",
      image: "/images/official/branding/branding-hero.webp",
      desc: "We architect full-funnel Meta advertising campaigns with structured audience segmentation, visual creative variations, catalog sales ads, and Meta Conversions API (CAPI) server-side tracking.",
      icon: <Meta3DIcon size={24} />,
      deliverables: [
        "Ad Creative Testing & Format Segmentation",
        "Advantage+ Catalog & Retargeting Funnels",
        "Conversions API (CAPI) Server-Side Tracking",
        "Clear, Mobile-Optimized Post-Click Landing Pages",
      ],
      scopeTag: "Instagram & Facebook Paid Campaigns",
    },
    google: {
      title: "Google Marketing & Performance Max",
      tagline: "Reach High-Intent Customers Actively Searching for Your Products",
      badge: "GOOGLE SEARCH & SHOPPING",
      packageUrl: "/services/google-ads",
      image: "/images/official/aiseo/ai-discovery.jpeg",
      desc: "We build structured Google Search campaigns, Google Merchant Center Shopping feeds, and tailored Performance Max asset groups synchronized with transparent performance reporting.",
      icon: <Google3DIcon size={24} />,
      deliverables: [
        "High-Intent Keyword Architecture & Negative Match Lists",
        "Google Merchant Center Product Feed Optimization",
        "Performance Max Audience Signals & Creative Assets",
        "Conversion Tracking & Smart Bidding Calibration",
      ],
      scopeTag: "Google Search & Merchant Campaigns",
    },
  };

  const current = channels[activeTab];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-white border-b border-[#E0DDDB] overflow-hidden">
      {/* Ambient Atmosphere */}
      <BackgroundGrid opacity={0.025} size={72} maskRadial />
      <PurpleGlowField position="bottom-right" size={700} opacity={0.08} />
      <OversizedTypography text="PERFORMANCE" direction="left" className="top-12 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-2xs">
              <Heading3DGrowth size={16} />
              <span>PAID ACQUISITION • TIKTOK SHOP • META • GOOGLE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
              Targeted Traffic &amp; Structured Campaign Management
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
              We engineer synchronized advertising campaigns across <strong className="text-[#161616]">TikTok Shop</strong>, <strong className="text-[#161616]">Meta Ads (Instagram &amp; Facebook)</strong>, and <strong className="text-[#161616]">Google Search &amp; Shopping</strong> to connect your products with the right audience.
            </p>
          </div>

          {/* 3D Tab Selector Switcher */}
          <div className="flex flex-wrap items-center gap-2 bg-[#FAF7F6] p-1.5 rounded-full border border-[#E0DDDB] shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("tiktok")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${
                activeTab === "tiktok"
                  ? "bg-[#161616] text-white shadow-xs"
                  : "text-[#585858] hover:text-[#161616]"
              }`}
            >
              <TikTok3DIcon size={18} />
              <span>TikTok Shop &amp; Ads</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("meta")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${
                activeTab === "meta"
                  ? "bg-[#161616] text-white shadow-xs"
                  : "text-[#585858] hover:text-[#161616]"
              }`}
            >
              <Meta3DIcon size={18} />
              <span>Meta Ads</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("google")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-bold transition-all cursor-pointer ${
                activeTab === "google"
                  ? "bg-[#161616] text-white shadow-xs"
                  : "text-[#585858] hover:text-[#161616]"
              }`}
            >
              <Google3DIcon size={18} />
              <span>Google Marketing</span>
            </button>
          </div>
        </div>

        {/* Dynamic Channel Stage */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {current.icon}
                <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider">
                  {current.badge}
                </span>
              </div>
              <span className="text-xs font-mono-num font-bold text-[#161616] bg-white px-3 py-1 rounded-full border border-[#E0DDDB]">
                {current.scopeTag}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
                {current.title}
              </h3>
              <p className="font-display text-sm sm:text-base font-semibold text-[#9F8BE7]">
                {current.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
              {current.desc}
            </p>

            {/* Deliverables List */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[11px] font-mono-num uppercase tracking-wider text-[#161616] font-bold block">
                Execution &amp; Technical Scope:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#303030]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E0DDDB] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openProjectModal(`${current.title} Campaign`)}
                className="px-6 py-3 rounded-full bg-[#161616] text-white hover:bg-[#303030] text-xs sm:text-sm font-display font-bold transition-all shadow-xs cursor-pointer"
              >
                Launch {activeTab === "tiktok" ? "TikTok" : activeTab === "meta" ? "Meta" : "Google"} Strategy
              </button>

              <Link
                href={current.packageUrl}
                className="px-5 py-3 rounded-full bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs font-display font-bold text-[#161616] transition-all flex items-center gap-1.5 shadow-2xs"
              >
                <span>Compare Packages</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
              </Link>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            {activeTab === "tiktok" ? (
              <TikTokMinimalVisual />
            ) : (
              <InteractiveMedia
                key={current.image}
                src={current.image}
                alt={current.title}
                aspectRatio="aspect-[4/3]"
                badgeText={current.badge}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
