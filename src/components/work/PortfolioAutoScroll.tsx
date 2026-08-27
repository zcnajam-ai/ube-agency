"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, Pause, Sparkles } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";

export default function PortfolioAutoScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const projects = FEATURED_PROJECTS;
  const total = projects.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-scroll every 3.8 seconds
  useEffect(() => {
    if (!isPaused && total > 1) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3800);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide, total]);

  const currentProject = projects[activeIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <div className="space-y-6">
      {/* Top Header with Auto-Scroll Controls */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 border-b border-[#E0DDDB] pb-4">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono-num uppercase tracking-wider text-[#9F8BE7] font-bold min-w-0">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">FEATURED SPOTLIGHT ({activeIndex + 1} OF {total})</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-[11px] sm:text-xs font-mono-num text-[#585858] hover:text-[#161616] flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
          >
            {isPaused ? <Play className="w-3 h-3 text-emerald-600 shrink-0" /> : <Pause className="w-3 h-3 shrink-0" />}
            <span className="whitespace-nowrap">{isPaused ? "Auto-Play Paused" : "Auto-Scrolling"}</span>
          </button>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous case study"
              className="w-8 h-8 rounded-full bg-white border border-[#E0DDDB] hover:bg-[#161616] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next case study"
              className="w-8 h-8 rounded-full bg-white border border-[#E0DDDB] hover:bg-[#161616] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Spotlight Showcase Card */}
      <div
        className="relative rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0 group transition-all duration-500 hover:border-[#9F8BE7]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Visual Column */}
        <Link
          href={`/work/${currentProject.slug}`}
          className="relative aspect-[16/10] lg:aspect-auto lg:col-span-7 overflow-hidden bg-black/5 block"
        >
          <Image
            src={currentProject.heroImage}
            alt={currentProject.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num font-bold text-[#161616] shadow-xs">
            {currentProject.category}
          </div>

          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#161616]/80 text-white text-xs font-mono-num font-bold">
            {currentProject.year}
          </div>
        </Link>

        {/* Content Column */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-white">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-num text-[#585858]">
              <span>Client: <strong className="text-[#161616] font-semibold">{currentProject.client}</strong></span>
              <span className="text-[#9F8BE7] font-bold">Spotlight 0{activeIndex + 1}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#161616] group-hover:text-[#9F8BE7] transition-colors leading-tight">
              <Link href={`/work/${currentProject.slug}`}>{currentProject.title}</Link>
            </h2>

            <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
              {currentProject.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {currentProject.services.map((srv) => (
                <span
                  key={srv}
                  className="px-2.5 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-[11px] font-mono-num text-[#585858]"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#E0DDDB] flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono-num uppercase tracking-wider text-[#585858] block font-bold">
                Deliverable
              </span>
              <span className="text-xs sm:text-sm font-mono-num font-bold text-emerald-600">
                {currentProject.results[0]?.metric} {currentProject.results[0]?.label}
              </span>
            </div>

            <Link
              href={`/work/${currentProject.slug}`}
              className="px-5 py-2.5 rounded-full bg-[#161616] hover:bg-black text-white text-xs sm:text-sm font-display font-bold flex items-center gap-1.5 transition-all shadow-xs shrink-0"
            >
              <span>Explore Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to spotlight slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === idx
                ? "w-8 bg-[#9F8BE7]"
                : "w-2 bg-[#E0DDDB] hover:bg-[#A0A0A0]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
