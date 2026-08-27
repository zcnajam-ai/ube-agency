"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Sparkles } from "lucide-react";

interface CaseStudyGalleryCarouselProps {
  images: string[];
  title: string;
}

export default function CaseStudyGalleryCarousel({ images, title }: CaseStudyGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const total = images.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-scroll timer
  useEffect(() => {
    if (!isPaused && !lightboxOpen && total > 1) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3200);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, lightboxOpen, nextSlide, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextSlide, prevSlide]);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* Section Subtitle with Controls */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 border-b border-[#E0DDDB] pb-3">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono-num uppercase tracking-wider text-[#9F8BE7] font-bold min-w-0">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">VISUAL ASSET MATRIX &amp; SHOWCASE ({total} ASSETS)</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-[11px] sm:text-xs font-mono-num text-[#585858] hover:text-[#161616] flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
          >
            {isPaused ? <Play className="w-3 h-3 text-emerald-600 shrink-0" /> : <Pause className="w-3 h-3 shrink-0" />}
            <span className="whitespace-nowrap">{isPaused ? "Auto-Scroll Paused" : "Auto-Scrolling"}</span>
          </button>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="w-7 h-7 rounded-full bg-white border border-[#E0DDDB] hover:bg-[#161616] hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="w-7 h-7 rounded-full bg-white border border-[#E0DDDB] hover:bg-[#161616] hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Active Visual Display */}
      <div
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white shadow-md group cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={images[activeIndex]}
          alt={`${title} Asset ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover object-center transition-all duration-700 group-hover:scale-102"
        />

        {/* Counter Badge */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#161616]/80 backdrop-blur-md text-white text-xs font-mono-num font-bold">
          0{activeIndex + 1} / 0{total}
        </div>

        {/* Expand Overlay Button */}
        <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-display font-bold text-[#161616] flex items-center gap-1.5 shadow-sm group-hover:bg-[#161616] group-hover:text-white transition-colors">
          <Maximize2 className="w-3.5 h-3.5 text-[#9F8BE7]" />
          <span>Click to Enlarge</span>
        </div>
      </div>

      {/* Thumbnail Navigation Strip */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none pt-1">
        {images.map((imgSrc, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative aspect-[4/3] w-24 sm:w-28 shrink-0 rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
              activeIndex === idx
                ? "border-[#9F8BE7] ring-2 ring-[#9F8BE7]/40 shadow-sm scale-105"
                : "border-[#E0DDDB] opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={imgSrc}
              alt={`${title} thumbnail ${idx + 1}`}
              fill
              sizes="120px"
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between text-white z-20">
            <div className="font-display font-bold text-sm sm:text-base">
              {title} — Asset {activeIndex + 1} of {total}
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 w-full max-h-[80vh] my-auto flex items-center justify-center">
            <Image
              src={images[activeIndex]}
              alt={`${title} Lightbox View`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center gap-4 text-white z-20">
            <button
              onClick={prevSlide}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-display font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="font-mono-num text-xs text-white/60">
              {activeIndex + 1} / {total}
            </span>

            <button
              onClick={nextSlide}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-display font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
