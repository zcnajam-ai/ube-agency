"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import InteractiveMedia from "@/components/common/InteractiveMedia";
import BackgroundGrid from "@/components/common/BackgroundGrid";
import OversizedTypography from "@/components/common/OversizedTypography";
import PurpleGlowField from "@/components/common/PurpleGlowField";
import { Heading3DSparkle } from "@/components/common/Brand3DIcons";

export default function WorkIndexPage() {
  return (
    <div className="relative pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16 overflow-hidden">
      {/* Ambient Atmosphere */}
      <BackgroundGrid opacity={0.03} size={80} maskRadial />
      <PurpleGlowField position="top-right" size={700} opacity={0.08} />
      <OversizedTypography text="CASE STUDIES" direction="left" className="top-24 opacity-30" />

      {/* Editorial Page Hero */}
      <div className="relative z-10 space-y-4 max-w-3xl border-b border-[#E0DDDB] pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num uppercase tracking-wider text-[#9F8BE7] font-bold shadow-xs">
          <Heading3DSparkle size={16} />
          <span>PORTFOLIO &amp; VERIFIED CASE STUDIES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Digital Platforms Built to Lead Markets.
        </h1>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
          Explore our latest brand transformations, bespoke fragrance and apparel systems, high-converting Shopify storefronts, and multi-channel acquisition engines.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {FEATURED_PROJECTS.map((project) => (
          <article
            key={project.id}
            className="rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden hover:border-[#9F8BE7] transition-all duration-300 group flex flex-col justify-between shadow-xs"
          >
            <div>
              <Link href={`/work/${project.slug}`} className="block relative">
                <InteractiveMedia
                  src={project.heroImage}
                  alt={project.title}
                  aspectRatio="aspect-[16/10]"
                  badgeText={project.category}
                />
              </Link>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono-num text-[#585858]">
                  <span className="font-semibold text-[#161616]">{project.client}</span>
                  <span className="font-bold text-[#9F8BE7]">{project.year}</span>
                </div>

                <h2 className="font-display text-2xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors leading-tight">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {project.results.slice(0, 2).map((res) => (
                    <div
                      key={res.label}
                      className="p-3 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB]"
                    >
                      <span className="font-display font-black text-lg text-emerald-600 font-mono-num block">
                        {res.metric}
                      </span>
                      <span className="text-[10px] text-[#585858] block">{res.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-[#E0DDDB]/60">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
