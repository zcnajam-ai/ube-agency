"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import InteractiveMedia from "../common/InteractiveMedia";
import OversizedTypography from "../common/OversizedTypography";
import PurpleGlowField from "../common/PurpleGlowField";
import { Heading3DSparkle } from "../common/Brand3DIcons";

export default function SelectedWork() {
  const topProjects = FEATURED_PROJECTS.slice(0, 4);

  return (
    <section id="selected-work" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-white border-b border-[#E0DDDB] overflow-hidden">
      {/* Background Atmosphere */}
      <PurpleGlowField position="top-right" size={700} opacity={0.08} />
      <OversizedTypography text="PORTFOLIO" direction="left" className="top-16 opacity-35" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-2xs">
              <Heading3DSparkle size={16} />
              <span>FEATURED CLIENT CASE STUDIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
              Work Built to Move Businesses Forward.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body">
              Explore recent digital platforms, eCommerce storefronts, luxury fragrance and apparel brand systems, and search optimization campaigns.
            </p>
          </div>

          <Link
            href="/work"
            className="px-6 py-3 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs sm:text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-1.5 shadow-2xs shrink-0"
          >
            <span>View All Case Studies ({FEATURED_PROJECTS.length})</span>
            <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
          </Link>
        </div>

        {/* 4-Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topProjects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#9F8BE7] transition-all duration-300 group"
            >
              <div className="relative">
                <InteractiveMedia
                  src={project.heroImage}
                  alt={`${project.title} Case Study Preview`}
                  aspectRatio="aspect-[16/10]"
                  badgeText={project.category}
                />

                <div className="absolute bottom-3 right-3 z-20 w-10 h-10 rounded-full bg-[#9F8BE7] text-[#161616] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-[#b4a3f7]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#585858] font-body line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E0DDDB] flex items-center justify-between">
                  <span className="text-xs font-mono-num text-[#585858]">Deliverable:</span>
                  <span className="text-xs font-mono-num text-[#161616] font-bold bg-white px-2.5 py-0.5 rounded-full border border-[#E0DDDB]">
                    {project.results[0]?.metric} {project.results[0]?.label}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
