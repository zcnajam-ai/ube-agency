import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Sparkles, Clock, ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

export const metadata: Metadata = {
  title: "Editorial Insights & Thought Leadership | AI SEO, Commerce & Strategy",
  description:
    "Explore strategic articles and frameworks on AI Search Optimization (AI SEO), eCommerce development, and Brand Ecosystems by Unified Branding Experts.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/insights",
  },
  openGraph: {
    title: "Editorial Insights & Thought Leadership | AI SEO, Commerce & Strategy",
    description:
      "Explore strategic articles and frameworks on AI Search Optimization, eCommerce development, and Brand Ecosystems.",
    url: "https://unifiedbrandingexperts.com/insights",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-brand-1.webp",
        width: 1200,
        height: 630,
        alt: "Editorial Insights by Unified Branding Experts",
      },
    ],
  },
};

export default function InsightsIndexPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Editorial Page Hero (Clean & Fast) */}
      <div className="space-y-4 max-w-3xl border-b border-[#E0DDDB] pb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EDITORIAL INSIGHTS & METHODOLOGY</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Perspectives on Code, Commerce & AI Search.
        </h1>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
          Actionable frameworks written by our senior strategists and engineers to help your brand compete and lead digitally.
        </p>
      </div>

      {/* Articles Grid (Clean White Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                <h2 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors leading-snug">
                  <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>

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
                <span>Read Full Article</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
