"use client";

import React from "react";
import Link from "next/link";
import {
  Palette,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import InteractiveMedia from "../common/InteractiveMedia";
import BackgroundGrid from "../common/BackgroundGrid";
import PurpleGlowField from "../common/PurpleGlowField";
import OversizedTypography from "../common/OversizedTypography";
import { Google3DIcon, Heading3DSparkle } from "../common/Brand3DIcons";

export default function AISEOAndBranding() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#FAF7F6] border-b border-[#E0DDDB] overflow-hidden">
      {/* Ambient Atmosphere */}
      <BackgroundGrid opacity={0.03} size={80} maskRadial />
      <PurpleGlowField position="center" size={800} opacity={0.08} />
      <OversizedTypography text="AI SEARCH" direction="right" className="top-12 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-2xs">
              <Heading3DSparkle size={16} />
              <span>DISCOVERY &amp; IDENTITY • AI SEO &amp; BRANDING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
              Search Discovery Meets Brand Authority.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
              We help businesses strengthen their visibility across Google Search, Google AI Overviews, Bing and AI-powered discovery experiences such as ChatGPT Search, while building a distinctive visual identity customers can recognize and trust.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/packages"
              className="px-6 py-3 rounded-full bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs sm:text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>Explore All Packages ($299+)</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        {/* 2-Card Split: AI SEO on Left, Branding on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: AI SEO Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#161616] text-white border border-white/10 flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9F8BE7]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Google3DIcon size={24} />
                </div>
                <span className="text-xs font-mono-num px-3 py-1 rounded-full bg-[#DDF160]/15 text-[#DDF160] border border-[#DDF160]/30 font-bold">
                  PLANS FROM $349
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  AI Search Optimization &amp; Structured Content
                </h3>
                <p className="text-xs sm:text-sm text-[#ACACAC] font-body leading-relaxed">
                  Search behaviors are evolving. Potential buyers search across Google and conversational answer tools. We structure your website with clear entity relationships and JSON-LD schema so search engines and AI assistants can accurately index and cite your brand.
                </p>
              </div>

              {/* Visual Preview */}
              <InteractiveMedia
                src="/images/official/aiseo/google-search-aiseo-hub.png"
                alt="Unified Branding Experts AI Search Optimization Architecture on Google"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectFit="contain"
                badgeText="Structured Search Architecture"
                className="bg-white"
              />

              <ul className="space-y-2 text-xs text-[#E0DDDB]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DDF160] shrink-0" />
                  <span>Google Search &amp; AI Overview Technical Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DDF160] shrink-0" />
                  <span>Answer-First Content Architecture &amp; Clear FAQ Formatting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DDF160] shrink-0" />
                  <span>Structured JSON-LD Schema &amp; Entity Relationships</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
              <Link
                href="/services/aiseo"
                className="text-xs font-display font-bold text-[#DDF160] hover:underline flex items-center gap-1"
              >
                <span>Read AI SEO Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/ai-seo-packages"
                className="px-5 py-2.5 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-xs hover:bg-[#b4a3f7] transition-colors"
              >
                <span>Compare AI SEO Plans ($349+)</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Branding & Identity Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E0DDDB] flex flex-col justify-between space-y-8 shadow-sm relative overflow-hidden group hover:border-[#9F8BE7] transition-all">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center">
                  <Palette className="w-5 h-5 text-[#9F8BE7]" />
                </div>
                <span className="text-xs font-mono-num px-3 py-1 rounded-full bg-[#9F8BE7]/15 text-[#9F8BE7] border border-[#9F8BE7]/30 font-bold">
                  PLANS FROM $299
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
                  Brand Strategy, Logo Systems &amp; Guidelines
                </h3>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  A strong brand creates instant trust and visual clarity. We craft distinct visual identities, custom vector logo systems, color palette specifications, and master typography standards.
                </p>
              </div>

              {/* Visual Preview */}
              <InteractiveMedia
                src="/images/official/branding/branding-hero.jpeg"
                alt="Unified Branding Experts Corporate Branding & Visual System"
                aspectRatio="aspect-[16/9]"
                badgeText="Complete Brand Guidelines"
              />

              <ul className="space-y-2 text-xs text-[#303030]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3 Unique Custom Logo Concepts with Dedicated Revisions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complete Vector &amp; Web Asset Kit (AI, EPS, SVG, PNG)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Comprehensive Brand Guidelines &amp; Typography Standards</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E0DDDB] flex items-center justify-between relative z-10">
              <Link
                href="/services/branding"
                className="text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] flex items-center gap-1"
              >
                <span>Read Branding Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
              </Link>

              <Link
                href="/branding-packages"
                className="px-5 py-2.5 rounded-full bg-[#161616] text-white hover:bg-[#303030] font-display font-bold text-xs transition-colors"
              >
                <span>Explore Branding Plans ($299+)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
