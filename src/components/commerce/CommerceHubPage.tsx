import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, X } from "lucide-react";
import type { MarketplaceHub } from "@/data/marketplace-hubs";

const UPDATED = "2026-09-22";

const PLATFORM_VISUALS: Record<MarketplaceHub["slug"], { src: string; alt: string; title: string }> = {
  shopify: {
    src: "/images/commerce/shopify-commerce-3d.webp",
    alt: "3D Shopify storefront system with product catalog and shopping bag",
    title: "Shopify Store Design and Development System",
  },
  "tiktok-shop": {
    src: "/images/commerce/tiktok-shop-commerce-3d.webp",
    alt: "3D TikTok Shop mobile storefront with video commerce and product fulfillment",
    title: "TikTok Shop Setup and Management System",
  },
  amazon: {
    src: "/images/commerce/amazon-marketplace-3d.webp",
    alt: "3D Amazon marketplace storefront with listing card and fulfillment package",
    title: "Amazon Marketplace Management System",
  },
  "walmart-marketplace": {
    src: "/images/commerce/walmart-marketplace-3d.webp",
    alt: "3D Walmart Marketplace storefront with organized catalog and inventory package",
    title: "Walmart Marketplace Setup and Management System",
  },
  ebay: {
    src: "/images/commerce/ebay-marketplace-3d.webp",
    alt: "3D eBay marketplace storefront with product tag, auction gavel and shipping package",
    title: "eBay Store Setup and Management System",
  },
};

