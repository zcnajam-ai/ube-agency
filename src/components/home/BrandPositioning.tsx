"use client";

import React from "react";
import { Heading3DSparkle } from "../common/Brand3DIcons";

export default function BrandPositioning() {
  return (
    <section className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#FAF7F6] border-t border-b border-[#E0DDDB] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E0DDDB] pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
            <Heading3DSparkle size={16} />
            <span>01 / UNIFIED BRAND PHILOSOPHY</span>
          </div>
          <span className="text-xs font-mono-num text-[#585858]">
            THE INTERSECTION OF CRAFT &amp; TECHNOLOGY
          </span>
        </div>

        {/* Grand Editorial Headline */}
        <div className="max-w-5xl space-y-6">
          <h2 className="font-display text-editorial-lg text-[#161616] tracking-tight leading-[1.04]">
            Strategy meets creativity. <br />
            <span className="text-[#585858]">Creativity meets technology.</span> <br />
            <span className="text-[#161616]">
              Technology meets{" "}
              <span className="text-[#9F8BE7] underline decoration-[#DDF160] decoration-4 underline-offset-8">
                sustainable growth.
              </span>
            </span>
          </h2>

          <p className="text-base sm:text-xl text-[#303030] font-body leading-relaxed max-w-3xl pt-2">
            Most digital agencies work in silos — a design studio makes logos, a freelancer builds a theme, and an ads vendor buys traffic. At{" "}
            <strong className="text-[#161616] font-bold">Unified Branding Experts</strong>, we unite brand identity, bespoke software engineering, high-volume eCommerce, and search optimization under one cohesive strategy.
          </p>
        </div>

        {/* 3 Value Pillars (Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-4 shadow-xs group">
            <span className="text-xs font-mono-num text-[#9F8BE7] font-bold">01 / STRATEGY FIRST</span>
            <h3 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
              Every Layout Serves a Business Purpose
            </h3>
            <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">
              We design with clear intent. Every layout choice, typographic hierarchy, and user pathway is crafted to make discovering and purchasing products straightforward.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-4 shadow-xs group">
            <span className="text-xs font-mono-num text-[#9F8BE7] font-bold">02 / CLEAN CODE</span>
            <h3 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
              Modern Next.js &amp; Web Standards
            </h3>
            <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">
              We write clean, modular Next.js and TypeScript code optimized for rapid page loading, mobile responsiveness, and stable user interaction.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-4 shadow-xs group">
            <span className="text-xs font-mono-num text-[#9F8BE7] font-bold">03 / SEARCH DISCOVERY</span>
            <h3 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
              Structured Entity &amp; Answer Optimization
            </h3>
            <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">
              We structure your website with clean JSON-LD entity schema and answer-first content architecture to strengthen search engine and conversational AI discoverability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
