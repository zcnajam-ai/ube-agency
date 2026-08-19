import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  Calendar,
  Clock,
  ChevronRight,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { INSIGHTS, getInsightBySlug } from "@/data/insights";
import { COMPANY_INFO } from "@/data/company";

export function generateStaticParams() {
  return INSIGHTS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) return { title: "Article Not Found | Unified Branding Experts" };

  const canonicalUrl = `https://unifiedbrandingexperts.com/insights/${article.slug}`;

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: canonicalUrl,
      type: "article",
      publishedTime: "2026-02-01T00:00:00Z",
      modifiedTime: "2026-02-18T00:00:00Z",
      authors: [article.author.name],
      images: [
        {
          url: `https://unifiedbrandingexperts.com${article.coverImage}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [`https://unifiedbrandingexperts.com${article.coverImage}`],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) return notFound();

  // Find related articles
  const relatedArticles = article.relatedSlugs
    ? INSIGHTS.filter((a) => article.relatedSlugs.includes(a.slug))
    : INSIGHTS.filter((a) => a.slug !== article.slug).slice(0, 3);

  // Structured Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: `https://unifiedbrandingexperts.com${article.coverImage}`,
    datePublished: "2026-02-01T00:00:00Z",
    dateModified: "2026-02-18T00:00:00Z",
    author: {
      "@type": "Organization",
      name: article.author.name,
      jobTitle: article.author.role,
      url: "https://unifiedbrandingexperts.com",
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: "https://unifiedbrandingexperts.com",
      logo: {
        "@type": "ImageObject",
        url: "https://unifiedbrandingexperts.com/images/logo/ube-logo-black.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://unifiedbrandingexperts.com/insights/${article.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://unifiedbrandingexperts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: "https://unifiedbrandingexperts.com/insights",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://unifiedbrandingexperts.com/insights/${article.slug}`,
      },
    ],
  };

  const faqSchema = article.faqs && article.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  } : null;

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto space-y-16">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono-num text-[#585858]">
          <Link href="/" className="hover:text-[#161616] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/insights" className="hover:text-[#161616] transition-colors">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#161616] truncate max-w-[200px] sm:max-w-md font-medium">{article.title}</span>
        </nav>

        {/* 2. Article Header */}
        <header className="space-y-6 border-b border-[#E0DDDB] pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
              {article.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#585858]">
              {article.kicker}
            </span>
            <div className="flex items-center gap-4 text-xs font-mono-num text-[#585858] ml-auto">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Updated {article.updatedAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#161616] leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-[#585858] font-body leading-relaxed max-w-4xl">
            {article.summary}
          </p>

          {/* Author info */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E0DDDB]/60">
            <div className="flex items-center gap-3 text-xs font-mono-num">
              <div className="w-10 h-10 rounded-full bg-[#9F8BE7] flex items-center justify-center text-[#161616] font-bold text-sm">
                UBE
              </div>
              <div>
                <span className="text-[#161616] font-bold block">{article.author.name}</span>
                <span className="text-[#585858] block">{article.author.role} • Unified Branding Experts</span>
              </div>
            </div>

            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ALL ARTICLES</span>
            </Link>
          </div>
        </header>

        {/* 3. Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#E0DDDB] shadow-md bg-[#FAF7F6]">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover object-center"
          />
        </div>

        {/* 4. Answer-First Direct Takeaway Box (AEO & AISEO Target) */}
        {article.quickAnswer && (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAF7F6] to-white border-2 border-[#9F8BE7] shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-num font-bold uppercase tracking-wider text-[#9F8BE7]">
              <Sparkles className="w-4 h-4" />
              <span>DIRECT ANSWER &amp; KEY TAKEAWAY</span>
            </div>
            <p className="text-sm sm:text-base text-[#161616] font-body font-medium leading-relaxed">
              {article.quickAnswer}
            </p>
          </div>
        )}

        {/* 5. Table of Contents */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <div className="p-6 rounded-3xl bg-white border border-[#E0DDDB] shadow-xs space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#161616]">
              Table of Contents
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-body">
              {article.tableOfContents.map((toc, index) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="text-[#585858] hover:text-[#9F8BE7] transition-colors flex items-center gap-2"
                  >
                    <span className="font-mono-num text-[#9F8BE7] font-bold">{index + 1}.</span>
                    <span>{toc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 6. Main Content Sections */}
        <div className="space-y-12 text-[#303030] font-body text-base sm:text-lg leading-relaxed">
          {article.sections &&
            article.sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#161616] border-b border-[#E0DDDB] pb-3">
                  {section.h2}
                </h2>

                {section.h3 && (
                  <h3 className="font-display text-xl font-bold text-[#161616] pt-2">
                    {section.h3}
                  </h3>
                )}

                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-[#404040]">
                    {paragraph}
                  </p>
                ))}

                {/* Optional Table */}
                {section.table && (
                  <div className="overflow-x-auto my-6 rounded-2xl border border-[#E0DDDB] bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#FAF7F6] border-b border-[#E0DDDB] text-[#161616] font-display font-bold">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} className="p-3.5 sm:p-4">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E0DDDB]/60">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#FAF7F6]/50 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3.5 sm:p-4 text-[#303030]">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Optional Callout */}
                {section.callout && (
                  <div
                    className={`p-5 sm:p-6 rounded-2xl border text-xs sm:text-sm my-4 flex items-start gap-3.5 ${
                      section.callout.type === "warning"
                        ? "bg-rose-50/70 border-rose-200 text-rose-900"
                        : section.callout.type === "tip"
                        ? "bg-emerald-50/70 border-emerald-200 text-emerald-950"
                        : "bg-blue-50/70 border-blue-200 text-blue-950"
                    }`}
                  >
                    {section.callout.type === "warning" ? (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    ) : (
                      <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <strong className="block font-bold">{section.callout.title}</strong>
                      <p>{section.callout.text}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}
        </div>

        {/* 7. Contextual Dual CTA Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {/* Service CTA */}
          {article.serviceCta && (
            <div className="p-7 rounded-3xl bg-white border border-[#E0DDDB] space-y-4 shadow-xs flex flex-col justify-between hover:border-[#9F8BE7] transition-all">
              <div className="space-y-2">
                <span className="text-[10px] font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider">
                  OFFICIAL AGENCY SERVICE
                </span>
                <h3 className="font-display text-xl font-bold text-[#161616]">
                  {article.serviceCta.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  {article.serviceCta.desc}
                </p>
              </div>

              <Link
                href={article.serviceCta.href}
                className="w-full py-3.5 rounded-full bg-[#161616] text-white hover:bg-[#303030] font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>{article.serviceCta.buttonText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Package CTA */}
          {article.packageCta && (
            <div className="p-7 rounded-3xl bg-[#FAF7F6] border-2 border-[#9F8BE7] space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-num font-bold text-emerald-600 uppercase tracking-wider">
                    TRANSPARENT PACKAGES
                  </span>
                  <span className="text-xs font-mono-num font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {article.packageCta.priceBadge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#161616]">
                  {article.packageCta.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  Compare our transparent tiers with full deliverables, timelines, and 100% ownership.
                </p>
              </div>

              <Link
                href={article.packageCta.href}
                className="w-full py-3.5 rounded-full bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_15px_rgba(159,139,231,0.3)]"
              >
                <span>{article.packageCta.buttonText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* 8. Search Intent FAQs */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-[#E0DDDB]">
            <div className="space-y-2">
              <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
                COMMONLY ASKED QUESTIONS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#161616]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {article.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs"
                >
                  <h3 className="font-display text-base font-bold text-[#161616] flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#9F8BE7] shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. Author Bio Box */}
        <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-[#9F8BE7] flex items-center justify-center text-[#161616] font-display font-black text-xl shrink-0">
            UBE
          </div>
          <div className="space-y-1 flex-1">
            <span className="text-[10px] font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
              PUBLISHED BY
            </span>
            <h4 className="font-display font-bold text-lg text-[#161616]">
              Unified Branding Experts Editorial &amp; Strategy Team
            </h4>
            <p className="text-xs text-[#585858] leading-relaxed">
              Unified Branding Experts is a full-service digital branding, technology, and growth agency. We combine brand identity, full-stack Next.js, high-velocity eCommerce, and AI Search Optimization into one connected scaling system.
            </p>
          </div>
        </div>

        {/* 10. Related Articles Grid */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-[#E0DDDB]">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold text-[#161616]">
                Related Insights &amp; Strategy Guides
              </h3>
              <Link
                href="/insights"
                className="text-xs font-mono-num text-[#9F8BE7] font-bold hover:underline"
              >
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="p-5 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 hover:border-[#9F8BE7] transition-all flex flex-col justify-between shadow-xs group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono-num text-[#9F8BE7] font-bold uppercase">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-bold text-sm text-[#161616] group-hover:text-[#9F8BE7] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#585858] line-clamp-2 font-body">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#E0DDDB]/60 flex items-center justify-between text-[10px] font-mono-num text-[#585858]">
                    <span>{rel.readTime}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
