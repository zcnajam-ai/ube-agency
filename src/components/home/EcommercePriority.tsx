"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FEATURED_PROJECTS } from "@/data/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ShoppingBag } from "lucide-react";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import InteractiveMedia from "../common/InteractiveMedia";

const pathways = [
  {
    number: "01", label: "Starting out", title: "Launch a store",
    description: "Get a Shopify or WooCommerce storefront with a usable catalog, product pages, payment and shipping setup, and a mobile shopping experience.",
    details: ["Store design", "Catalog setup", "Launch checks"],
    href: "/services/shopify-development", linkText: "Explore store builds",
  },
  {
    number: "02", label: "Already selling", title: "Improve the buying journey",
    description: "Work through confusing navigation, thin product content, checkout friction, and search visibility with a prioritized improvement plan.",
    details: ["Product discovery", "Checkout review", "Search foundations"],
    href: "/services/ecommerce", linkText: "Explore eCommerce growth",
  },
  {
    number: "03", label: "Need ongoing help", title: "Keep the store moving",
    description: "Hand off product updates, merchandising, promotions, catalog checks, and routine store operations to a defined management plan.",
    details: ["Catalog updates", "Store operations", "Reporting"],
    href: "/services/ecommerce-store-management", linkText: "Explore store management",
  },
];

export default function EcommercePriority() {
  const { openProjectModal } = useScroll();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const projects = FEATURED_PROJECTS;
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((n) => (n + 1) % projects.length), 4800);
    return () => window.clearInterval(timer);
  }, [paused, projects.length]);
  const project = projects[active];

  return (
    <section aria-labelledby="ecommerce-pathways-title" className="relative isolate overflow-hidden border-b border-[#E0DDDB] bg-[linear-gradient(135deg,#FAF7F6_0%,#F4F0FC_55%,#FAF7F6_100%)] px-4 py-20 sm:px-6 sm:py-28 md:px-12">
      <div className="pointer-events-none absolute -right-36 top-0 h-80 w-80 rounded-full bg-[#9F8BE7]/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDD5F3] bg-white/80 px-4 py-2 font-mono-num text-xs font-bold uppercase tracking-[0.14em] text-[#6B4BA7]">
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            eCommerce, from launch onward
          </p>
          <h2 id="ecommerce-pathways-title" className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#161616] sm:text-5xl lg:text-6xl">
            What does your store need next?
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-[#585858] sm:text-lg">
            You may need a first storefront, a better way for shoppers to find and buy products, or reliable help after launch. Choose the work that fits where your business is now.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-8">
          <div className="space-y-3" aria-label="Choose your eCommerce starting point">
            {pathways.map((pathway) => (
              <Link key={pathway.number} href={pathway.href}
                className="group block rounded-[1.75rem] border border-[#E0DDDB] bg-white/95 p-5 shadow-xs transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#9F8BE7] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B4BA7] sm:p-7">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE7FB] font-mono-num text-sm font-bold text-[#6B4BA7] sm:h-12 sm:w-12" aria-hidden="true">
                    {pathway.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono-num text-[11px] font-bold uppercase tracking-[0.15em] text-[#6B4BA7]">{pathway.label}</span>
                    <div className="mt-1 flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold leading-tight text-[#161616] sm:text-2xl">{pathway.title}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-[#6B4BA7] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </div>
                    <p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">{pathway.description}</p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#E0DDDB] pt-4">
                      {pathway.details.map((detail) => (
                        <span key={detail} className="inline-flex items-center gap-1.5 text-xs font-medium text-[#414141]">
                          <Check className="h-3.5 w-3.5 text-[#6B4BA7]" aria-hidden="true" />{detail}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#6B4BA7]">
                      {pathway.linkText}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#303035] bg-[#161616] p-4 text-white shadow-lg sm:p-6 lg:sticky lg:top-28" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
            <div className="flex items-center justify-between gap-3 px-1 pb-4">
              <span className="font-mono-num text-xs font-bold uppercase tracking-[0.15em] text-[#C3B2FF]">Selected work · {active + 1} / {projects.length}</span>
              <span className="rounded-full border border-white/20 px-3 py-1 font-mono-num text-[11px] text-white/80">{project.industry}</span>
            </div>
            <Link href={`/work/${project.slug}`} aria-label={`View the ${project.client} case study`} className="block overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C3B2FF]">
              <InteractiveMedia key={project.slug} src={project.heroImage} alt={`${project.client} project preview`} aspectRatio="aspect-[1559/1009]" objectFit="contain" sizes="(max-width: 1024px) 100vw, 42vw" quality={85} />
            </Link>
            <div className="px-1 pb-2 pt-6">
              <p className="font-mono-num text-xs font-bold uppercase tracking-[0.15em] text-[#C3B2FF]">{project.client}</p>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl">{project.category}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-[#D1D1D1] line-clamp-3">{project.summary}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#9F8BE7] px-5 font-display text-sm font-bold text-[#161616] transition-colors hover:bg-[#b4a3f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore project<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                <div className="flex gap-2" aria-label="Project carousel controls">
                  <button type="button" onClick={() => setActive((n) => (n - 1 + projects.length) % projects.length)} aria-label="Previous project" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"><ArrowLeft className="h-5 w-5" /></button>
                  <button type="button" onClick={() => setActive((n) => (n + 1) % projects.length)} aria-label="Next project" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"><ArrowRight className="h-5 w-5" /></button>
                </div>
              </div>
              <div className="mt-5 flex gap-1" aria-hidden="true">{projects.map((item, i) => <span key={item.slug} className={`h-1 flex-1 rounded-full ${i === active ? "bg-[#9F8BE7]" : "bg-white/20"}`} />)}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link href="/work/shipster-supply" className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-[#E0DDDB] bg-white/80 px-5 py-4 transition-colors hover:border-[#9F8BE7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B4BA7]">
            <span><span className="block font-display text-base font-bold text-[#161616]">Shipster Supply</span><span className="mt-1 block font-body text-xs text-[#585858]">Shopify storefront and catalog experience</span></span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-[#6B4BA7] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link href="/work/cellestial-empyre-flip-phone-shopify-store" className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-[#E0DDDB] bg-white/80 px-5 py-4 transition-colors hover:border-[#9F8BE7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B4BA7]">
            <span><span className="block font-display text-base font-bold text-[#161616]">Cellestial Empyre</span><span className="mt-1 block font-body text-xs text-[#585858]">Flip phone catalog and Shopify storefront</span></span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-[#6B4BA7] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#D9D3E3] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-body text-sm leading-relaxed text-[#585858]">
            Unsure which path fits? Tell us what you sell and where the store is today. We will scope the next step with you.
          </p>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => openProjectModal("eCommerce Store Design")}
              className="min-h-11 rounded-full bg-[#9F8BE7] px-5 font-display text-sm font-bold text-[#161616] transition-colors hover:bg-[#b4a3f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B4BA7] cursor-pointer">
              Discuss your store
            </button>
            <Link href="/ecommerce-growth-packages" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#CFC8D8] bg-white px-5 font-display text-sm font-bold text-[#161616] transition-colors hover:border-[#9F8BE7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B4BA7]">
              Compare eCommerce packages<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
