import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  Bot,
  Cpu,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "AI SEO Packages & Pricing | AEO, GEO & Search Plans",
  description:
    "Compare AI SEO packages built for every stage, from a one-time audit to a full-scale retainer. AEO, GEO, structured data, and content clusters that earn AI search visibility. Starting at $349.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/ai-seo-packages",
  },
  openGraph: {
    title: "AI SEO Packages & Pricing | AEO, GEO & Search Plans",
    description:
      "Compare AI SEO packages built for every stage, from a one-time audit to a full-scale retainer. Starting at $349.",
    url: "https://unifiedbrandingexperts.com/ai-seo-packages",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "AI SEO Packages by Unified Branding Experts",
      },
    ],
  },
};

export default function AiSeoPackagesPage() {
  const packages = [
    {
      id: "ai-seo-audit",
      name: "AI SEO Audit",
      bestFor: "Best for businesses testing the water",
      tagline: "See exactly where you stand before you spend on more.",
      price: "$349",
      pricePeriod: "one-time",
      popular: false,
      deliverables: [
        "Full AI search visibility audit",
        "Traditional ranking and technical health check",
        "AI Overview and answer-engine presence review",
        "Up to 10 pages analyzed",
        "Keyword and question opportunity snapshot",
        "Schema and structured-data gap review",
        "Prioritized action report",
        "One 30-minute findings walkthrough",
      ],
    },
    {
      id: "ai-seo-starter",
      name: "AI SEO Starter",
      bestFor: "Best for small sites making their first move",
      tagline: "Lay the groundwork that AI search actually reads.",
      price: "$749",
      pricePeriod: "/month",
      popular: false,
      deliverables: [
        "Everything in the Audit",
        "On-page optimization for up to 10 pages",
        "AEO formatting on key pages (direct-answer structure)",
        "Core schema and structured-data setup",
        "Keyword and question mapping",
        "Technical SEO fixes (crawl, speed, mobile, indexing)",
        "Monthly performance report",
        "1 support call per month",
      ],
    },
    {
      id: "ai-seo-growth",
      name: "AI SEO Growth",
      bestFor: "Best for growing businesses building authority",
      tagline: "Turn a solid foundation into steady visibility.",
      price: "$1,499",
      pricePeriod: "/month",
      popular: true,
      deliverables: [
        "Everything in Starter",
        "Optimization for up to 25 pages",
        "2 topical content clusters built per month",
        "GEO signals to earn AI citations",
        "Expanded AEO and FAQ optimization",
        "Ongoing technical monitoring",
        "AI Overview presence tracking",
        "Bi-weekly performance reporting",
        "2 support calls per month",
      ],
    },
    {
      id: "ai-seo-authority",
      name: "AI SEO Authority",
      bestFor: "Best for competitive niches and established brands",
      tagline: "Compete for the answer, not just the ranking.",
      price: "$2,999",
      pricePeriod: "/month",
      popular: false,
      deliverables: [
        "Everything in Growth",
        "Optimization across up to 50 pages",
        "4 topical content clusters built per month",
        "Advanced GEO and citation-building strategy",
        "Full entity and Organization signal optimization",
        "Competitor AI-visibility tracking",
        "Conversion-focused content refinement",
        "Weekly monitoring and reporting",
        "Dedicated strategist and monthly strategy session",
      ],
    },
    {
      id: "ai-seo-enterprise",
      name: "AI SEO Enterprise",
      bestFor: "Best for full-scale, multi-market visibility",
      tagline: "Own your space across search and AI, everywhere it matters.",
      price: "Custom",
      pricePeriod: "tailored retainer",
      popular: false,
      deliverables: [
        "Everything in Authority",
        "Unlimited page and content optimization",
        "Full topical authority program across your site",
        "Multi-location or multi-market AI SEO strategy",
        "Priority GEO, AEO, and structured-data implementation",
        "Continuous AI Overview and citation monitoring",
        "Custom reporting dashboard",
        "Quarterly roadmap planning",
        "Priority support with a dedicated team",
      ],
    },
  ];

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
      desc: "AI SEO is a build, not a switch. Early technical and structural gains can appear within weeks, but meaningful ranking and citation growth typically develops over three to six months. We share regular reports so progress is always visible.",
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

  // Offer / Schema structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Unified Branding Experts AI SEO Packages",
    description:
      "AEO, GEO, and generative AI search optimization packages starting from $349 audit to full-scale monthly retainers.",
    brand: {
      "@type": "Brand",
      name: COMPANY_INFO.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "349",
      highPrice: "2999",
      offers: packages.map((pkg) => {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-4">
          <Link
            href="/services/aiseo"
            className="inline-flex items-center gap-2 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#9F8BE7]" />
            <span>Back to AI SEO Service Details</span>
          </Link>
          <div className="text-xs font-mono-num text-[#585858]">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/services" className="hover:underline">Services</Link> / <Link href="/services/aiseo" className="hover:underline">AI SEO</Link> / <span className="text-[#161616] font-bold">Packages</span>
          </div>
        </div>

        {/* 1. Header Section */}
        <section className="text-center space-y-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AEO & GEO SEARCH PRICING</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
            AI SEO Packages &amp; Pricing
          </h1>

          <p className="text-xl sm:text-2xl font-display font-medium text-[#303030]">
            Choose the Search Strategy That Fits Where You Are
          </p>

          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
            Search is shifting faster than most businesses can keep up with. Some brands need a first, honest look at where they stand. Others are ready to compete for a permanent spot in AI answers.
          </p>

          <div className="inline-block p-3 rounded-2xl bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#161616] font-bold shadow-xs">
            Starting from <span className="text-emerald-600 font-black text-sm">$349</span> for a one-time AI SEO audit. Monthly retainers available for ongoing growth.
          </div>
        </section>

        {/* 2. Packages Pricing Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
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
                  href={`/contact?package=aiseo-${pkg.id}`}
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

        {/* 4. Cross-Links */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/services/aiseo"
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
            href="/services/ai-automation"
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] space-y-2 transition-all group shadow-xs"
          >
            <span className="text-xs font-mono-num text-emerald-600 font-bold">COMPLEMENTARY</span>
            <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
              <span>AI Automation Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#585858] group-hover:text-[#9F8BE7]" />
            </h3>
            <p className="text-xs text-[#585858]">
              Automate CRM lead routing, customer support bots, and internal ops.
            </p>
          </Link>

          <Link
            href="/branding-packages"
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] space-y-2 transition-all group shadow-xs"
          >
            <span className="text-xs font-mono-num text-purple-600 font-bold">BRAND IDENTITY</span>
            <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
              <span>Branding Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#585858] group-hover:text-[#9F8BE7]" />
            </h3>
            <p className="text-xs text-[#585858]">
              Get a memorable brand identity and custom logo starting from $299.
            </p>
          </Link>
        </section>

        {/* 5. Final CTA */}
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
