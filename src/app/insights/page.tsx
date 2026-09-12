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
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Editorial Insights by Unified Branding Experts",
      },
    ],
  },
};

export default function InsightsIndexPage() {
  const seenInsightSlugs = new Set<string>();
  const uniqueArticles = INSIGHTS.filter((i) => {
    if (seenInsightSlugs.has(i.slug)) return false;
    seenInsightSlugs.add(i.slug);
    return true;
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://unifiedbrandingexperts.com" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://unifiedbrandingexperts.com/insights" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Editorial Insights & Thought Leadership",
    description: "Frameworks and original research on AI SEO, AEO, GEO, eCommerce, branding and digital engineering.",
    numberOfItems: uniqueArticles.length,
    itemListElement: uniqueArticles.map((article, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: article.title,
      url: `https://unifiedbrandingexperts.com/insights/${article.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Editorial Page Hero (Clean & Fast) */}
      <div className="space-y-4 max-w-3xl border-b border-[#E0DDDB] pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EDITORIAL INSIGHTS & ORIGINAL RESEARCH</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Perspectives on Code, Commerce & AI Search.
        </h1>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
          Actionable frameworks and original empirical research written by our senior strategists and engineers to help your brand compete and lead digitally.
        </p>
      </div>

      {/* Featured Original Research Study Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-blue-300" />
          FEATURED ORIGINAL RESEARCH · 2026
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          AI Search Readiness Study 2026: 100 Websites Audited
        </h2>
        <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
          We audited 100 small and midsize North American business websites across 45 criteria to determine their technical, entity, content retrievability, and GEO authority readiness for Google AI Overviews, ChatGPT Search, and generative discovery engines.
        </p>
        <div className="pt-2">
          <Link
            href="/research/ai-search-readiness-study-2026"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-blue-50 text-blue-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
          >
            <span>Explore Full 100-Site Study &amp; Data</span>
            <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>
      </div>

      {/* Articles Grid (Clean White Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {uniqueArticles.map((article) => (
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
                  alt={article.coverAlt || article.title}
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
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <Link href={`/insights/${article.slug}`}>
                  <h2 className="font-display text-lg font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h2>
                </Link>

                <p className="text-xs text-[#585858] font-body line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0 border-t border-[#E0DDDB]/60 flex items-center justify-between text-xs font-mono-num font-bold">
              <span className="text-[#585858]">{article.author.name}</span>
              <Link
                href={`/insights/${article.slug}`}
                className="inline-flex items-center gap-1 text-[#161616] group-hover:text-[#9F8BE7] transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
    </>
  );
}
