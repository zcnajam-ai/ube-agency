import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Download,
  BookOpen,
  BarChart3,
  ShieldCheck,
  Building2,
  ChevronRight,
  Lock,
  Layers,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Search Readiness Study 2026: 100 Websites Audited | UBE",
  description:
    "Original research by Unified Branding Experts auditing 100 business websites across 45 AI search readiness criteria, including technical SEO, AEO, entity signals, and GEO authority.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/research/ai-search-readiness-study-2026",
  },
  openGraph: {
    title: "AI Search Readiness Study 2026 | Unified Branding Experts",
    description:
      "We audited 100 North American business websites across 45 criteria. Here is what the data shows about AI search readiness, AEO, and GEO.",
    url: "https://unifiedbrandingexperts.com/research/ai-search-readiness-study-2026",
    type: "article",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/ube-social-preview-2026.svg",
        width: 1200,
        height: 630,
        alt: "UBE AI Search Readiness Study 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Readiness Study 2026 | Unified Branding Experts",
    description: "Original research auditing 100 business websites across 45 AI search readiness criteria.",
    images: ["https://unifiedbrandingexperts.com/images/ube-social-preview-2026.svg"],
  }
};

export default function AiSearchReadinessStudyPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: "AI Search Readiness Study 2026: What We Found After Auditing 100 Business Websites",
    headline: "AI Search Readiness Study 2026: What We Found After Auditing 100 Business Websites",
    description: "An empirical audit of 100 North American independent business websites across 45 technical, entity, AEO, and GEO authority criteria.",
    url: "https://unifiedbrandingexperts.com/research/ai-search-readiness-study-2026",
    datePublished: "2026-08-31",
    dateModified: "2026-08-31",
    publisher: {
      "@type": "Organization",
      name: "Unified Branding Experts",
      url: "https://unifiedbrandingexperts.com",
      logo: "https://unifiedbrandingexperts.com/images/logo/ube-logo.png"
    },
    author: {
      "@type": "Organization",
      name: "Unified Branding Experts Research Team",
      url: "https://unifiedbrandingexperts.com/about"
    }
  };

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "UBE AI Search Readiness Study 2026 Aggregate Dataset",
    description: "Aggregated 45-criterion audit data from 100 small and midsize North American business websites evaluated for AI search readiness.",
    url: "https://unifiedbrandingexperts.com/research/ai-search-readiness-study-2026",
    creator: {
      "@type": "Organization",
      name: "Unified Branding Experts"
    },
    distribution: [
      {
        "@type": "DataDownload",
        encodingFormat: "text/csv",
        contentUrl: "https://unifiedbrandingexperts.com/research/ai-search-readiness-study-2026-aggregate-data.csv"
      }
    ],
    temporalCoverage: "2026-08-01/2026-08-31",
    spatialCoverage: "North America (United States & Canada)"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://unifiedbrandingexperts.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Research",
        item: "https://unifiedbrandingexperts.com/research"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Search Readiness Study 2026",
        item: "https://unifiedbrandingexperts.com/research/ai-search-readiness-study-2026"
      }
    ]
  };

  return (
    <div className="w-full max-w-full bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 box-border">
      {/* Print-only Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .print-full-width { max-width: 100% !important; padding: 0 !important; }
        }
      ` }} />

      {/* Structured Data Scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Sticky Table of Contents Sub-Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 no-print w-full min-w-0">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 text-sm text-slate-600 w-full min-w-0 box-border">
          <span className="font-bold text-slate-900 flex items-center gap-2 text-xs sm:text-sm shrink-0">
            <BookOpen className="w-4 h-4 text-blue-600" />
            UBE Research 2026
          </span>
          <nav className="hidden md:flex items-center space-x-6 text-xs font-medium">
            <a href="#summary" className="hover:text-blue-600 transition-colors">Executive Summary</a>
            <a href="#findings" className="hover:text-blue-600 transition-colors">Key Findings</a>
            <a href="#categories" className="hover:text-blue-600 transition-colors">Categories</a>
            <a href="#geo-chart" className="hover:text-blue-600 transition-colors">GEO Authority</a>
            <a href="#crawler-matrix" className="hover:text-blue-600 transition-colors">Crawler Matrix</a>
            <a href="#gaps" className="hover:text-blue-600 transition-colors">Top Gaps</a>
            <a href="#strengths" className="hover:text-blue-600 transition-colors">Strengths</a>
            <a href="#cohorts" className="hover:text-blue-600 transition-colors">Cohorts</a>
            <a href="#methodology" className="hover:text-blue-600 transition-colors">Methodology</a>
            <a href="#citation" className="hover:text-blue-600 transition-colors">Cite This</a>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <a href="#summary" className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
              Jump to Findings ↓
            </a>
          </div>
        </div>
      </div>

      {/* Redesigned Premium Editorial Hero */}
      <header className="pt-8 sm:pt-16 pb-12 sm:pb-20 bg-gradient-to-b from-slate-50 via-slate-50/80 to-white border-b border-slate-200/80 w-full min-w-0">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 box-border">
          
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              ORIGINAL RESEARCH · 2026
            </div>
          </div>

          {/* Hero Responsive Layout: 1-col on mobile, 12-col on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full min-w-0">
            
            {/* Left Column: Eyebrow, H1, Intro & Meta */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 w-full min-w-0">
              <h1 className="text-2xl sm:text-4xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12] lg:leading-[1.08] w-full min-w-0 max-w-full break-words">
                AI Search Readiness Study 2026: What We Found After Auditing 100 Business Websites
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-[760px] w-full min-w-0">
                Unified Branding Experts audited 100 independent small and midsize North American business websites across 45 technical, entity, content-retrievability, crawler-access, and authority criteria.
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-xs font-semibold text-slate-600 w-full min-w-0">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">100 Unique Businesses</span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">45 Scored Criteria</span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">5 Business Cohorts</span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">Double-Audited Reliability</span>
              </div>
            </div>

            {/* Right Column: Primary Contrast Panel */}
            <div className="lg:col-span-5 bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-5 sm:space-y-6 w-full min-w-0 box-border">
              <div>
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Primary Research Contrast
                </h2>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  Getting crawled is not the same as being AI-search ready.
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2 w-full min-w-0 box-border">
                  <div className="flex justify-between items-baseline gap-2 min-w-0">
                    <span className="text-[11px] sm:text-xs font-bold text-blue-900 uppercase truncate">Technical Readiness</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-blue-700 shrink-0 font-mono">95.85%</span>
                  </div>
                  <div className="w-full bg-blue-200/60 rounded-full h-3 overflow-hidden">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: "95.85%" }}></div>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-blue-800 font-medium">
                    19.17 / 20.0 Available Category Points
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2 w-full min-w-0 box-border">
                  <div className="flex justify-between items-baseline gap-2 min-w-0">
                    <span className="text-[11px] sm:text-xs font-bold text-amber-900 uppercase truncate">GEO / Authority Readiness</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-amber-700 shrink-0 font-mono">36.53%</span>
                  </div>
                  <div className="w-full bg-amber-200/60 rounded-full h-3 overflow-hidden">
                    <div className="bg-amber-600 h-3 rounded-full" style={{ width: "36.53%" }}></div>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-amber-800 font-medium">
                    10.96 / 30.0 Available Category Points
                  </div>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3.5 sm:pt-4">
                Percentage of available framework category points earned across the 100 audited websites.
              </p>
            </div>

          </div>

          {/* 4 Responsive Hero Stat Cards (2x2 Mobile, 4-col Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-16 w-full min-w-0">
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs min-w-0 w-full box-border">
              <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">100</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 truncate">Unique Businesses</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">Audited North American SMBs</div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs min-w-0 w-full box-border">
              <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">45</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 truncate">Scored Criteria</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">Across 5 Categories</div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-blue-50/50 border border-blue-100 shadow-2xs min-w-0 w-full box-border">
              <div className="text-2xl sm:text-4xl font-extrabold text-blue-700 tracking-tight font-mono">95.85%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 truncate">Technical Readiness</div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 mt-0.5 truncate">19.17 / 20.0 Points</div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-amber-50/50 border border-amber-100 shadow-2xs min-w-0 w-full box-border">
              <div className="text-2xl sm:text-4xl font-extrabold text-amber-700 tracking-tight font-mono">36.53%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 truncate">GEO Authority</div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 mt-0.5 truncate">10.96 / 30.0 Points</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-4 pt-6 mt-8 border-t border-slate-200 w-full min-w-0">
            <div>Published: August 31, 2026 · Unified Branding Experts Research Team</div>
            <div className="no-print">
              <a
                href="/research/ai-search-readiness-study-2026-aggregate-data.csv"
                download
                className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Aggregate Data (CSV)
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* Main Research Content Container */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 space-y-16 sm:space-y-20 print-full-width w-full min-w-0 box-border">
        
        {/* Executive Summary */}
        <section id="summary" className="scroll-mt-24 space-y-6 sm:space-y-8 w-full min-w-0">
          <div className="max-w-[800px] w-full min-w-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 shrink-0" />
              Executive Summary
            </h2>
            <div className="prose prose-slate text-sm sm:text-lg text-slate-700 leading-relaxed space-y-4 w-full min-w-0">
              <p>
                As search discovery increasingly spans traditional search engines, Google AI Overviews, ChatGPT Search, and generative discovery platforms, a central question arises for independent business owners: <em>How ready are business websites for an AI-mediated search environment?</em>
              </p>
              <p className="bg-slate-50 p-4 sm:p-5 rounded-2xl border-l-4 border-blue-600 font-semibold text-slate-900 text-sm sm:text-base">
                Editorial Shorthand: <strong>Getting crawled is not the same as being AI-search ready.</strong>
              </p>
              <p>
                Our audit of 100 small and midsize business websites revealed a consistent contrast: foundational technical accessibility is mature and nearly universal, but deeper machine-readable entity identity, answer-retrievable content formatting, and observable GEO authority signals remain substantially less developed.
              </p>
            </div>
          </div>

          {/* Descriptive Statistics Card */}
          <div className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 w-full min-w-0 box-border">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Descriptive Framework Score Overview
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-slate-900 w-full min-w-0">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono">67.26 Pts</div>
                <div className="text-xs font-semibold text-slate-600">Sample Mean Score (out of 100)</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono">68.35 Pts</div>
                <div className="text-xs font-semibold text-slate-600">Sample Median Score</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono">46.0 – 81.0 Pts</div>
                <div className="text-xs font-semibold text-slate-600">Observed Range (IQR: Q1=54.0, Q3=75.5)</div>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 pt-2 border-t border-slate-200/80">
              *Note: These figures represent descriptive framework scores within the study&apos;s 45-criterion model and do not represent predefined pass/fail thresholds.
            </p>
          </div>
        </section>

        {/* Visually Separated Key Findings (1-col Mobile, 3-col Desktop) */}
        <section id="findings" className="scroll-mt-24 space-y-6 sm:space-y-8 w-full min-w-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Key Findings</h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1 sm:mt-2">
              6 core observational findings established across the 100-site sample framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 w-full min-w-0">
            
            {/* Finding 01 */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 w-full min-w-0 box-border">
              <div className="space-y-3 min-w-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono">01</div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-words">
                  All 100 Sites Were Effectively Accessible to Audited Crawlers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All 100 websites in our sample were effectively accessible under the crawler-access rules evaluated in this audit (OAI-SearchBot, PerplexityBot, Googlebot, Bingbot).
                </p>
              </div>
              <div className="bg-slate-50 p-3 sm:p-3.5 rounded-xl border border-slate-100 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                <strong>Clarification:</strong> Crawler accessibility measures whether audited bots were permitted under robots.txt rules; it does not measure AI indexing or citation.
              </div>
            </div>

            {/* Finding 02 */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono">02</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-words">
                Technical Foundations Were Strongly Prevalent
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Technical Search Readiness averaged <strong>19.17 out of 20 points (95.85% of available points)</strong>. Foundational items such as HTTPS enforcement, direct HTTP 200 statuses, canonical tags, and mobile viewports were consistently present.
              </p>
            </div>

            {/* Finding 03 */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono">03</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-words">
                GEO / Authority Readiness Was the Largest Gap
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                GEO / Authority Readiness averaged <strong>10.96 out of 30 points (36.53% of available points)</strong>—making it the lowest-scoring category in our sample framework.
              </p>
            </div>

            {/* Finding 04 */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono">04</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-words">
                Content Retrievability Trailed Technical Compliance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                AEO / Content Retrievability averaged <strong>12.44 out of 20 points (62.20% of available points)</strong>. While logical heading hierarchies were common (85%), passage-level answer formats lagged.
              </p>
            </div>

            {/* Finding 05 */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-700 font-mono">05</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-words">
                Machine-Readable Organization Schema Was Not Universal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>58 of the 100 websites audited</strong> did not fully meet the Organization JSON-LD schema markup criterion on their homepage. Human trust signals (Contact page 96%, About page 92%) were far more common than machine schema.
              </p>
            </div>

            {/* Finding 06 */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-700 font-mono">06</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-words">
                Original Research & Data Assets Were Rare
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>80 of the 100 audited sites</strong> did not fully meet the study&apos;s Original Data & Proprietary Research criterion, highlighting a key gap in original evidence generation.
              </p>
            </div>

          </div>
        </section>

        {/* Real Proportional Category Readiness Chart */}
        <section id="categories" className="scroll-mt-24 p-5 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 sm:space-y-8 w-full min-w-0 box-border">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              AI Search Readiness by Category
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1">
              Average percentage of available category points earned across the 100 websites audited.
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6 bg-white p-4 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs w-full min-w-0 box-border">
            {[
              { name: "AI Discovery Accessibility (Cat 2)", pct: "100.00%", pts: "10.00 / 10.0 Pts", color: "#2563eb" },
              { name: "Technical Search Readiness (Cat 1)", pct: "95.85%", pts: "19.17 / 20.0 Pts", color: "#2563eb" },
              { name: "Entity & E-E-A-T Transparency (Cat 3)", pct: "73.43%", pts: "14.69 / 20.0 Pts", color: "#4f46e5" },
              { name: "AEO / Content Retrievability (Cat 4)", pct: "62.20%", pts: "12.44 / 20.0 Pts", color: "#d97706" },
              { name: "GEO / Authority Readiness (Cat 5)", pct: "36.53%", pts: "10.96 / 30.0 Pts", color: "#e11d48" },
            ].map((cat, i) => (
              <div key={i} className="space-y-2 w-full min-w-0">
                <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900 gap-2 min-w-0">
                  <span className="break-words max-w-full">{cat.name}</span>
                  <span className="font-mono text-xs text-slate-700 shrink-0">{cat.pct} <span className="font-normal text-slate-500">({cat.pts})</span></span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3.5 sm:h-4 overflow-hidden">
                  <div className="h-3.5 sm:h-4 rounded-full" style={{ width: cat.pct, backgroundColor: cat.color }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 pt-2 border-t border-slate-200">
            Source: Unified Branding Experts AI Search Readiness Study 2026, n=100. Normalized score = (category mean score / category maximum score) * 100.
          </div>
        </section>

        {/* CORE CHART 6: GEO Authority Criterion Performance */}
        <section id="geo-chart" className="scroll-mt-24 p-5 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6 sm:space-y-8 w-full min-w-0 box-border">
          <div>
            <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">Core Chart 6</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Where GEO / Authority Readiness Fell Short
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1">
              Normalized performance across all 10 Category 5 criteria in the 100-site sample framework.
            </p>
          </div>

          <div className="space-y-3.5 sm:space-y-4 w-full min-w-0">
            {[
              { id: "C5.9", name: "External Entity Corroboration & Knowledge Nodes", pct: "8.0%", pts: "0.24 / 3.0 Pts" },
              { id: "C5.2", name: "Original Data & Proprietary Research", pct: "20.0%", pts: "0.60 / 3.0 Pts" },
              { id: "C5.5", name: "Expert Commentary & Industry Quotes", pct: "27.5%", pts: "0.83 / 3.0 Pts" },
              { id: "C5.1", name: "First-Party Case Studies & Project Proof", pct: "30.0%", pts: "0.90 / 3.0 Pts" },
              { id: "C5.4", name: "Industry Association & Accreditation Profiles", pct: "42.0%", pts: "1.26 / 3.0 Pts" },
              { id: "C5.6", name: "Claim Substantiation & Citation Sources", pct: "44.0%", pts: "1.32 / 3.0 Pts" },
              { id: "C5.3", name: "Third-Party Media Mentions & Press Coverage", pct: "45.0%", pts: "1.35 / 3.0 Pts" },
              { id: "C5.8", name: "Supplier & B2B Partner References", pct: "45.0%", pts: "1.35 / 3.0 Pts" },
              { id: "C5.7", name: "Platform Review Profiles", pct: "50.0%", pts: "1.50 / 3.0 Pts" },
              { id: "C5.10", name: "Co-Citation & Entity Association", pct: "54.0%", pts: "1.62 / 3.0 Pts" },
            ].map((geoItem, i) => (
              <div key={i} className="space-y-1.5 p-2.5 sm:p-3 rounded-xl hover:bg-slate-50 transition-colors w-full min-w-0">
                <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm font-semibold text-slate-800 gap-2 min-w-0">
                  <span className="break-words max-w-full sm:max-w-[80%] min-w-0"><strong className="font-mono text-slate-400 mr-1.5">{geoItem.id}</strong>{geoItem.name}</span>
                  <span className="font-mono font-bold text-slate-900 shrink-0">{geoItem.pct} <span className="font-normal text-slate-500 text-[10px] sm:text-xs">({geoItem.pts})</span></span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 sm:h-3.5 overflow-hidden">
                  <div className="h-3 sm:h-3.5 rounded-full" style={{ width: geoItem.pct, backgroundColor: "#e11d48" }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 pt-2 border-t border-slate-200">
            Source: Unified Branding Experts AI Search Readiness Study 2026, n=100. Category 5 maximum possible score = 30.0 Points.
          </div>
        </section>

        {/* CORE CHART 7: Crawler Access Matrix (RESPONSIVE TABLE DESKTOP + STACKED CARDS MOBILE) */}
        <section id="crawler-matrix" className="scroll-mt-24 p-5 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 sm:space-y-8 w-full min-w-0 box-border">
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Core Chart 7</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How the Audited Crawlers Were Accessible
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1">
              Detailed breakdown of rule access mechanisms across the 100 audited websites (Source: <code>17-AI-CRAWLER-ACCESS-MECHANISMS.csv</code>).
            </p>
          </div>

          {/* Desktop Matrix View (Hidden on Mobile) */}
          <div className="hidden md:block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs w-full min-w-0">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70">
                  <th className="p-4 font-bold text-slate-900">Bot Identifier</th>
                  <th className="p-4 font-bold text-slate-700">Explicit Allow</th>
                  <th className="p-4 font-bold text-slate-700">Wildcard Allow</th>
                  <th className="p-4 font-bold text-slate-700">Default Allowed</th>
                  <th className="p-4 font-bold text-slate-700">Explicit Block</th>
                  <th className="p-4 font-bold text-slate-700">Conflicting</th>
                  <th className="p-4 font-bold text-slate-900">Effective Pass Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: "OAI-SearchBot", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
                  { name: "PerplexityBot", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
                  { name: "Googlebot", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
                  { name: "Bingbot", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
                  { name: "CDN / WAF Pass-through", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="p-4 font-bold text-slate-900">{row.name}</td>
                    <td className="p-4 text-slate-600">{row.exp}</td>
                    <td className="p-4 font-bold text-blue-700">{row.wild}</td>
                    <td className="p-4 text-slate-600">{row.def}</td>
                    <td className="p-4 text-slate-600">{row.block}</td>
                    <td className="p-4 text-slate-600">{row.conf}</td>
                    <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Card Matrix View (Shown ONLY on Mobile to prevent horizontal clipping) */}
          <div className="md:hidden space-y-4 w-full min-w-0">
            {[
              { name: "OAI-SearchBot", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
              { name: "PerplexityBot", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
              { name: "Googlebot", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
              { name: "Bingbot", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
              { name: "CDN / WAF Pass-through", exp: 0, wild: 100, def: 0, block: 0, conf: 0, rate: "100.0%" },
            ].map((bot, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-3 w-full min-w-0 box-border">
                <div className="flex justify-between items-center border-b border-slate-100 pb-2 min-w-0">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm truncate">{bot.name}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] shrink-0">{bot.rate} Pass</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs w-full min-w-0">
                  <div className="p-2 bg-slate-50 rounded-lg min-w-0">Wildcard Allow: <strong className="text-blue-700">{bot.wild}</strong></div>
                  <div className="p-2 bg-slate-50 rounded-lg min-w-0">Explicit Allow: <strong>{bot.exp}</strong></div>
                  <div className="p-2 bg-slate-50 rounded-lg min-w-0">Default Allowed: <strong>{bot.def}</strong></div>
                  <div className="p-2 bg-slate-50 rounded-lg min-w-0">Explicit Block: <strong>{bot.block}</strong></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
            <strong>Disclaimer:</strong> Crawler accessibility reflects publicly observable access rules only. It does not demonstrate indexing, ingestion, ranking, recommendation, or citation by an AI system.
          </div>
        </section>

        {/* Top Gaps Section */}
        <section id="gaps" className="scroll-mt-24 space-y-6 sm:space-y-8 w-full min-w-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Where Websites Fell Short (All Categories)
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1">
              The 10 criteria with the lowest normalized performance in our 100-site sample framework.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4 w-full min-w-0 box-border">
            {[
              { id: "C5.9", name: "External Entity Corroboration & Knowledge Nodes", pct: "8.0%" },
              { id: "C5.2", name: "Original Data & Proprietary Research", pct: "20.0%" },
              { id: "C4.10", name: "Article / Blog JSON-LD Schema Markup", pct: "23.0%" },
              { id: "C5.5", name: "Expert Commentary & Industry Quotes", pct: "27.5%" },
              { id: "C5.1", name: "First-Party Case Studies & Project Proof", pct: "30.0%" },
              { id: "C4.7", name: "Definition & Glossary Term Structure", pct: "32.5%" },
              { id: "C3.1", name: "Organization JSON-LD Schema Markup", pct: "42.0%" },
              { id: "C5.4", name: "Industry Association & Accreditation Profiles", pct: "42.0%" },
              { id: "C5.6", name: "Claim Substantiation & Citation Sources", pct: "44.0%" },
              { id: "C5.3", name: "Third-Party Media Mentions & Press Coverage", pct: "45.0%" },
            ].map((gap, i) => (
              <div key={i} className="flex items-center justify-between text-xs sm:text-sm gap-3 sm:gap-4 w-full min-w-0">
                <span className="w-10 sm:w-12 font-mono text-slate-400 shrink-0">{gap.id}</span>
                <span className="flex-1 font-semibold text-slate-800 break-words min-w-0">{gap.name}</span>
                <div className="hidden sm:block w-36 bg-slate-100 h-3 rounded-full overflow-hidden shrink-0">
                  <div className="bg-rose-500 h-3 rounded-full" style={{ width: gap.pct }}></div>
                </div>
                <span className="font-mono font-bold text-rose-600 shrink-0">{gap.pct}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Top Strengths Section */}
        <section id="strengths" className="scroll-mt-24 space-y-6 sm:space-y-8 w-full min-w-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What Most Websites Already Get Right
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1">
              The 10 criteria with the highest adoption and compliance across the 100 audited websites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0">
            {[
              { name: "HTTPS Enforcement", count: "100 / 100 PASS" },
              { name: "robots.txt File Accessibility", count: "100 / 100 PASS" },
              { name: "Indexability Meta Robots Directive", count: "100 / 100 PASS" },
              { name: "Mobile Viewport Meta Tag", count: "100 / 100 PASS" },
              { name: "Brand Name Consistency Across Channels", count: "100 / 100 PASS" },
              { name: "Crawlable HTML Navigation Links", count: "99 / 100 PASS" },
              { name: "Direct HTTP 200 Response", count: "98 / 100 PASS" },
              { name: "Canonical Tag Implementation", count: "98 / 100 PASS" },
              { name: "Privacy Policy & Terms Disclosure", count: "98 / 100 PASS" },
              { name: "Contact Information Transparency", count: "96 / 100 PASS" },
            ].map((str, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 sm:p-4 bg-emerald-50/60 border border-emerald-100 rounded-2xl text-xs sm:text-sm gap-2 w-full min-w-0 box-border">
                <span className="font-semibold text-slate-800 flex items-center gap-2 min-w-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">{str.name}</span>
                </span>
                <span className="font-bold text-emerald-800 shrink-0 font-mono text-[11px] sm:text-xs">{str.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Cohorts Section */}
        <section id="cohorts" className="scroll-mt-24 space-y-6 sm:space-y-8 w-full min-w-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Cohort Performance Breakdown
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1">
              Comparing average framework performance across the five 20-site business cohorts (n=20 per cohort).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full min-w-0">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-blue-600 text-center space-y-1 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono">72.85</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">eCommerce / D2C</div>
              <div className="text-[10px] text-slate-500 truncate">Median: 73.5 Pts</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">68.45</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">Professional / Local</div>
              <div className="text-[10px] text-slate-500 truncate">Median: 68.35 Pts</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">67.90</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">B2B / Corporate</div>
              <div className="text-[10px] text-slate-500 truncate">Median: 68.35 Pts</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">65.20</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">Health / Wellness</div>
              <div className="text-[10px] text-slate-500 truncate">Median: 65.5 Pts</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1 col-span-2 sm:col-span-1 w-full min-w-0 box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">61.88</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">Misc Independent</div>
              <div className="text-[10px] text-slate-500 truncate">Median: 62.0 Pts</div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 sm:p-8 rounded-3xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-3 w-full min-w-0 box-border">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              eCommerce vs. Miscellaneous Independent Score Decomposition
            </h3>
            <p className="leading-relaxed">
              Among the five cohorts in this sample, eCommerce/D2C recorded the highest average total score (72.85 points), leading Miscellaneous Independent (61.88 points) by <strong>10.97 points</strong>.
            </p>
            <p className="leading-relaxed">
              Score decomposition demonstrates that this gap was driven primarily by <strong>GEO authority signals (+5.32 Pts)</strong> and <strong>AEO content retrievability (+2.85 Pts)</strong>, rather than foundational technical differences (+0.65 Pts).
            </p>
          </div>
        </section>

        {/* Separate eCommerce Diagnostic (TINTED SECTION) */}
        <section className="p-5 sm:p-8 rounded-3xl bg-amber-50/60 border border-amber-200/90 space-y-6 w-full min-w-0 box-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
              SEPARATE ECOMMERCE DIAGNOSTIC
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-amber-950">
              Supplemental eCommerce Diagnostic (Not Included in 100-Point Score)
            </h2>
            <p className="text-xs sm:text-sm text-amber-900 mt-1">
              Diagnostic attributes measured specifically for the 20 eCommerce / D2C websites.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full min-w-0">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 text-center space-y-1 min-w-0 w-full box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-mono">85.0%</div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-900 truncate">Product Schema</div>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 text-center space-y-1 min-w-0 w-full box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-mono">80.0%</div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-900 truncate">Offer / Price Schema</div>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 text-center space-y-1 min-w-0 w-full box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-mono">45.0%</div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-900 truncate">Variant Schema</div>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 text-center space-y-1 min-w-0 w-full box-border">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-mono">70.0%</div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-900 truncate">Unique Copy</div>
            </div>
          </div>
        </section>

        {/* AISEO Link Cluster */}
        <section className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 no-print w-full min-w-0 box-border">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            Related AI Search & SEO Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm w-full min-w-0">
            <Link href="/insights/ai-seo-aeo-geo-guide" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between shadow-2xs min-w-0">
              <span className="truncate">Complete AI SEO, AEO & GEO Guide</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link href="/insights/how-to-get-your-business-mentioned-in-chatgpt" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between shadow-2xs min-w-0">
              <span className="truncate">How to Get Mentioned in ChatGPT</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link href="/insights/how-to-optimize-for-google-ai-overviews" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between shadow-2xs min-w-0">
              <span className="truncate">Optimizing for Google AI Overviews</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link href="/insights/shopify-ai-seo-guide" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between shadow-2xs min-w-0">
              <span className="truncate">Shopify AI SEO & Schema Guide</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link href="/services/aiseo" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between shadow-2xs min-w-0">
              <span className="truncate">UBE AI SEO Services</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link href="/ai-seo-packages" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between shadow-2xs min-w-0">
              <span className="truncate">AI SEO Audit Packages</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="scroll-mt-24 space-y-6 sm:space-y-8 pt-8 border-t border-slate-200 w-full min-w-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 shrink-0" />
            Study Methodology
          </h2>
          <div className="prose prose-slate text-xs sm:text-base text-slate-700 max-w-[800px] space-y-4 leading-relaxed w-full min-w-0">
            <p>
              The <strong>UBE AI Search Readiness Study 2026</strong> evaluated 100 independent small and midsize business websites across North America (19 Northeast US, 21 South US, 15 Midwest US, 29 West US, 16 Canada).
            </p>
            <p>
              Scoring was conducted using <code>SCORING-RUBRIC-V2.0</code>, consisting of 45 weighted criteria across 5 categories. Evidence was gathered from publicly observable website HTML, robots.txt directives, XML sitemaps, HTTP response headers, and external web corroboration nodes.
            </p>
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 my-4 space-y-2 w-full min-w-0 box-border">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Inter-Rater Reliability Audit</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A pre-selected subsample of 15 websites was independently double-audited by a secondary auditor. The reliability audit yielded 100% criterion-level decision agreement (Cohen&apos;s Kappa = 1.00, ICC = 1.00) and 0.0 points mean absolute total score difference across the deterministic scoring rules.
              </p>
            </div>
          </div>
        </section>

        {/* Scope Limitations */}
        <section id="limitations" className="scroll-mt-24 space-y-4 w-full min-w-0">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-slate-500 shrink-0" />
            Study Limitations & Scope Boundaries
          </h2>
          <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed max-w-[800px] w-full min-w-0 box-border">
            <ul className="list-disc pl-5 space-y-2">
              <li>This study used a constructed, stratified quota sample of 100 North American SMB websites and should not be interpreted as a probability sample of all small businesses.</li>
              <li>Final regional distributions reflected post-freeze eligibility replacements and should be interpreted as descriptive stratified observations.</li>
              <li>Category 2 (AI Discovery Accessibility) demonstrated a ceiling effect due to default wildcard permissions in robots.txt rules.</li>
              <li>The scoring model evaluates publicly observable website and web-corroboration signals; it does not measure internal LLM weights, private training datasets, or unobservable ranking algorithms.</li>
              <li>This observational study evaluates framework readiness and does not establish causal effects on organic search traffic, AI overview citations, or commercial revenue.</li>
            </ul>
          </div>
        </section>

        {/* Citation & Download */}
        <section id="citation" className="scroll-mt-24 p-5 sm:p-10 rounded-3xl bg-blue-50/60 border border-blue-100/90 space-y-6 w-full min-w-0 box-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full min-w-0">
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Cite This Research</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Suggested academic and editorial citation format.
              </p>
            </div>
            <a
              href="/research/ai-search-readiness-study-2026-aggregate-data.csv"
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-sm no-print"
            >
              <Download className="w-4 h-4" />
              Download Public Aggregate Data (CSV)
            </a>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-blue-200/80 font-mono text-xs sm:text-sm text-slate-800 break-all leading-relaxed w-full min-w-0 box-border">
            Unified Branding Experts. &ldquo;AI Search Readiness Study 2026: What We Found After Auditing 100 Business Websites.&rdquo; Published August 31, 2026. https://unifiedbrandingexperts.com/research/ai-search-readiness-study-2026
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs text-slate-600 pt-2 border-t border-blue-100 w-full min-w-0">
            <div className="truncate"><strong>Publisher:</strong> Unified Branding Experts</div>
            <div className="truncate"><strong>Study Period:</strong> August 2026</div>
            <div className="truncate"><strong>Sample Size:</strong> N = 100 Businesses</div>
            <div className="truncate"><strong>Dataset Version:</strong> N100 Authoritative V5</div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="p-6 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-2xl no-print w-full min-w-0 box-border">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            See How Your Website Compares
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Evaluate your business against the 45-criterion AI Search Readiness framework to identify key gaps in technical compliance, entity schema, content retrievability, and GEO authority.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-lg"
            >
              Request an AI Search Audit
            </Link>
            <Link
              href="/services/aiseo"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors border border-slate-700"
            >
              Explore AI SEO Services
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
