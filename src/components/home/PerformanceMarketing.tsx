"use client";

import React, { useState } from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { useScroll } from "@/components/providers/SmoothScrollProvider";

export default function PerformanceMarketing() {
  const { openProjectModal } = useScroll();
  const [activeChannel, setActiveChannel] = useState<"google" | "meta" | "tiktok">("google");

  const channelData = {
    google: {
      name: "Google Ads & Performance Max",
      focus: "High-Intent Bottom-of-Funnel Search & Shopping",
      details:
        "Capture active buyers searching for exact commercial keywords. We deploy negative keyword matrices, smart bidding optimization, and synchronized high-converting landing pages.",
      deliverables: [
        "Search Keyword Exact-Match Architecture",
        "Performance Max Creative & Audience Assets",
        "Google Merchant Center Feed Optimization",
        "Server-Side Conversion Value Tracking",
      ],
      badge: "INTENT-DRIVEN ACQUISITION",
      accent: "#9F8BE7",
    },
    meta: {
      name: "Meta Ads (Facebook & Instagram)",
      focus: "Visual Direct-Response Creative & Dynamic Retargeting",
      details:
        "Engage passive prospects with scroll-stopping visual ad creatives, interactive UGC sequences, Advantage+ catalog funnels, and precision Meta Conversions API (CAPI) tracking.",
      deliverables: [
        "High-Velocity Ad Creative Testing Matrix",
        "Full-Funnel Retargeting & Lookalikes",
        "Conversions API (CAPI) Server Setup",
        "Post-Click Landing Page Optimization",
      ],
      badge: "VISUAL DEMAND GENERATION",
      accent: "#9F8BE7",
    },
    tiktok: {
      name: "TikTok Ads & Viral Attention",
      focus: "High-Velocity Short-Form Video Scaling",
      details:
        "Unlock explosive audience reach with native short-form video hooks, creator-style direct response ads, Spark Ads amplification, and fast creative iteration cycles.",
      deliverables: [
        "Native UGC Scripting & Hook Frameworks",
        "TikTok Events API & Pixel Calibration",
        "Spark Ads & Creator Partnership Setup",
        "Trend Jacking & Creative Refresh Cycles",
      ],
      badge: "ATTENTION-DRIVEN VIRALITY",
      accent: "#DDF160",
    },
  };

  const current = channelData[activeChannel];

  return (
    <section className="relative py-24 sm:py-36 px-6 md:px-12 bg-[#FAF7F6] border-t border-[#E0DDDB] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>05 / PERFORMANCE MARKETING & PAID MEDIA</span>
            </div>
            <h2 className="font-display text-editorial-lg text-[#161616] tracking-tight">
              Traffic is Useful. Revenue is Better.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body">
              We design and execute data-backed paid acquisition funnels across Google, Meta, and TikTok that eliminate ad waste and maximize Customer Lifetime Value (LTV).
            </p>
          </div>

          <button
            type="button"
            onClick={() => openProjectModal("Google & Meta Ads")}
            className="px-6 py-3.5 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-xs sm:text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] flex items-center gap-2 cursor-pointer"
          >
            <span>Plan Paid Acquisition</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Acquisition Architecture Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Channel Selectors */}
          <div className="lg:col-span-4 space-y-3">
            {(["google", "meta", "tiktok"] as const).map((key) => {
              const ch = channelData[key];
              const isActive = activeChannel === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveChannel(key)}
                  className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-[#9F8BE7] shadow-sm ring-2 ring-[#9F8BE7]/20"
                      : "bg-white/60 border-[#E0DDDB] hover:bg-white hover:border-[#9F8BE7]/50 opacity-80 hover:opacity-100"
                  }`}
                >
                  <span
                    className="text-[10px] font-mono-num uppercase tracking-wider block font-bold text-[#9F8BE7]"
                  >
                    {ch.badge}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#161616] mt-1">
                    {ch.name}
                  </h3>
                  <p className="text-xs text-[#585858] font-body mt-1 line-clamp-1">
                    {ch.focus}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Strategy Canvas */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white border border-[#E0DDDB] shadow-sm space-y-8">
            <div className="space-y-3">
              <span
                className="px-3.5 py-1 rounded-full text-xs font-mono-num uppercase tracking-wider inline-block border border-[#9F8BE7] bg-[#9F8BE7]/15 text-[#161616] font-bold"
              >
                {current.badge}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
                {current.name}
              </h3>
              <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
                {current.details}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#161616]">
                Campaign Architecture & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.deliverables.map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-start gap-3"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-[#9F8BE7]"
                    />
                    <span className="text-xs text-[#303030] font-body font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#E0DDDB] pt-6 flex items-center justify-between text-xs text-[#585858] font-mono-num">
              <span>ZERO VANITY METRICS • CONVERSION-TIED ROI</span>
              <span className="text-[#161616] font-bold">WEEKLY REVENUE REPORTING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