export default function CommerceHubPage({ hub }: { hub: MarketplaceHub }) {
  const canonical = `https://unifiedbrandingexperts.com/${hub.slug}`;
  const visual = PLATFORM_VISUALS[hub.slug];
  const imageUrl = `https://unifiedbrandingexperts.com${visual.src}`;
  const toc = [
    ["deliverables", "What we deliver"],
    ["process", "How we work"],
    ["operations", "Operating model"],
    ["pricing", "Pricing"],
    ["fit", "Who it fits"],
    ["faq", "FAQ"],
    ["related", "Related resources"],
    ["start", "Get started"],
  ] as const;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: hub.title,
        description: hub.description,
        url: canonical,
        datePublished: UPDATED,
        dateModified: UPDATED,
        author: { "@id": "https://unifiedbrandingexperts.com/#organization" },
        publisher: { "@id": "https://unifiedbrandingexperts.com/#organization" },
        mainEntityOfPage: { "@id": `${canonical}#webpage` },
        image: { "@id": `${canonical}#primaryimage` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: hub.title,
        description: hub.description,
        url: canonical,
        provider: { "@id": "https://unifiedbrandingexperts.com/#organization" },
        areaServed: { "@type": "Country", name: "United States" },
        image: { "@id": `${canonical}#primaryimage` },
        offers: {
          "@type": "Offer",
          url: `https://unifiedbrandingexperts.com${hub.pricing.href}`,
          description: hub.pricing.detail,
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${canonical}#primaryimage`,
        url: imageUrl,
        contentUrl: imageUrl,
        width: 768,
        height: 768,
        caption: visual.alt,
        representativeOfPage: true,
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: hub.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://unifiedbrandingexperts.com/" },
          { "@type": "ListItem", position: 2, name: "eCommerce", item: "https://unifiedbrandingexperts.com/services/ecommerce" },
          { "@type": "ListItem", position: 3, name: hub.platform, item: canonical },
        ],
      },
    ],
  };

  return (
    <main className="bg-[#FAF7F6] text-[#161616] pt-28 sm:pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-xs text-[#585858] mb-8">
          <Link href="/" className="hover:text-[#9F8BE7]">Home</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <Link href="/services/ecommerce" className="hover:text-[#9F8BE7]">eCommerce</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <span aria-current="page">{hub.platform}</span>
        </nav>

        <div className="rounded-[2rem] border border-[#E0DDDB]/80 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-[1.45fr_.55fr] gap-0">
            <div className="p-6 sm:p-10 lg:p-14">
              <p className="font-mono-num text-xs font-bold tracking-[0.2em] text-[#9F8BE7] mb-5">{hub.eyebrow}</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.045em] leading-[1.02] text-balance">
                {hub.title}
              </h1>
              <p className="mt-7 text-base sm:text-lg leading-8 text-[#585858] max-w-3xl">{hub.summary}</p>
              <p className="mt-4 text-base leading-7 font-medium max-w-3xl">{hub.promise}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href={`/contact?type=${hub.slug}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#9F8BE7] px-6 py-3 font-display font-bold hover:bg-[#b4a3f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#161616]">
                  Discuss your {hub.platform} project <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+12242668081" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E0DDDB] bg-white px-6 py-3 font-display font-bold hover:border-[#9F8BE7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#161616]">
                  <Phone className="h-4 w-4" /> +1 224-266-8081
                </a>
              </div>
              <p className="mt-5 text-xs text-[#585858]">Published and last updated: September 22, 2026</p>
            </div>
            <div className="group bg-[#161616] text-white p-6 sm:p-8 lg:p-9 flex flex-col justify-between overflow-hidden">
              <div>
                <p className="font-mono-num text-xs tracking-[0.2em] text-[#b4a3f7]">TRANSPARENT SCOPE</p>
                <figure className="relative mx-auto mt-2 w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]">
                  <div className="absolute inset-[18%] rounded-full bg-[#9F8BE7]/25 blur-3xl transition-opacity duration-500 group-hover:opacity-90" aria-hidden="true" />
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    title={visual.title}
                    width={768}
                    height={768}
                    priority
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 320px"
                    className="relative h-auto w-full drop-shadow-[0_22px_28px_rgba(0,0,0,0.32)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                  />
                  <figcaption className="sr-only">{visual.title}</figcaption>
                </figure>
                <p className="font-display text-center text-sm font-bold text-white/85">{visual.title}</p>
                <p className="mt-5 font-display text-3xl font-bold">{hub.pricing.label}</p>
                <p className="mt-4 text-sm leading-6 text-white/70">{hub.pricing.detail}</p>
              </div>
              <Link href={hub.pricing.href} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-[#161616] hover:bg-[#b4a3f7]">
                Review package options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 lg:grid lg:grid-cols-[230px_1fr] lg:gap-12">
        <aside className="lg:sticky lg:top-28 lg:self-start mb-10 lg:mb-0" aria-label="On this page">
          <p className="text-xs font-mono-num font-bold tracking-[0.18em] text-[#585858] mb-3">ON THIS PAGE</p>
          <nav className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1" aria-label={`${hub.platform} page sections`}>
            {toc.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="shrink-0 block rounded-full lg:rounded-xl px-4 py-2 text-sm text-[#585858] bg-white border border-[#E0DDDB] lg:border-transparent lg:bg-transparent hover:bg-white hover:text-[#161616]">
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-16 min-w-0">
          <section id="deliverables" className="scroll-mt-28">
            <p className="text-xs font-mono-num font-bold text-[#9F8BE7] tracking-[0.18em]">SCOPE</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">What a senior {hub.platform} agency actually delivers</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {hub.deliverables.map((item, index) => (
                <article key={item.title} className="rounded-2xl bg-white/95 border border-[#E0DDDB]/80 p-6 shadow-sm">
                  <p className="text-xs font-mono-num font-bold text-[#9F8BE7]">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#585858]">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="process" className="scroll-mt-28">
            <p className="text-xs font-mono-num font-bold text-[#9F8BE7] tracking-[0.18em]">THE UNIFIED SYSTEM™</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">How we approach {hub.platform}</h2>
            <div className="mt-8 space-y-4">
              {hub.process.map((step, index) => (
                <article key={step.title} className="grid sm:grid-cols-[80px_1fr] gap-4 rounded-2xl border border-[#E0DDDB] bg-white p-5 sm:p-6">
                  <span className="font-mono-num text-sm font-bold text-[#9F8BE7]">STEP {index + 1}</span>
                  <div><h3 className="font-display text-xl font-bold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#585858]">{step.body}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section id="operations" className="scroll-mt-28">
            <p className="text-xs font-mono-num font-bold text-[#9F8BE7] tracking-[0.18em]">DECISION GUIDANCE</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">The {hub.platform} operating model</h2>
            <div className="mt-8 space-y-8">
              {hub.operations.map((section) => (
                <article key={section.title}>
                  <h3 className="font-display text-2xl font-bold">{section.title}</h3>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-[#585858]">{paragraph}</p>)}
                  {section.bullets ? <ul className="mt-5 grid gap-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6"><Check className="h-5 w-5 shrink-0 text-[#9F8BE7]" /><span>{bullet}</span></li>)}</ul> : null}
                </article>
              ))}
            </div>
          </section>

          <section id="pricing" className="scroll-mt-28 rounded-3xl bg-[#161616] p-7 sm:p-10 text-white">
            <p className="text-xs font-mono-num font-bold text-[#b4a3f7] tracking-[0.18em]">PRICING</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">What {hub.platform} work costs</h2>
            <p className="mt-5 font-display text-2xl font-bold text-[#b4a3f7]">{hub.pricing.label}</p>
            <p className="mt-4 text-sm sm:text-base leading-7 text-white/70">{hub.pricing.detail}</p>
            <Link href={hub.pricing.href} className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#9F8BE7] px-6 py-3 font-bold text-[#161616] hover:bg-[#b4a3f7]">Compare the relevant packages</Link>
          </section>

          <section id="fit" className="scroll-mt-28">
            <p className="text-xs font-mono-num font-bold text-[#9F8BE7] tracking-[0.18em]">FIT</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">Who {hub.platform} support is for</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6"><h3 className="font-display text-xl font-bold">A practical fit</h3><ul className="mt-5 space-y-3">{hub.fit.right.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="h-5 w-5 shrink-0 text-emerald-700" />{item}</li>)}</ul></div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6"><h3 className="font-display text-xl font-bold">Not the right fit</h3><ul className="mt-5 space-y-3">{hub.fit.notRight.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><X className="h-5 w-5 shrink-0 text-rose-700" />{item}</li>)}</ul></div>
            </div>
          </section>

          <section id="faq" className="scroll-mt-28">
            <p className="text-xs font-mono-num font-bold text-[#9F8BE7] tracking-[0.18em]">BUYER QUESTIONS</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">{hub.platform} FAQ</h2>
            <div className="mt-8 space-y-3">
              {hub.faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-[#E0DDDB] bg-white p-5"><summary className="cursor-pointer list-none font-display text-lg font-bold flex justify-between gap-4">{faq.question}<span aria-hidden="true" className="text-[#9F8BE7] group-open:rotate-45 transition-transform">+</span></summary><p className="mt-4 text-sm leading-7 text-[#585858]">{faq.answer}</p></details>)}
            </div>
          </section>

          <section id="related" className="scroll-mt-28">
            <p className="text-xs font-mono-num font-bold text-[#9F8BE7] tracking-[0.18em]">CONNECTED SYSTEM</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">Related eCommerce resources</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {hub.related.map((item) => <Link key={`${item.href}-${item.label}`} href={item.href} className="rounded-2xl border border-[#E0DDDB] bg-white p-5 hover:border-[#9F8BE7] transition-colors"><h3 className="font-display text-lg font-bold">{item.label}</h3><p className="mt-2 text-sm leading-6 text-[#585858]">{item.description}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#9F8BE7]">Read more <ArrowRight className="h-4 w-4" /></span></Link>)}
            </div>
          </section>

          <section id="start" className="scroll-mt-28 rounded-3xl border border-[#E0DDDB] bg-white p-7 sm:p-10 text-center">
            <p className="text-xs font-mono-num font-bold text-[#9F8BE7] tracking-[0.18em]">NEXT STEP</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Build the channel around real operations</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#585858] leading-7">Share your catalog, current platform, fulfillment model, launch status, and the work already completed. We will define a practical scope without promising marketplace approval, rankings, or sales.</p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3"><Link href={`/contact?type=${hub.slug}`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#9F8BE7] px-6 py-3 font-bold hover:bg-[#b4a3f7]">Request a {hub.platform} scope</Link><a href="tel:+12242668081" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#E0DDDB] px-6 py-3 font-bold hover:border-[#9F8BE7]">Call +1 224-266-8081</a></div>
          </section>
        </div>
      </div>
    </main>
  );
}
