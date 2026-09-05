import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Cpu,
  Bot,
  FileCode,
  Network,
  Wrench,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI SEO & GEO Services | Google AI Overviews & ChatGPT Search",
  description:
    "Get found in Google AI Overviews, ChatGPT Search, Perplexity, and generative search. Professional AI SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and JSON-LD schema architecture.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/aiseo",
  },
  openGraph: {
    title: "AI SEO Services | AEO, GEO & Search Optimization | Unified Branding Experts",
    description:
      "Get found in Google AI Overviews, ChatGPT Search, and generative search engines.",
    url: "https://unifiedbrandingexperts.com/services/aiseo",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "AI SEO Services - Unified Branding Experts",
      },
    ],
  },
};

export default function AiSeoServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI SEO & Generative Engine Optimization (GEO) Services",
    serviceType: "Search Engine Optimization & Generative AI Visibility",
    provider: {
      "@type": "Organization",
      name: "Unified Branding Experts",
      url: "https://unifiedbrandingexperts.com",
    },
    areaServed: "Worldwide",
    description: "Get found in Google AI Overviews, ChatGPT Search, Perplexity, and generative search engines with Answer Engine Optimization (AEO) and JSON-LD schema.",
    url: "https://unifiedbrandingexperts.com/services/aiseo",
    offers: {
      "@type": "Offer",
      price: "349.00",
      priceCurrency: "USD",
      url: "https://unifiedbrandingexperts.com/ai-seo-packages",
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
        name: "Services",
        item: "https://unifiedbrandingexperts.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI SEO",
        item: "https://unifiedbrandingexperts.com/services/aiseo",
      },
    ],
  };
  const serviceIncludes = [
    {
      title: "AI-Driven Search Optimization",
      desc: "We optimize your pages to rank in both traditional results and AI-generated summaries. That means aligning your content with how modern engines read, weigh, and cite information.",
      icon: <Search className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/aiseo/ai-discovery.jpeg",
    },
    {
      title: "Answer Engine Optimization (AEO)",
      desc: "People ask questions. Engines want clean answers. We structure your content into clear, direct responses that answer engines can lift and feature, from FAQ formatting to concise definitions.",
      icon: <Cpu className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/aiseo/aeo-structure.jpeg",
    },
    {
      title: "Generative Engine Optimization (GEO)",
      desc: "Tools like ChatGPT, Gemini, and Perplexity pull from sources they trust. We work to make your brand one of them, strengthening the signals that get you cited in generative answers.",
      icon: <Bot className="w-5 h-5 text-purple-600" />,
      image: "/images/official/aiseo/topical-authority.jpeg",
    },
    {
      title: "Structured Content and Schema",
      desc: "Machines read structure before they read prose. We organize your content with clear headings, logical hierarchy, and schema markup so engines understand exactly what each page offers.",
      icon: <FileCode className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/aiseo/schema-implementation.jpeg",
    },
    {
      title: "Topical Authority Building",
      desc: "One strong page isn't enough. We map and build content clusters around your core topics, so search systems see your site as a genuine authority worth recommending.",
      icon: <Network className="w-5 h-5 text-blue-600" />,
      image: "/images/official/aiseo/ai-monitoring.jpeg",
    },
    {
      title: "Technical SEO Foundation",
      desc: "None of this works on a shaky base. We handle crawlability, page speed, mobile readiness, and indexing so your content can actually be found and read.",
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      image: "/images/official/aiseo/aeo-structure.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and Search Audit",
      review: "Your current rankings, content, technical health, and how AI engines currently treat your brand.",
      setup: "A clear baseline and a prioritized opportunity map.",
      avoid: "Guessing where to start and wasting effort on the wrong pages.",
    },
    {
      number: "02",
      title: "Keyword and Question Research",
      review: "The terms, questions, and prompts your customers actually use.",
      setup: "A keyword and query strategy built for both search rankings and AI answers.",
      avoid: "Targeting phrases nobody searches and missing question-based intent.",
    },
    {
      number: "03",
      title: "Content Structuring and Optimization",
      review: "Your existing pages and content gaps.",
      setup: "Optimized, well-structured content with AEO-ready answers and clean formatting.",
      avoid: "Thin content that engines skip and readers bounce from.",
    },
    {
      number: "04",
      title: "Schema, Technical, and AI Signals",
      review: "Your site's technical foundation and markup.",
      setup: "Schema, structured data, and the trust signals that help AI tools cite you.",
      avoid: "Strong content that machines can't properly read or attribute.",
    },
    {
      number: "05",
      title: "Monitoring, Reporting, and Refinement",
      review: "Your rankings, AI Overview presence, traffic, and citations over time.",
      setup: "Clear reporting and ongoing adjustments based on real results.",
      avoid: "Flying blind and losing ground as search keeps evolving.",
    },
  ];

  const faqs = [
    {
      q: "What's the difference between AI SEO and regular SEO?",
      a: "Regular SEO focuses on ranking web pages in traditional search results. AI SEO includes that work but adds optimization for AI-driven experiences like Google AI Overviews, ChatGPT, and other answer engines. You need both to stay visible today.",
    },
    {
      q: "What are AEO and GEO?",
      a: "AEO stands for Answer Engine Optimization — structuring content so engines can pull direct answers from it. GEO stands for Generative Engine Optimization — improving the signals that get your brand cited by generative AI tools like ChatGPT and Perplexity.",
    },
    {
      q: "Can you get my business into Google's AI Overviews or ChatGPT answers?",
      a: "We optimize your content, structure, and authority signals to improve your chances of being featured and cited. We can't guarantee inclusion, since AI engines control their own outputs. What we can promise is a strategy built to earn those placements.",
    },
    {
      q: "How long does AI SEO take to show results?",
      a: "SEO is a long game. Early technical and structural improvements can show movement within weeks, but meaningful ranking and citation gains typically build over three to six months. We share progress reports along the way so you're never in the dark.",
    },
    {
      q: "Do I still need traditional SEO if I invest in AI SEO?",
      a: "Yes. Traditional rankings and AI visibility work together. A strong, well-structured, authoritative site is the foundation for both. We handle them as one connected strategy, not two separate projects.",
    },
    {
      q: "Will this work for a small business or a new website?",
      a: "It will. Newer sites take longer to build authority, but the right structure and content strategy from the start give you a real advantage. We shape the plan around where your business is today.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI SEARCH & DISCOVERY ARCHITECTURE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            AI SEO &amp; Generative Engine Optimization (GEO) Services.
          </h1>

          <p className="text-lg sm:text-xl font-display font-semibold text-[#9F8BE7]">
            Get Found in Google AI Overviews, ChatGPT Search &amp; Generative AI Engines.
          </p>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Search has changed. For years, ranking meant climbing to the top of a page of blue links. But today your customers ask ChatGPT, read Google&apos;s AI Overviews, and get answers before they ever click. If your business isn&apos;t showing up in those answers, you&apos;re invisible to the people already looking for you.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            At Unified Branding Experts, we help you get found where search is heading. We optimize your content for traditional rankings and for the AI systems now shaping how people discover businesses. <Link href="/insights/ai-seo-aeo-geo-guide" className="text-[#9F8BE7] underline font-bold hover:text-[#161616]">Read our complete guide to AI SEO, AEO and GEO</Link> for an in-depth breakdown of machine-readable entity architecture.
          </p>

          {/* Core Deliverable Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Optimization for Google AI Overviews and generative search",
              "Answer Engine Optimization (AEO) for direct answers",
              "Generative Engine Optimization (GEO) for ChatGPT & Perplexity",
              "Structured, machine-readable content engines trust",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Request an AI SEO Audit
            </Link>

            <Link
              href="/ai-seo-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Explore AI SEO Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Audit From $349
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        {/* Hero Visual Image */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md group">
            <Image
              src="/images/official/aiseo/google-search-aiseo-hub.png"
              alt="Unified Branding Experts AI SEO Discovery and generative search intelligence on Google"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-center p-2 transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">AEO • GEO • AI OVERVIEWS</span>
              <span className="text-emerald-600 font-bold">STARTING AT $349</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Is AI SEO? */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/aiseo/aeo-structure.jpeg"
              alt="Answer Engine Optimization and structured data architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            NEW DISCOVERY PARADIGM
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Is AI SEO?
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            AI SEO is the practice of optimizing your website so both search engines and AI tools understand, trust, and recommend your content.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            Traditional SEO focused on keywords, links, and page rankings. That work still matters. But AI-driven search adds a new layer: engines like Google&apos;s AI Overviews, Bing Copilot, and ChatGPT now read your content, summarize it, and answer questions with it directly.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            To earn a place in those answers, your content needs more than keywords. It needs clear structure, factual accuracy, strong topical authority, and markup that machines can read. AI SEO brings all of that together so your brand surfaces in the results people see first.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            This isn&apos;t about chasing a trend. It&apos;s about meeting your customers where they now search.
          </p>
        </div>
      </section>

      {/* 3. Why AI SEO Matters */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            WHY IT MATTERS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Why AI SEO Matters for Your Business
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Your customers have changed how they look for answers. When an AI engine answers a question in your industry, one of two things happens: either your business is part of that answer, or a competitor is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Zero-Click Attention",
              desc: "Show up in AI Overviews and you reach buyers before they visit a single competitor site.",
            },
            {
              title: "Authority Machines Recognize",
              desc: "Structured, credible content earns citations from AI tools like ChatGPT, Gemini, and Perplexity.",
            },
            {
              title: "Future-Proofed Visibility",
              desc: "As search shifts toward conversational AI, your authority foundation is already in place.",
            },
            {
              title: "Reduced Wasted Ad Spend",
              desc: "Organic AI visibility keeps working long after paid ad campaigns are switched off.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2"
            >
              <h3 className="font-display text-base font-bold text-[#161616]">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. What Our AI SEO Service Includes */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            COMPREHENSIVE CAPABILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our AI SEO Service Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            We cover the full picture, from classic ranking factors to the newest AI search signals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceIncludes.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#9F8BE7] transition-all group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F6]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our 5-Step Process */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            PROVEN METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our AI SEO Process
          </h2>
        </div>

        <div className="space-y-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="font-display font-black text-3xl text-[#9F8BE7] font-mono-num">
                  {step.number}
                </span>
                <h3 className="font-display text-base font-bold text-[#161616]">{step.title}</h3>
              </div>

              <div className="md:col-span-3 text-xs text-[#585858]">
                <strong className="text-[#161616] block mb-0.5">What we review:</strong>
                <span>{step.review}</span>
              </div>

              <div className="md:col-span-3 text-xs text-[#585858]">
                <strong className="text-[#161616] block mb-0.5">What we set up:</strong>
                <span>{step.setup}</span>
              </div>

              <div className="md:col-span-3 text-xs text-rose-700 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                <strong className="block mb-0.5 font-bold">What this helps you avoid:</strong>
                <span>{step.avoid}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Dedicated Package Banner (Bidirectional Linking) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F4EFEB] border-2 border-[#9F8BE7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9F8BE7]/15 text-xs font-mono-num text-[#161616] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#9F8BE7]" />
            <span>TRANSPARENT AI SEO PACKAGES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Compare Our AI SEO Packages & Retainers
          </h2>
          <p className="text-sm text-[#585858] font-body">
            Explore our 5 tiers: One-Time Audit ($349), Starter ($749/mo), Growth ($1,499/mo), Authority ($2,999/mo), and Enterprise Custom.
          </p>
        </div>

        <Link
          href="/ai-seo-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View All AI SEO Packages</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      {/* 7. FAQs */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs"
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

      {/* 8. Final CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Get Found in AI Search?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Start with an audit or step straight into a growth plan. Request a quote and tell us where your business wants to show up.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=aiseo"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Start Your Search Audit
          </Link>
          <Link
            href="/ai-seo-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
