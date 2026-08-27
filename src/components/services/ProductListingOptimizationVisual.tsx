"use client";

import React from "react";
import { XCircle, CheckCircle2, Search, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function ProductListingOptimizationVisual() {
  return (
    <div className="w-full rounded-3xl bg-white border border-[#E0DDDB] p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E0DDDB] pb-5">
        <div>
          <span className="text-[11px] font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            LISTING ARCHITECTURE COMPARISON
          </span>
          <h3 className="font-display text-xl font-bold text-[#161616]">
            Unoptimized vs. Conversion &amp; Search-Engine-Optimized Product Listing
          </h3>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono-num font-bold text-emerald-700">
          Search &amp; AI Citation Ready
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before / Unoptimized */}
        <div className="p-6 rounded-2xl bg-[#FFF9F8] border border-rose-200 space-y-4">
          <div className="flex items-center gap-2 text-rose-600 font-display font-bold text-sm">
            <XCircle className="w-4 h-4" />
            <span>Unoptimized Listing (Low Conversion &amp; Search Rank)</span>
          </div>
          <div className="space-y-2 text-xs text-[#585858]">
            <div className="p-3 rounded-xl bg-white border border-rose-100 font-mono-num text-[11px] space-y-1">
              <p className="font-bold text-[#161616]">Title: "Cute Handmade Pillow Case White"</p>
              <p className="text-rose-500">❌ Vague title missing platform keywords &amp; materials</p>
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-start gap-1.5 text-rose-700">
                <span className="font-bold">❌</span> Short 2-sentence description without benefit bullet points.
              </li>
              <li className="flex items-start gap-1.5 text-rose-700">
                <span className="font-bold">❌</span> Missing product dimensions, care instructions, and fabric specifications.
              </li>
              <li className="flex items-start gap-1.5 text-rose-700">
                <span className="font-bold">❌</span> No structured data schema (Google/AI answer engines cannot parse).
              </li>
              <li className="flex items-start gap-1.5 text-rose-700">
                <span className="font-bold">❌</span> Missing 13-tag Etsy keywords &amp; Amazon backend search terms.
              </li>
            </ul>
          </div>
        </div>

        {/* After / UBE Optimized */}
        <div className="p-6 rounded-2xl bg-[#F6FDF9] border border-emerald-200 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-700 font-display font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>UBE Optimized Listing (High Rank &amp; Conversion Velocity)</span>
          </div>
          <div className="space-y-2 text-xs text-[#161616]">
            <div className="p-3 rounded-xl bg-white border border-emerald-200 font-mono-num text-[11px] space-y-1 shadow-2xs">
              <p className="font-bold text-[#161616]">
                Title: "Organic Cotton Tufted Boho Pillow Cover (18x18) — Textured Farmhouse Cushion"
              </p>
              <p className="text-emerald-600 font-bold">✓ High-intent search terms + material specs included</p>
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-start gap-1.5 text-emerald-800">
                <span className="font-bold text-emerald-600">✓</span> 5 benefit-driven bullet points highlighting durability &amp; aesthetics.
              </li>
              <li className="flex items-start gap-1.5 text-emerald-800">
                <span className="font-bold text-emerald-600">✓</span> Complete specs: hidden zipper, OEKO-TEX certified cotton, washable.
              </li>
              <li className="flex items-start gap-1.5 text-emerald-800">
                <span className="font-bold text-emerald-600">✓</span> Valid Product &amp; Offer JSON-LD schema for Google &amp; AI overviews.
              </li>
              <li className="flex items-start gap-1.5 text-emerald-800">
                <span className="font-bold text-emerald-600">✓</span> Fully optimized tags for Etsy, Amazon A+ content, &amp; eBay item specifics.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
