"use client";

import React from "react";
import { Sparkles, Phone, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import MagneticButton from "../common/MagneticButton";
import BackgroundGrid from "../common/BackgroundGrid";
import PurpleGlowField from "../common/PurpleGlowField";
import OversizedTypography from "../common/OversizedTypography";

export default function FinalCTA() {
  const { openProjectModal } = useScroll();

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#FAF7F6] border-t border-[#E0DDDB] overflow-hidden">
      {/* Ambient Decor */}
      <BackgroundGrid opacity={0.03} size={80} maskRadial />
      <PurpleGlowField position="center" size={800} opacity={0.12} parallaxSpeed={0.2} />
      <OversizedTypography text="UNIFIED" direction="right" className="top-8 opacity-25" />

      <div className="relative z-10 max-w-6xl mx-auto rounded-3xl bg-[#161616] p-8 sm:p-14 md:p-16 text-center space-y-6 overflow-hidden shadow-2xl text-white border border-white/10">
        {/* Subtle Ambient Radial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#9F8BE7]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/10 text-xs font-mono-num text-[#DDF160] font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START YOUR SCALING SPRINT</span>
        </div>

        <div className="space-y-3 relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.06]">
            Have an idea? <br />
            <span className="text-[#9F8BE7]">
              Let&apos;s make it impossible to ignore.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#ACACAC] font-body max-w-2xl mx-auto pt-1 leading-relaxed">
            Partner with Unified Branding Experts to scale your eCommerce, TikTok Shop, Meta ads, Google marketing, AI SEO, and mobile apps under one cohesive system.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 relative z-10">
          <MagneticButton
            size="lg"
            variant="primary"
            showArrow
            onClick={() => openProjectModal()}
            className="w-full sm:w-auto shadow-[0_4px_25px_rgba(159,139,231,0.5)]"
          >
            Start Your Project
          </MagneticButton>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#9F8BE7] text-xs sm:text-sm font-mono-num text-white transition-all flex items-center justify-center gap-2 whitespace-nowrap min-h-[48px]"
          >
            <Phone className="w-4 h-4 text-[#9F8BE7] shrink-0" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Confidence Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-mono-num text-[#838383] relative z-10">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            200+ Delivered Projects
          </span>
          <span>•</span>
          <span>90% Client Retention</span>
          <span>•</span>
          <span>24-Hour Scope Response</span>
        </div>
      </div>
    </section>
  );
}
