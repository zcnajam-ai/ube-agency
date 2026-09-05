"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { COMPANY_INFO } from "@/data/company";
import { TrustpilotOfficialIcon, GoogleOfficialIcon } from "../common/OfficialBrandLogos";
import { Heading3DSparkle } from "../common/Brand3DIcons";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const totalReviews = TESTIMONIALS.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalReviews - cardsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-advance every 2 seconds (2000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-white border-b border-[#E0DDDB] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-2xs">
              <Heading3DSparkle size={16} />
              <span>CLIENT EXPERIENCES &amp; REVIEWS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
              Trusted by Founders and Growth Leaders.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body">
              Read feedback from businesses that partnered with Unified Branding Experts across eCommerce, brand identity, web design, and digital marketing.
            </p>
          </div>

          {/* Official Trustpilot & Google Reviews Badges (Part 5) */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 text-xs font-mono-num text-[#161616] shrink-0">
              <a
                href={COMPANY_INFO.ratings.trustpilot.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#00B67A] transition-all shadow-2xs group"
              >
                <TrustpilotOfficialIcon size={22} />
                <div className="text-left leading-tight">
                  <span className="text-[#161616] font-bold block text-xs">Read Reviews</span>
                  <span className="text-[10px] text-[#585858]">Trustpilot Profile</span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.ratings.google.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#4285F4] transition-all shadow-2xs group"
              >
                <GoogleOfficialIcon size={22} />
                <div className="text-left leading-tight">
                  <span className="text-[#161616] font-bold block text-xs">Read Reviews</span>
                  <span className="text-[10px] text-[#585858]">Google Profile</span>
                </div>
              </a>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border border-[#E0DDDB] bg-[#FAF7F6] hover:border-[#9F8BE7] flex items-center justify-center text-[#161616] transition-all cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next review"
                className="w-10 h-10 rounded-full border border-[#E0DDDB] bg-[#FAF7F6] hover:border-[#9F8BE7] flex items-center justify-center text-[#161616] transition-all cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto Review Carousel (2s timer) */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{
              transform: `translateX(calc(-${currentIndex} * (${100 / cardsPerView}% + ${24 / cardsPerView}px)))`,
            }}
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                style={{
                  width: `calc(${100 / cardsPerView}% - ${(24 * (cardsPerView - 1)) / cardsPerView}px)`,
                }}
                className="shrink-0 p-7 sm:p-8 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#9F8BE7]/60 transition-all min-h-[290px]"
              >
                {/* Review Header: Golden Stars Only */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {item.source && (
                      <span className="text-[10px] font-mono-num text-[#585858]">
                        via {item.source}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#303030] font-body leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Review Footer: Author Details Only */}
                <div className="pt-4 border-t border-[#E0DDDB]">
                  <span className="font-display font-bold text-sm text-[#161616] block">
                    {item.author}
                  </span>
                  <span className="text-xs font-mono-num text-[#585858] block mt-0.5">
                    {item.role}, {item.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative w-8 h-2 rounded-full bg-[#E0DDDB] overflow-hidden cursor-pointer"
            >
              <span
                className={`absolute inset-0 bg-[#9F8BE7] rounded-full transition-all duration-300 origin-left ${
                  currentIndex === i ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
