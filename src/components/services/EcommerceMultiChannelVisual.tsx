"use client";

import React from "react";
import CommercePlatformIcon3D from "@/components/common/CommercePlatformIcon3D";
import { ArrowRight, CheckCircle, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export default function EcommerceMultiChannelVisual() {
  const channels = [
    { platform: "shopify" as const, name: "Shopify Storefront", role: "Branded Direct Hub", highlight: "Full Brand Ownership" },
    { platform: "amazon" as const, name: "Amazon Marketplace", role: "Global Search Volume", highlight: "Prime Visibility" },
    { platform: "etsy" as const, name: "Etsy Marketplace", role: "Niche & Creative Buyers", highlight: "Handmade & Gift SEO" },
    { platform: "ebay" as const, name: "eBay Storefront", role: "Specialty & Catalog Reach", highlight: "Refurbished & Deals" },
  ];

  return (
    <div className="w-full rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] p-6 sm:p-8 space-y-8 shadow-xs">
      {/* Platform Cluster Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E0DDDB] pb-6">
        <div>
          <span className="text-[11px] font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            UNIFIED MULTI-CHANNEL SYSTEM
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#161616]">
            One Core Strategy. 4 Major Selling Channels.
          </h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num font-bold text-emerald-600 shadow-xs">
          <ShieldCheck className="w-4 h-4" />
          <span>Synchronized Catalog &amp; Growth</span>
        </div>
      </div>

      {/* 3D Platform Tile Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {channels.map((ch) => (
          <div
            key={ch.platform}
            className="p-4 rounded-2xl bg-white border border-[#E0DDDB] flex flex-col items-center text-center space-y-3 shadow-xs hover:border-[#9F8BE7] transition-all group"
          >
            <CommercePlatformIcon3D platform={ch.platform} size="lg" />
            <div>
              <h4 className="font-display text-sm font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                {ch.name}
              </h4>
              <p className="text-[11px] font-mono-num text-[#585858]">{ch.role}</p>
            </div>
            <span className="text-[10px] font-mono-num px-2 py-0.5 rounded-md bg-[#FAF7F6] border border-[#E0DDDB] text-emerald-600 font-bold">
              {ch.highlight}
            </span>
          </div>
        ))}
      </div>

      {/* Synchronized Commerce Flow Diagram */}
      <div className="p-6 rounded-2xl bg-white border border-[#E0DDDB] space-y-4 shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono-num font-bold text-[#161616]">
          <span>CONNECTED SALES PIPELINE</span>
          <span className="text-[#9F8BE7]">REAL-TIME SYNC</span>
        </div>

        {/* Responsive Pipeline */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex-1 p-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center gap-3">
            <CommercePlatformIcon3D platform="shopify" size="sm" />
            <div>
              <span className="font-display font-bold text-xs text-[#161616] block">Shopify HQ</span>
              <span className="text-[10px] text-[#585858] font-mono-num">Catalog Master</span>
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-[#9F8BE7] rotate-90 md:rotate-0 shrink-0" />

          <div className="flex-1 p-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-[#161616] block">Multi-Sync Engine</span>
              <span className="text-[10px] text-[#585858] font-mono-num">Amazon + Etsy + eBay</span>
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-[#9F8BE7] rotate-90 md:rotate-0 shrink-0" />

          <div className="flex-1 p-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-[#161616] block">Unified Orders</span>
              <span className="text-[10px] text-[#585858] font-mono-num">Customer Growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
