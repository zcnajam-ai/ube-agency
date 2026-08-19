"use client";

import React from "react";
import Link from "next/link";
import {
  Bot,
  Globe,
  Database,
  ArrowUpRight,
  Cpu,
} from "lucide-react";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import { Heading3DSparkle } from "../common/Brand3DIcons";

export default function AISEOSection() {
  const { openProjectModal } = useScroll();

  const pillars = [
    {
      icon: <Bot className="w-5 h-5 text-[#9F8BE7]" />,
      title: "Answer Engine Optimization (AEO)",
      desc: "Structuring content semantics so AI systems like Perplexity, ChatGPT Search, and Gemini can accurately interpret and cite your brand.",
      badge: "ANSWER ENGINE ARCHITECTURE",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#DDF160]" />,
      title: "Generative Engine Optimization (GEO)",
      desc: "Organizing entity relationships, authoritative data points, and schema markup to support visibility in Google AI Overviews and AI search panels.",
      badge: "AI OVERVIEWS STRATEGY",
    },
    {
      icon: <Database className="w-5 h-5 text-[#9F8BE7]" />,
      title: "Structured JSON-LD Entity Graphs",
      desc: "Deploying structured schema markup and entity definitions so web crawlers and AI tools index your core services and business data accurately.",
      badge: "STRUCTURED SCHEMA",
    },
    {
      icon: <Globe className="w-5 h-5 text-[#DDF160]" />,
      title: "Technical SEO & Performance",
      desc: "Fast server responses, optimized rendering pipelines, and responsive layouts that establish a stable technical search foundation.",
      badge: "TECHNICAL FOUNDATION",
    },
  ];

  return (
    <section className="relative py-24 sm:py-36 px-6 md:px-12 bg-[#161616] text-white overflow-hidden">
      {/* Subtle Glow Accent */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#9F8BE7]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/15 pb-8">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#DDF160] font-bold">
              <Heading3DSparkle size={16} />
              <span>06 / NEXT-GENERATION SEARCH VISIBILITY</span>
            </div>
            <h2 className="font-display text-editorial-lg text-white tracking-tight">
              Search is Changing. Your Visibility Strategy Should Too.
            </h2>
            <p className="text-base text-[#ACACAC] max-w-2xl">
              From traditional keyword search to conversational AI answers, we structure your digital presence to remain discoverable across modern search experiences.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
            <Link
              href="/ai-seo-packages"
              className="px-6 py-3.5 rounded-full bg-[#DDF160] text-[#161616] font-display font-bold text-xs sm:text-sm hover:bg-[#c9dc4e] transition-colors inline-flex items-center gap-2"
            >
              <span>Explore AI SEO Packages ($349+)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#9F8BE7] transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono-num px-2.5 py-0.5 rounded-full bg-white/10 text-[#ACACAC]">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#9F8BE7] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#ACACAC] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openProjectModal(`AI SEO — ${pillar.title}`)}
                  className="text-xs font-display font-semibold text-[#DDF160] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
