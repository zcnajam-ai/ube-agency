import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const siteUrl = "https://unifiedbrandingexperts.com";
const aboutUrl = `${siteUrl}/about`;
const founderId = `${aboutUrl}#ben-hox`;

export const metadata: Metadata = {
  title: { absolute: "About Unified Branding Experts | Founder, Team & Approach" },
  description:
    "Meet founder Ben Hox and the specialists behind Unified Branding Experts. See how we connect eCommerce, design, content, AI SEO and store management.",
  alternates: { canonical: aboutUrl },
  openGraph: {
    title: "About Unified Branding Experts | Founder, Team & Approach",
    description: "Meet Ben Hox and the UBE departments building stores, brands, content and search-ready experiences together.",
    url: aboutUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Unified Branding Experts | Founder, Team & Approach",
    description: "Meet founder Ben Hox and learn how UBE's specialists work together.",
  },
};

const departments = [
  { name: "eCommerce & store management", description: "Shopify and WooCommerce stores, product sourcing, supplier integrations, catalog management and continued operations across eligible marketplaces.", href: "/services/dropshipping" },
  { name: "Development", description: "Developers build responsive storefronts and websites, connect systems and improve the technical experience around the business.", href: "/services/web-design-development" },
  { name: "Brand & design", description: "Brand developers and designers connect positioning, identity, visual systems and product graphics into a consistent customer experience.", href: "/services/branding" },
  { name: "Content", description: "Writers develop service, collection and product content that explains the offer and helps buyers make informed decisions.", href: "/insights" },
  { name: "AI SEO", description: "Search specialists work on crawlability, page structure, entity consistency, appropriate structured data and useful answers.", href: "/services/ai-seo-agency" },
  { name: "Video & creative", description: "Video specialists develop product and brand stories for channels where visual explanation helps customers understand the offer.", href: "/services/digital-marketing" },
  { name: "AI & automation", description: "AI experts connect practical workflows such as lead routing, customer support and operational handoffs when the project calls for them.", href: "/services/ai-automation" },
];

const stages = [
  { number: "01", name: "Brand", detail: "Define the offer, audience, identity and message." },
  { number: "02", name: "Build", detail: "Create the store, website, content and product presentation." },
  { number: "03", name: "Launch", detail: "Check usability, measurement and search foundations." },
  { number: "04", name: "Scale", detail: "Manage the store and improve what the evidence shows needs work." },
];

