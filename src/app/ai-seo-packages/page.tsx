import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { AI_SEO_PACKAGES } from "@/data/aiSeoPackages";

export const metadata: Metadata = {
  title: "Best AI SEO Packages 2026: Compare Tiers & Pricing",
  description:
    "Compare AI SEO packages from a $349 audit to $2,999/month. See AEO, GEO, ChatGPT, Google AI Overviews and video search scope, informed by our 100-site study.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/ai-seo-packages",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI SEO Packages 2026: Compare Tiers & Pricing",
    description: "Compare AI SEO packages from a $349 audit to $2,999/month. See AEO, GEO, ChatGPT, Google AI Overviews and video search scope, informed by our 100-site study.",
    images: ["https://unifiedbrandingexperts.com/ai-seo-packages/opengraph-image"],
  },
  openGraph: {
    title: "Best AI SEO Packages 2026: Compare Tiers & Pricing",
    description:
      "Compare AI SEO packages from a $349 audit to $2,999/month. See AEO, GEO, ChatGPT, Google AI Overviews and video search scope, informed by our 100-site study.",
    url: "https://unifiedbrandingexperts.com/ai-seo-packages",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/ai-seo-packages/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI SEO Packages by Unified Branding Experts",
      },
    ],
  },
};

export default function AiSeoPackagesPage() {
  const packages = AI_SEO_PACKAGES;

  const infoBlocks = [
    {
      title: "Pricing",
      desc: "Prices start from $349 for a one-time audit and from $749 per month for ongoing retainers. Enterprise and custom scopes are quoted separately based on your goals and site size.",
    },
    {
      title: "What's Included",
      desc: "Each package lists its page counts, content clusters, and reporting cadence. Anything beyond a package's scope, such as extra pages or additional content, can be added with a custom quote.",
    },
    {
      title: "Results and Timelines",
      desc: "Implementation and search outcomes have different timelines. We agree priorities and a delivery schedule after reviewing your site. Rankings, citations, and leads depend on competition, indexing, content, and existing authority; no fixed results date is promised. Reporting follows your selected tier.",
    },
    {
      title: "AI Placements",
      desc: "We optimize your content, structure, and authority signals to improve your chances of appearing and being cited in AI Overviews, ChatGPT, and other answer engines. We can't guarantee inclusion, since those engines control their own outputs.",
    },
    {
      title: "Content and Access",
      desc: "Retainer packages that include content require timely input and site access from your side. The clearer the access, the faster the work moves. We'll outline exactly what we need at the start.",
    },
    {
      title: "Custom Work",
      desc: "Need something outside these tiers? Whether it's a single deep audit, a heavier content program, or a multi-market rollout, we build custom AI SEO plans tailored to your business.",
    },
  ];

  const faqs = [
    {
      q: "How much does AI SEO cost?",
      a: "Our one-time AI SEO Audit starts at $349. Ongoing implementation starts at $749 per month, with Growth at $1,499 per month and Authority at $2,999 per month. Custom pricing depends on site size, markets, and content scope.",
    },
    {
      q: "What does an AI SEO package include?",
      a: "Depending on the tier, an AI SEO package can include a technical audit, keyword and question mapping, on-page improvements, direct-answer formatting, structured data, content clusters, AI visibility monitoring, and reporting. Each package above states its exact limits and cadence.",
    },
    {
      q: "What is the difference between SEO, AEO, and GEO?",
      a: "SEO improves visibility in conventional search results. AEO structures clear answers for answer-led search experiences. GEO improves the clarity, evidence, and entity signals that generative systems may use when producing cited responses. Strong programs use all three together.",
    },
    {
      q: "Which AI SEO package is best for a small business?",
      a: "Choose the $349 audit when you need priorities before committing to implementation. The $749 monthly Starter plan fits a small site that needs foundational fixes across up to 10 pages. Growth is better when ongoing content clusters and broader page optimization are required.",
    },
    {
      q: "How long does AI SEO take to work?",
      a: "Technical fixes can be completed quickly, but meaningful ranking, citation, and lead growth usually develops over several months. Timing depends on competition, crawl and indexing, existing authority, content quality, and how consistently recommendations are implemented.",
    },
    {
      q: "Can AI SEO guarantee placement in ChatGPT or Google AI Overviews?",
      a: "No agency can guarantee inclusion because each search or answer engine controls its results. We improve eligibility by strengthening technical access, answer quality, structured information, entity consistency, supporting evidence, and relevant authority signals.",
    },
  ];

  // Offer / Schema structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Unified Branding Experts AI SEO Packages",
    serviceType: "AI Search Engine Optimization",
    description:
      "AEO, GEO, and generative AI search optimization packages starting from $349 audit to full-scale monthly retainers.",
    image: "https://unifiedbrandingexperts.com/ai-seo-packages/opengraph-image",
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: "https://unifiedbrandingexperts.com",
      logo: {
        "@type": "ImageObject",
        url: "https://unifiedbrandingexperts.com/icon-512x512.png",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "349",
      highPrice: "2999",
      offerCount: 4,
      offers: packages.filter((pkg) => pkg.price !== "Custom").map((pkg) => {
        const numeric = pkg.price.replace(/[^0-9]/g, "");
        const offer: Record<string, unknown> = {
          "@type": "Offer",
          name: pkg.name,
          description: pkg.tagline,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `https://unifiedbrandingexperts.com/ai-seo-packages#${pkg.id}`,
        };
        if (numeric) {
          offer.price = numeric;
        }
        return offer;
      }),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://unifiedbrandingexperts.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://unifiedbrandingexperts.com/services" },
      { "@type": "ListItem", position: 3, name: "AI SEO", item: "https://unifiedbrandingexperts.com/services/ai-seo-agency" },
      { "@type": "ListItem", position: 4, name: "AI SEO Packages", item: "https://unifiedbrandingexperts.com/ai-seo-packages" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#E0DDDB] pb-4">
          <Link
            href="/services/ai-seo-agency"
            className="inline-flex items-center gap-2 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#9F8BE7]" />
            <span>Back to AI SEO Service Details</span>
          </Link>
          <div className="text-xs font-mono-num text-[#585858]">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/services" className="hover:underline">Services</Link> / <Link href="/services/ai-seo-agency" className="hover:underline">AI SEO</Link> / <span className="text-[#161616] font-bold">Packages</span>
          </div>
        </div>

        {/* 1. Header Section */}
        <section className="text-center space-y-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AEO & GEO SEARCH PRICING</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
            Best AI SEO Packages for ChatGPT, Google AI Overviews &amp; Perplexity
          </h1>

          <p className="text-xl sm:text-2xl font-display font-medium text-[#303030]">
            Compare Plans for AEO, GEO & Video Search
          </p>

          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
            The best AI SEO package depends on what your site needs now. Start with the $349 Audit to identify crawl, content, and entity gaps. Starter ($749/month) implements the foundations; Growth ($1,499/month) and Authority ($2,999/month) expand page coverage and content work. These plans support visibility in ChatGPT, Google AI Overviews, Perplexity, and conventional search, but cannot guarantee citations. Our <Link href="/research/ai-search-readiness-study-2026" className="font-semibold text-[#6049B0] underline">100-site AI Search Readiness Study</Link> informs the audit framework.
          </p>

          <p className="text-sm text-[#585858] font-body">
            <Link href="/ai-seo" className="text-[#9F8BE7] font-bold underline hover:text-[#161616]">Understand our AI SEO methodology</Link> before choosing an implementation tier.
          </p>

          <a href="#compare-plans" className="inline-flex items-center gap-2 rounded-full bg-[#161616] px-6 py-3 text-sm font-bold text-white hover:bg-[#303030] transition-colors">
            Compare all five plans <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <div className="inline-block p-3 rounded-2xl bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#161616] font-bold shadow-xs">
            Starting from <span className="text-emerald-600 font-black text-sm">$349</span> for a one-time AI SEO audit. Monthly retainers available for ongoing growth.
          </div>
        </section>

        <section aria-labelledby="package-criteria-heading" className="rounded-3xl border border-[#E0DDDB] bg-white p-8 sm:p-10">
          <h2 id="package-criteria-heading" className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#161616]">What should I look for in an AI SEO package?</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-sm sm:text-base leading-relaxed text-[#414141]">
            <li><strong>Diagnosis before deliverables:</strong> Check crawlability, indexing, analytics, and existing buyer questions before buying a content quota.</li>
            <li><strong>Clear implementation limits:</strong> Compare the number of pages, content clusters, structured-data tasks, and reporting frequency in each tier.</li>
            <li><strong>Evidence and originality:</strong> Ask how claims will be sourced, how business entities will be verified, and how useful answers will be maintained.</li>
            <li><strong>Measurement you can audit:</strong> Track search impressions, qualified visits, leads, and observable AI mentions without promising a specific citation.</li>
            <li><strong>Scope boundaries:</strong> Confirm whether video production, paid media, extra pages, platform access, and review cycles are included or separately quoted.</li>
          </ul>
        </section>

        {/* Direct answer for a high-impression search question */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E0DDDB] shadow-xs">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
              PACKAGE GUIDANCE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#161616]">
              What Is the Best SEO Package for AI and Video Search?
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
              Start with the <a href="#ai-seo-audit" className="font-semibold text-[#6B46C1] underline underline-offset-4">AI SEO Audit</a> if you need a clear diagnosis before committing to ongoing work. Choose the <a href="#ai-seo-growth" className="font-semibold text-[#6B46C1] underline underline-offset-4">AI SEO Growth plan</a> when you need continuous technical SEO, AEO and GEO improvements, structured data, and content clusters that support discovery across conventional, AI, and video-led search journeys.
            </p>
            <p className="text-sm text-[#585858] font-body leading-relaxed">
              Dedicated video production or channel management is quoted separately. Every recommendation is based on your site, market, current rankings, and the search surfaces most likely to generate qualified leads.
            </p>
          </div>
        </section>

        <section id="compare-plans" aria-labelledby="plan-comparison-heading" className="scroll-mt-32 space-y-5">
          <div className="space-y-2">
            <h2 id="plan-comparison-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">Compare AI SEO Packages at a Glance</h2>
            <p className="text-sm text-[#585858]">Compare the published scope before reviewing each plan below. All prices are in USD.</p>
          </div>
          <div role="region" aria-label="AI SEO plan comparison, scroll horizontally on smaller screens" tabIndex={0} className="overflow-x-auto rounded-3xl border border-[#E0DDDB] bg-white focus-visible:outline-2 focus-visible:outline-[#6B46C1]">
            <table className="w-full min-w-[850px] text-left text-sm">
              <caption className="sr-only">AI SEO package prices, page coverage, content clusters, and reporting cadence</caption>
              <thead className="bg-[#FAF7F6]">
                <tr>
                  <th scope="col" className="p-5 font-semibold">Scope</th>
                  {packages.map((pkg) => <th key={pkg.id} scope="col" className="p-5 font-semibold"><a href={`#${pkg.id}`} className="text-[#6B46C1] underline underline-offset-4">{pkg.name}</a></th>)}
                </tr>
              </thead>
              <tbody className="text-[#303030]">
                <tr className="border-t border-[#E0DDDB]">
                  <th scope="row" className="p-5 font-semibold">Price</th>
                  {packages.map((pkg) => <td key={pkg.id} className="p-5"><span className="block font-bold text-[#161616]">{pkg.price}</span><span className="text-xs">{pkg.pricePeriod}</span></td>)}
                </tr>
                {([
                  ["Page coverage", "pages"],
                  ["Content clusters", "content"],
                  ["Reporting", "reporting"],
                ] as const).map(([label, field]) => (
                  <tr key={field} className="border-t border-[#E0DDDB]">
                    <th scope="row" className="p-5 font-semibold">{label}</th>
                    {packages.map((pkg) => <td key={pkg.id} className="p-5 align-top">{pkg.comparison[field]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#585858] leading-relaxed">The Audit provides recommendations; monthly plans include implementation. Dedicated video production and channel management are quoted separately. Additional pages or content require an agreed scope.</p>
        </section>

        {/* 2. Packages Pricing Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`scroll-mt-32 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "bg-[#161616] text-white border-2 border-[#9F8BE7] shadow-xl scale-[1.02]"
                  : "bg-white text-[#161616] border border-[#E0DDDB] shadow-xs hover:border-[#9F8BE7]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#9F8BE7] text-[#161616] text-[11px] font-mono-num font-bold uppercase tracking-wider shadow-md">
                  Recommended Growth Plan
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span
                    className={`text-[11px] font-mono-num font-bold uppercase tracking-wider block mb-1 ${
                      pkg.popular ? "text-[#DDF160]" : "text-[#9F8BE7]"
                    }`}
                  >
                    {pkg.bestFor}
                  </span>
                  <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      pkg.popular ? "text-[#ACACAC]" : "text-[#585858]"
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                  {index === 0 ? (
                    <Link href="#compare-plans" className="mt-3 inline-block text-xs font-bold text-[#9F8BE7] underline hover:text-[#161616]">
                      See what&apos;s included in each tier
                    </Link>
                  ) : null}
                </div>

                {/* Price Display */}
                <div className="pt-2 pb-4 border-b border-[#E0DDDB]/30">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-black">{pkg.price}</span>
                    <span
                      className={`text-xs font-mono-num ${
                        pkg.popular ? "text-[#ACACAC]" : "text-[#585858]"
                      }`}
                    >
                      {pkg.pricePeriod}
                    </span>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-3">
                  <span
                    className={`text-xs font-mono-num font-bold uppercase tracking-wider block ${
                      pkg.popular ? "text-[#DDF160]" : "text-[#161616]"
                    }`}
                  >
                    Included in Package:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.popular ? "text-[#9F8BE7]" : "text-emerald-600"
                          }`}
                        />
                        <span className={pkg.popular ? "text-gray-200" : "text-[#303030]"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#E0DDDB]/30">
                <Link
                  href={`/contact?package=${pkg.id}`}
                  className={`w-full py-3.5 rounded-full font-display font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.popular
                      ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-[0_4px_15px_rgba(159,139,231,0.4)]"
                      : "bg-[#161616] text-white hover:bg-[#303030]"
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* 3. Important Package Information */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
              TRANSPARENCY & ASSURANCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
              Important Package Information
            </h2>
            <p className="text-sm text-[#585858] font-body">
              Search results are never guaranteed. What we guarantee is a strategy built to earn them, and honesty about how that work unfolds. Here&apos;s what to know before you choose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoBlocks.map((block) => (
              <div
                key={block.title}
                className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2"
              >
                <h3 className="font-display text-base font-bold text-[#161616]">{block.title}</h3>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Buyer questions based on Search Console demand */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
              AI SEO COST &amp; PACKAGE FAQS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
              AI SEO Package Questions, Answered
            </h2>
            <p className="text-sm text-[#585858] font-body leading-relaxed">
              Straight answers about price, scope, timelines, and the difference between SEO, AEO, and GEO—so you can choose a package based on what your site actually needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <article key={faq.q} className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs">
                <h3 className="font-display text-base font-bold text-[#161616]">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Cross-Links */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/services/ai-seo-agency"
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] space-y-2 transition-all group shadow-xs"
          >
            <span className="text-xs font-mono-num text-[#9F8BE7] font-bold">DEEP DIVE</span>
            <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
              <span>AI SEO Service Page</span>
              <ArrowUpRight className="w-4 h-4 text-[#585858] group-hover:text-[#9F8BE7]" />
            </h3>
            <p className="text-xs text-[#585858]">
              Read the full methodology, AEO/GEO signals, and citation frameworks.
            </p>
          </Link>

          <Link
            href="/work/happy-knot-creations-shopify-storefront"
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] space-y-2 transition-all group shadow-xs"
          >
            <span className="text-xs font-mono-num text-emerald-600 font-bold">PROJECT SCOPE</span>
            <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
              <span>Happy Knot Creations</span>
              <ArrowUpRight className="w-4 h-4 text-[#585858] group-hover:text-[#9F8BE7]" />
            </h3>
            <p className="text-xs text-[#585858]">
              Review our Shopify, store management, and AI SEO project scope for a handmade crochet business.
            </p>
          </Link>

          <Link
            href="/insights/how-to-optimize-for-google-ai-overviews"
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] space-y-2 transition-all group shadow-xs"
          >
            <span className="text-xs font-mono-num text-purple-600 font-bold">SEARCH GUIDE</span>
            <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
              <span>Google AI Overviews Guide</span>
              <ArrowUpRight className="w-4 h-4 text-[#585858] group-hover:text-[#9F8BE7]" />
            </h3>
            <p className="text-xs text-[#585858]">
              Learn how technical access, clear answers, and supporting evidence contribute to search readiness.
            </p>
          </Link>
        </section>

        {/* 6. Final CTA */}
        <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Ready to Get Found in AI Search?
          </h2>
          <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
            Start with an audit or step straight into a growth plan. Request a quote and tell us where your business wants to show up.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?package=ai-seo-audit"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
            >
              Request an AI SEO Audit
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
