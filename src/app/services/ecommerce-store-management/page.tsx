import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";
import { STORE_MANAGEMENT_FAQS } from "@/data/store-management";

const base = "https://unifiedbrandingexperts.com";
const url = `${base}/services/ecommerce-store-management`;
export const metadata: Metadata = {
  title: "eCommerce Store Management Services",
  description: "Ongoing store management for Shopify, WooCommerce and marketplaces: product updates, inventory checks, order monitoring and reporting. Plans from $249/month.",
  alternates: { canonical: url },
  openGraph: { title: "eCommerce Store Management | Unified Branding Experts", description: "Delegate store upkeep with a defined monthly scope. Plans from $249/month.", url, images: [`${base}/images/editorial/shopify-storefront-development.webp`] },
};

export default function StoreManagementServicePage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${url}#service`, name: "eCommerce Store Management", serviceType: "Online store operations and maintenance", url, description: metadata.description, provider: { "@type": "Organization", name: "Unified Branding Experts", url: base } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: base }, { "@type": "ListItem", position: 2, name: "Services", item: `${base}/services` }, { "@type": "ListItem", position: 3, name: "eCommerce", item: `${base}/services/ecommerce` }, { "@type": "ListItem", position: 4, name: "Store Management", item: url }] },
  ] };
  const areas = [
    ["Product information that stays current", "Update approved titles, descriptions, prices, images and attributes. Organize existing collections and flag missing product details before they confuse shoppers."],
    ["Inventory and order visibility", "Review stock levels and order status on your plan’s schedule. Flag overselling risks, delayed fulfillment and sync issues for you or your fulfillment partner to resolve."],
    ["Scheduled merchandising", "Keep existing banners, collections and discount settings aligned with approved promotions. We confirm dates, pricing and content before changes go live."],
    ["Practical listing improvements", "Growth and Scale include a monthly allowance for improving selected product titles, descriptions and attributes. Larger search campaigns can be scoped with our SEO team."],
    ["Storefront upkeep", "Check key pages, links and published product information. Record issues, complete routine admin changes and flag technical fixes that need a separate development estimate."],
    ["Reports you can act on", "See completed tasks, open exceptions and next-month priorities. Review available traffic and order trends without confusing routine maintenance with promised sales growth."],
  ];
  return <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-14 text-[#161616]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <nav aria-label="Breadcrumb" className="text-sm text-[#585858] flex flex-wrap gap-2"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><Link href="/services/ecommerce">eCommerce</Link><span>/ Store Management</span></nav>
    <header className="grid lg:grid-cols-2 gap-10 items-center"><div className="space-y-5"><p className="font-bold text-sm uppercase tracking-widest text-[#6B46C1]">Support beyond your store launch</p><h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">eCommerce Store Management Services</h1><p className="text-lg text-[#585858]">Your online store needs attention long after launch. Delegate recurring catalog updates, inventory checks, order monitoring and promotions to a team working from an agreed monthly plan.</p><div className="flex flex-wrap gap-4"><Link href="/ecommerce-store-management-packages" className="rounded-full bg-[#9F8BE7] px-6 py-4 font-bold">Compare plans from $249/month</Link><ServiceProjectModalTrigger service="eCommerce Store Management" label="Discuss your store" className="rounded-full" /></div></div><div className="relative aspect-[4/3] rounded-3xl overflow-hidden"><Image src="/images/editorial/shopify-storefront-development.webp" alt="Store operator reviewing product information on desktop and mobile" fill sizes="(max-width: 1024px) 100vw, 50vw" preload className="object-cover" /></div></header>
    <section className="space-y-6"><h2 className="font-display text-3xl font-bold">What we manage each month</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{areas.map(([title, description]) => <article key={title} className="rounded-3xl border border-[#E0DDDB] bg-white p-6 space-y-3"><h3 className="font-display text-xl font-bold">{title}</h3><p className="text-sm leading-relaxed text-[#585858]">{description}</p></article>)}</div></section>
    <section className="rounded-3xl bg-[#FAF7F6] p-8 space-y-4"><h2 className="font-display text-3xl font-bold">Built around your existing sales channels</h2><p className="text-[#585858]">We scope support for Shopify, WooCommerce, Amazon, Etsy, eBay and TikTok Shop. Start with one storefront or choose Scale for up to two channels. Platform access, catalog volume and account requirements are confirmed during onboarding.</p><div className="flex flex-wrap gap-5 text-[#6B46C1] underline underline-offset-4"><Link href="/services/shopify-development">Shopify development</Link><Link href="/services/etsy-shop-setup">Etsy setup</Link><Link href="/services/tiktok-shop-setup">TikTok Shop setup</Link><Link href="/services/ecommerce">Amazon, eBay & eCommerce support</Link></div></section>
    <section className="space-y-5"><h2 className="font-display text-3xl font-bold">From access to a reliable operating routine</h2><ol className="grid md:grid-cols-3 gap-5 list-decimal list-inside">{["Review your store, catalog, order volume and access requirements.", "Agree the plan, monthly priorities, approval rules and business-day coverage.", "Complete scheduled tasks, escalate exceptions and report on the next priorities."].map(step => <li key={step} className="p-6 border rounded-2xl border-[#E0DDDB]">{step}</li>)}</ol><p className="text-[#585858]">You retain store ownership and control of payments, refunds and fulfillment. We work through delegated platform access and an agreed approval process.</p></section>
    <section className="rounded-3xl bg-[#161616] text-white p-8 sm:p-12 space-y-5"><h2 className="font-display text-3xl font-bold">Choose your monthly management capacity</h2><p>Essentials $249/month · Growth $499/month · Scale $899/month. Annual plans include 12 months for the price of 10.</p><Link href="/ecommerce-store-management-packages" className="inline-block rounded-full bg-[#9F8BE7] text-[#161616] px-6 py-4 font-bold">See deliverables and annual savings</Link></section>
    <section className="space-y-5"><h2 className="font-display text-3xl font-bold">Common store management questions</h2>{STORE_MANAGEMENT_FAQS.filter((_, i) => [0, 1, 4, 5].includes(i)).map(faq => <details key={faq.question} className="border border-[#E0DDDB] rounded-2xl p-5"><summary className="font-semibold cursor-pointer">{faq.question}</summary><p className="mt-3 text-[#585858] leading-relaxed">{faq.answer}</p></details>)}</section>
    <p className="text-[#585858]">Planning a new store first? Explore <Link className="underline text-[#6B46C1]" href="/ecommerce-growth-packages">eCommerce setup packages</Link>. For search visibility beyond listing upkeep, see <Link className="underline text-[#6B46C1]" href="/services/aiseo">AI SEO services</Link>.</p>
  </main>;
}
