"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, CheckCircle2, Clock } from "lucide-react";
import { PROCESS_STEPS } from "@/data/process";
import BackgroundGrid from "../common/BackgroundGrid";
import PurpleGlowField from "../common/PurpleGlowField";
import OversizedTypography from "../common/OversizedTypography";

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stageRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) {
              setActiveStepIndex(index);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" }
    );

    stageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-24 sm:py-36 px-4 sm:px-6 md:px-12 bg-[#FAF7F6] border-t border-[#E0DDDB] overflow-hidden"
    >
      {/* Background Decor */}
      <BackgroundGrid opacity={0.03} size={80} maskRadial />
      <PurpleGlowField position="center" size={800} opacity={0.09} parallaxSpeed={0.18} />
      <OversizedTypography text="METHODOLOGY" direction="left" className="top-16 opacity-35" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>07 / METHODOLOGY &amp; EXECUTION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#161616] tracking-tight">
              A Structured Engine for Predictable Growth.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body">
              From market discovery to global scaling, every phase is orchestrated with milestone clarity, weekly sprints, and zero guesswork.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-num text-[#585858]">
            <span className="px-3 py-1 rounded-full bg-white border border-[#E0DDDB] shadow-2xs font-bold text-[#161616]">
              6-STAGE AGILE WORKFLOW
            </span>
          </div>
        </div>

        {/* Pinned Scrollytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sticky Stage Navigator & Progress Track */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] shadow-xs space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
                  ACTIVE PHASE
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-display font-black text-3xl text-[#9F8BE7] font-mono-num">
                    {PROCESS_STEPS[activeStepIndex]?.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#161616]">
                    {PROCESS_STEPS[activeStepIndex]?.phase}
                  </h3>
                </div>
              </div>

              {/* Interactive Stage Progress Bar */}
              <div className="space-y-2">
                {PROCESS_STEPS.map((step, idx) => {
                  const isActive = idx === activeStepIndex;
                  const isPast = idx < activeStepIndex;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => {
                        setActiveStepIndex(idx);
                        stageRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl border flex items-center justify-between text-xs transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-[#9F8BE7]/15 border-[#9F8BE7] text-[#161616] font-bold shadow-2xs"
                          : isPast
                          ? "bg-emerald-50/60 border-emerald-200 text-emerald-800"
                          : "bg-[#FAF7F6] border-[#E0DDDB]/70 text-[#585858] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono-num font-bold text-[#9F8BE7]">{step.number}</span>
                        <span>{step.phase}</span>
                      </div>
                      <span className="font-mono-num text-[10px] text-[#585858]">{step.duration}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 text-xs font-mono-num text-[#585858] flex items-center justify-between border-t border-[#E0DDDB]/60">
                <span>Total Time to Launch:</span>
                <span className="font-bold text-[#161616]">2 to 4 Weeks</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Distinct Stage Cards */}
          <div className="lg:col-span-7 space-y-6">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;

              return (
                <div
                  key={step.number}
                  ref={(el) => { stageRefs.current[idx] = el; }}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 scroll-mt-28 space-y-5 ${
                    isActive
                      ? "bg-white border-2 border-[#9F8BE7] shadow-[0_12px_35px_rgba(159,139,231,0.2)] scale-[1.01]"
                      : "bg-white/70 border-[#E0DDDB] opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E0DDDB]/70 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-black text-sm flex items-center justify-center shadow-xs">
                        {step.number}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono-num text-[#9F8BE7] font-bold uppercase tracking-wider block">
                          STAGE {step.number}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#161616]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#585858]">
                      <Clock className="w-3.5 h-3.5 text-[#9F8BE7]" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                    {step.summary}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono-num uppercase tracking-wider text-[#161616] font-bold block">
                      Stage Milestone Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {step.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2 text-xs text-[#303030] p-2.5 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB]/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
