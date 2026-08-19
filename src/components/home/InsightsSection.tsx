"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Clock } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

export default function InsightsSection() {
  return (
    <section id="insights" className="relative py-24 sm:py-36 px-6 md:px-12 bg-[#FAF7F6] border-t border-[#E0DDDB] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>11 / THOUGHT LEADERSHIP & INSIGHTS</span>
            </div>
            <h2 className="font-display text-editorial-lg text-[#161616] tracking-tight">
              Perspectives on Growth, Code & AI Search.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body">
              Deep dives and actionable frameworks written by the senior engineers and strategists at Unified Branding Experts.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors"
          >
            <span>Browse All Articles</span>
            <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
          </Link>
        </div>

        {/* 3 Editorial Articles Grid (Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {INSIGHTS.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden hover:border-[#9F8BE7] transition-all duration-300 flex flex-col justify-between group shadow-xs"
            >
              <div>
                <Link
                  href={`/insights/${article.slug}`}
                  className="block relative aspect-[16/9] w-full overflow-hidden bg-[#FAF7F6]"
                >
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-[11px] font-mono-num text-[#161616] font-bold shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </Link>

                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-num text-[#585858]">
                    <span>{article.publishedAt}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#9F8BE7]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors leading-snug">
                    <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#585858] font-body line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-[#E0DDDB]/60">
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