const featuredWork = [
  { name: "Happy Knot Creations", detail: "Shopify storefront", href: "/work/happy-knot-creations-shopify-storefront" },
  { name: "Cellestial Empyre", detail: "Flip phone catalog", href: "/work/cellestial-empyre-flip-phone-shopify-store" },
  { name: "Tequila Outfitters", detail: "Apparel store", href: "/work/tequila-outfitters-shopify-apparel-store" },
  { name: "The Barcode Lady", detail: "WooCommerce catalog", href: "/work/the-barcode-lady-woocommerce-store" },
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${aboutUrl}#webpage`,
        name: "About Unified Branding Experts",
        description: "Meet the founder and specialist departments behind Unified Branding Experts.",
        url: aboutUrl,
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#organization` },
        about: { "@id": founderId },
        breadcrumb: { "@id": `${aboutUrl}#breadcrumb` },
      },
      {
        "@type": "Person",
        "@id": founderId,
        name: "Ben Hox",
        alternateName: "Najam",
        jobTitle: "Founder and CEO",
        image: `${siteUrl}/images/team/ben-hox-founder.webp`,
        worksFor: { "@id": `${siteUrl}/#organization` },
        url: `${aboutUrl}#founder`,
        description: "Founder and CEO of Unified Branding Experts.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${aboutUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "About", item: aboutUrl },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-32 sm:space-y-20 sm:px-6 md:px-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <header className="max-w-4xl space-y-6 border-b border-[#E0DDDB] pb-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6049B0]">About Unified Branding Experts</p>
        <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#161616] sm:text-6xl">
          One company for the work around your store.
        </h1>
        <p className="max-w-3xl font-body text-lg leading-relaxed text-[#585858] sm:text-xl">
          Unified Branding Experts (UBE) is a Texas-based digital agency serving businesses across the United States. We bring eCommerce development, brand design, content, AI SEO, marketing and ongoing store management into one coordinated scope. A client can start with a new storefront or a specific problem, then bring in the specialists the project actually needs.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-[#9F8BE7] px-6 py-3 text-sm font-bold text-[#161616] hover:bg-[#b4a3f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#161616]">See our work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          <Link href="/contact" className="rounded-full border border-[#E0DDDB] bg-white px-6 py-3 text-sm font-bold text-[#161616] hover:border-[#9F8BE7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#161616]">Discuss a project</Link>
        </div>
      </header>

      <section id="founder" aria-labelledby="founder-heading" className="grid gap-8 rounded-3xl border border-[#E0DDDB] bg-white p-5 shadow-sm md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:p-8 lg:gap-14">
        <div className="overflow-hidden rounded-2xl bg-[#FAF7F6]">
          <Image src="/images/team/ben-hox-founder.webp" alt="Ben Hox (Najam), founder and CEO of Unified Branding Experts" width={1120} height={1153} sizes="(max-width: 767px) calc(100vw - 72px), (max-width: 1279px) 40vw, 460px" className="h-auto w-full object-cover" />
        </div>
        <div className="space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6049B0]">Founder &amp; leadership</p>
          <h2 id="founder-heading" className="font-display text-3xl font-bold text-[#161616] sm:text-4xl">Ben Hox (Najam)</h2>
          <p className="font-display font-semibold text-[#585858]">Founder and CEO, Unified Branding Experts</p>
          <p className="leading-relaxed text-[#585858]">
            Ben leads the direction of UBE and connects its specialist departments around each client&apos;s business goals. He brings more than seven years of experience developing digital businesses. Under his leadership, UBE has supported the development of more than 500 businesses through online stores, content, branding and continued management.
          </p>
          <p className="leading-relaxed text-[#585858]">
            His role is to keep strategy and delivery connected: define what a buyer needs, agree on the scope, bring the relevant specialists together and review what is actually delivered. Our <Link href="/work" className="font-semibold text-[#6049B0] underline underline-offset-4">published case studies</Link> show examples without presenting unverified sales or ranking outcomes.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E0DDDB] bg-[#FAF7F6] p-4"><strong className="block font-display text-2xl text-[#161616]">7+ years</strong><span className="text-sm text-[#585858]">Founder&apos;s digital business experience</span></div>
            <div className="rounded-2xl border border-[#E0DDDB] bg-[#FAF7F6] p-4"><strong className="block font-display text-2xl text-[#161616]">500+ businesses</strong><span className="text-sm text-[#585858]">Company-reported businesses supported</span></div>
          </div>
          <p className="text-xs leading-relaxed text-[#585858]">Experience and business count were supplied by the founder. Individual client outcomes are described only where evidence is available.</p>
        </div>
      </section>

      <section aria-labelledby="company-heading" className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6049B0]">What the company does</p>
          <h2 id="company-heading" className="font-display text-3xl font-bold text-[#161616] sm:text-4xl">A coordinated company, with specialist departments.</h2>
          <div className="ube-logo-stage relative mt-8 grid min-h-72 place-items-center overflow-hidden rounded-[2rem] border border-[#D9D0EA] bg-gradient-to-br from-white via-[#F4F0FC] to-[#E7DBFA] p-8" aria-label="Unified Branding Experts logo">
            <div className="ube-logo-orbit absolute h-52 w-52 rounded-full border border-[#A58DD5]/50 sm:h-60 sm:w-60" aria-hidden="true" />
            <div className="ube-logo-orbit ube-logo-orbit-reverse absolute h-64 w-64 rounded-full border border-[#A58DD5]/30 sm:h-72 sm:w-72" aria-hidden="true" />
            <Image src="/images/logo/ube-logo-black.svg" width={230} height={180} alt="Unified Branding Experts official logo" className="ube-logo-float relative z-10 h-auto w-44 drop-shadow-[8px_15px_15px_rgba(72,44,110,0.25)] sm:w-56" />
          </div>
        </div>
        <div className="space-y-4 leading-relaxed text-[#585858]">
          <p>UBE brings multiple departments and teams under one company. Developers, designers, brand developers, content writers, AI SEO experts, video specialists, AI experts and eCommerce specialists work on their respective parts of a project. The scope is based on what the client needs; every engagement does not automatically include every department.</p>
          <p>Our primary work centers on Shopify and WooCommerce stores, <Link href="/services/dropshipping" className="font-semibold text-[#6049B0] underline underline-offset-4">dropshipping setup and product sourcing</Link>, eCommerce operations, web design, branding, search foundations and growth marketing. Depending on the engagement, specialists can coordinate supplier integrations, product graphics, packaging, eligible marketplace channels and fulfillment planning. Store structure informs content, content supports product discovery, and the management plan keeps the site useful after launch.</p>
        </div>
      </section>

      <section aria-labelledby="departments-heading" className="space-y-7">
        <div className="max-w-3xl space-y-3">
          <h2 id="departments-heading" className="font-display text-3xl font-bold text-[#161616] sm:text-4xl">The departments behind the work</h2>
          <p className="leading-relaxed text-[#585858]">These capabilities work together when the project calls for them. The people and deliverables assigned to an engagement depend on its agreed scope.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <article key={department.name} className="flex flex-col gap-4 rounded-2xl border border-[#E0DDDB] bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-[#161616]">{department.name}</h3>
              <p className="flex-1 text-sm leading-relaxed text-[#585858]">{department.description}</p>
              <Link href={department.href} className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#6049B0] underline underline-offset-4 hover:text-[#161616] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#161616]">Explore this work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="process-heading" className="rounded-3xl bg-[#161616] px-6 py-10 text-white sm:px-10 sm:py-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b4a3f7]">How we work</p>
        <h2 id="process-heading" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Brand → Build → Launch → Scale</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-[#D6D2D0]">The Unified System™ connects the work. A project can begin at any stage; its proposal defines the actual deliverables.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage) => (
            <div key={stage.number} className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <span className="font-mono text-sm text-[#b4a3f7]">{stage.number}</span>
              <h3 className="mt-3 font-display text-xl font-bold">{stage.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#D6D2D0]">{stage.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="proof-heading" className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6049B0]">See the work</p>
          <h2 id="proof-heading" className="font-display text-3xl font-bold text-[#161616] sm:text-4xl">Real projects, described with clear evidence.</h2>
          <p className="leading-relaxed text-[#585858]">Our case studies describe project scope and what a visitor can inspect. We do not turn deliverables into invented revenue, rankings or conversion results.</p>
          <Link href="/work" className="inline-flex items-center gap-2 font-semibold text-[#6049B0] underline underline-offset-4 hover:text-[#161616]">Browse all case studies <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {featuredWork.map((project) => (
            <Link key={project.href} href={project.href} className="group rounded-2xl border border-[#E0DDDB] bg-white p-5 hover:border-[#9F8BE7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#161616]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6049B0]">{project.detail}</span>
              <span className="mt-2 flex items-center justify-between gap-2 font-display text-lg font-bold text-[#161616]">{project.name}<ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="search-heading" className="rounded-3xl border border-[#E0DDDB] bg-white p-7 sm:p-10">
        <h2 id="search-heading" className="font-display text-2xl font-bold text-[#161616] sm:text-3xl">How we handle search and AI discovery</h2>
        <p className="mt-4 max-w-4xl leading-relaxed text-[#585858]">Clear service pages, descriptive product information, accessible site structure, appropriate structured data and a consistent company identity help people and search systems understand what a business offers. Our AI SEO work starts with those fundamentals, then addresses content gaps and measurement when data is available. Search engines and AI answer tools decide what to display; no agency can guarantee a ranking, citation or sale.</p>
        <div className="mt-5 flex flex-wrap gap-4">
          <Link href="/ai-seo" className="font-semibold text-[#6049B0] underline underline-offset-4 hover:text-[#161616]">Read our AI SEO approach</Link>
          <Link href="/research/ai-search-readiness-study-2026" className="font-semibold text-[#6049B0] underline underline-offset-4 hover:text-[#161616]">Explore our AI search research</Link>
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="grid gap-8 rounded-3xl bg-[#161616] p-8 text-white sm:p-12 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-2xl space-y-4">
          <h2 id="contact-heading" className="font-display text-3xl font-bold">Tell us what you&apos;re building.</h2>
          <p className="leading-relaxed text-[#D6D2D0]">Share your store, goals and current blockers. We can discuss the relevant departments, project scope and the work that should come first.</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-[#D6D2D0]">Texas, USA <span aria-hidden="true">·</span> <a href={`mailto:${COMPANY_INFO.email}`} className="underline hover:text-white">{COMPANY_INFO.email}</a> <span aria-hidden="true">·</span> <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="underline hover:text-white">{COMPANY_INFO.phone}</a></p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9F8BE7] px-6 py-3 text-sm font-bold text-[#161616] hover:bg-[#b4a3f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Contact UBE <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </section>
    </main>
  );
}
