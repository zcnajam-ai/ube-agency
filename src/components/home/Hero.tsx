"use client";

import React, { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight, Smartphone, Bot, Palette } from "lucide-react";

const FloatingDotsBackground = dynamic(
  () => import("../common/FloatingDotsBackground"),
  { ssr: false }
);
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import MagneticButton from "../common/MagneticButton";
import BackgroundGrid from "../common/BackgroundGrid";
import PurpleGlowField from "../common/PurpleGlowField";
import OversizedTypography from "../common/OversizedTypography";
import {
  Shopify3DIcon,
  TikTok3DIcon,
  Google3DIcon,
  Heading3DSparkle,
} from "../common/Brand3DIcons";

export default function Hero() {
  const { openProjectModal } = useScroll();
  const heroRef = useRef<HTMLElement>(null);

  const priorityPills = [
    { label: "Shopify & Dropshipping", href: "/services/shopify-development", icon: <Shopify3DIcon size={18} /> },
    { label: "TikTok Shop & Meta Ads", href: "/tiktok-marketing-packages", icon: <TikTok3DIcon size={18} /> },
    { label: "Google Marketing", href: "/services/google-ads", icon: <Google3DIcon size={18} /> },
    { label: "AI SEO & Overviews", href: "/ai-seo-packages", icon: <Heading3DSparkle size={18} /> },
    { label: "Branding (From $299)", href: "/branding-packages", icon: <Palette className="w-4 h-4 text-blue-600" /> },
    { label: "Mobile Apps (From $999)", href: "/mobile-app-packages", icon: <Smartphone className="w-4 h-4 text-amber-600" /> },
    { label: "AI Automation (From $349)", href: "/ai-automation-packages", icon: <Bot className="w-4 h-4 text-[#9F8BE7]" /> },
  ];

  return (
    <section
      ref={heroRef}
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 bg-[#FAF7F6] overflow-hidden border-b border-[#E0DDDB]"
    >
      {/* 1. Ambient Background Layers */}
      <BackgroundGrid opacity={0.03} size={72} maskRadial />
      <PurpleGlowField position="top-right" size={700} opacity={0.08} />
      <OversizedTypography text="COMMERCE" direction="left" className="top-6 opacity-40" />

      {/* 1b. Floating Particle Dots (above grid, below content) */}
      <FloatingDotsBackground />

      {/* 2. Foreground Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Hero Headline */}
        <div className="space-y-4 max-w-5xl">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#161616] tracking-tighter leading-[1.06]">
            High-Performance eCommerce, <br className="hidden sm:block" />
            <span className="text-[#9F8BE7]">Growth Marketing</span> &amp; AI Systems.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#585858] font-body leading-relaxed max-w-3xl">
            We scale ambitious brands with professional <strong className="text-[#161616] font-bold">Shopify &amp; Dropshipping storefronts</strong>, viral <strong className="text-[#161616] font-bold">TikTok Shop &amp; Meta ad campaigns</strong>, high-intent <strong className="text-[#161616] font-bold">Google Marketing</strong>, <strong className="text-[#161616] font-bold">AI SEO search visibility</strong>, custom <strong className="text-[#161616] font-bold">mobile apps</strong>, and intelligent <strong className="text-[#161616] font-bold">AI automations</strong>.
          </p>
        </div>

        {/* Quick Service Pathways (Interactive Pills with 3D Icons) */}
        <div className="space-y-2.5">
          <span className="text-[11px] font-mono-num uppercase tracking-wider text-[#585858] font-bold block">
            Direct Service &amp; Package Pathways
          </span>
          <div className="flex flex-wrap gap-2.5">
            {priorityPills.map((pill) => (
              <Link
                key={pill.label}
                href={pill.href}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs font-display font-semibold text-[#161616] hover:text-[#9F8BE7] transition-all shadow-2xs group"
              >
                {pill.icon}
                <span>{pill.label}</span>
                <ArrowUpRight className="w-3 h-3 text-[#585858] group-hover:text-[#9F8BE7] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Action Conversion CTAs (Metrics block removed for clean, honest layout) */}
        <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-[#E0DDDB]">
          <MagneticButton
            size="lg"
            variant="primary"
            showArrow
            onClick={() => openProjectModal()}
            className="w-full sm:w-auto shadow-[0_4px_20px_rgba(159,139,231,0.4)]"
          >
            Start Your Project
          </MagneticButton>

          <Link
            href="/packages"
            className="px-6 py-3.5 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-xs sm:text-sm font-display font-bold text-[#161616] transition-all flex items-center justify-center gap-2 shadow-xs w-full sm:w-auto"
          >
            <span>Explore All Packages ($299+)</span>
            <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
