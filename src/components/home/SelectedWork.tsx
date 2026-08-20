"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import OversizedTypography from "../common/OversizedTypography";
import PurpleGlowField from "../common/PurpleGlowField";
import { Heading3DSparkle } from "../common/Brand3DIcons";

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const projects = FEATURED_PROJECTS;
  const totalSlides = projects.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-scroll timer (advances every 3.5 seconds)
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="selected-work"
      className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-white border-b border-[#E0DDDB] overflow-hidden"
    >
      {/* Background Atmosphere */}
      <PurpleGlowField position="top-right" size={700} opacity={0.08} />
      <OversizedTypography text="PORTFOLIO" direction="left" className="top-16 opacity-35" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        {/* Section Header with Auto-Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-2xs">
              <Heading3DSparkle size={16} />
              <span>FEATURED CLIENT CASE STUDIES &amp; PORTFOLIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
              Work Built to Move Businesses Forward.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body">
              Explore recent brand identity transformations, real estate visual systems, luxury fragrance packaging, and high-converting eCommerce storefronts.
            </p>
          </div>

          {/* Interactive Navigation & Play/Pause Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB]">
              <button
                onClick={prevSlide}
                aria-label="Previous project"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#161616] hover:text-white text-[#161616] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPaused((prev) => !prev)}
                aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF7F6] text-[#585858] hover:text-[#161616] flex items-center justify-center transition-all cursor-pointer"
                title={isPaused ? "Resume auto-play" : "Pause auto-play"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-600" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next project"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#161616] hover:text-white text-[#161616] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/work"
              className="px-5 py-2.5 rounded-full bg-[#161616] hover:bg-black text-white text-xs sm:text-sm font-display font-bold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>All Projects ({projects.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        {/* Auto-Scrolling Carousel Track */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{
              transform: `translateX(-${activeIndex * (100 / (typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1))}%)`,
            }}
          >
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="w-full lg:w-[calc(50%-0.75rem)] shrink-0 flex flex-col justify-between rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all duration-300 shadow-xs group overflow-hidden"
              >
                <Link href={`/work/${project.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-black/5">
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} Case Study`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-[11px] font-mono-num font-bold text-[#161616] shadow-xs">
                    {project.category}
                  </div>

                  <div className="absolute top-4 right-4 z-10 px-2.5 py-0.5 rounded-full bg-[#161616]/80 text-white text-[10px] font-mono-num font-bold">
                    {project.year}
                  </div>

                  <div className="absolute bottom-4 right-4 z-20 w-11 h-11 rounded-full bg-[#9F8BE7] text-[#161616] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-[#b4a3f7]">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono-num text-[#585858]">
                      <span>Client: <strong className="text-[#161616]">{project.client}</strong></span>
                      <span className="text-[#9F8BE7] font-bold">0{idx + 1} / 0{totalSlides}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors line-clamp-1">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#585858] font-body line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E0DDDB] flex items-center justify-between">
                    <span className="text-xs font-mono-num text-[#585858]">Deliverable Highlight:</span>
                    <span className="text-xs font-mono-num text-[#161616] font-bold bg-white px-3 py-1 rounded-full border border-[#E0DDDB] shadow-2xs">
                      {project.results[0]?.metric} {project.results[0]?.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 bg-[#9F8BE7]"
                  : "w-2 bg-[#E0DDDB] hover:bg-[#A0A0A0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
