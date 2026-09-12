import type { Metadata } from "next";
import Link from "next/link";
import StoreManagementPricing from "@/components/services/StoreManagementPricing";
import { STORE_MANAGEMENT_PLANS, STORE_MANAGEMENT_FAQS } from "@/data/store-management";

const base = "https://unifiedbrandingexperts.com";
const url = `${base}/ecommerce-store-management-packages`;
export const metadata: Metadata = {
  title: "eCommerce Store Management Packages from $249/mo",
  description: "Compare Essentials, Growth and Scale store management plans. Product updates, inventory checks and order monitoring from $249/month. Save 16.7% with annual billing.",
  alternates: { canonical: url },
  openGraph: { title: "eCommerce Store Management Packages & Pricing", description: "Three plans from $249/month for ongoing store operations. Annual billing saves two months’ fees.", url, images: [`${base}/images/editorial/shopify-storefront-development.webp`] },
};

export default function StoreManagementPackagesPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: base }, { "@type": "ListItem", position: 2, name: "Packages", item: `${base}/packages` }, { "@type": "ListItem", position: 3, name: "Store Management Packages", item: url }] },
    { "@type": "Service", name: "eCommerce Store Management", url: `${base}/services/ecommerce-store-management`, provider: { "@type": "Organization", name: "Unified Branding Experts", url: base }, offers: STORE_MANAGEMENT_PLANS.flatMap(plan => [
      { "@type": "Offer", name: `${plan.name} — monthly billing`, price: plan.monthly, priceCurrency: "USD", url, description: `${plan.scope}. Billed monthly.`, priceSpecification: { "@type": "UnitPriceSpecification", price: plan.monthly, priceCurrency: "USD", unitText: "month" } },
      { "@type": "Offer", name: `${plan.name} — annual billing`, price: plan.annual, priceCurrency: "USD", url, description: "12 months paid upfront; monthly deliverable limits apply.", priceSpecification: { "@type": "UnitPriceSpecification", price: plan.annual, priceCurrency: "USD", unitText: "year" } },
    ]) },
  ] };
  return <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-14 text-[#161616]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <nav aria-label="Breadcrumb" className="text-sm text-[#585858] flex flex-wrap gap-2"><Link href="/">Home</Link><span>/</span><Link href="/packages">Packages</Link><span>/ Store Management</span></nav>
    <header className="max-w-4xl space-y-5">
      <p className="text-[#6B46C1] font-bold uppercase text-sm tracking-widest">Ongoing commerce operations</p>
      <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">eCommerce Store Management Packages</h1>
      <p className="text-lg text-[#585858]">Keep product information current, catch order exceptions and give your store a consistent maintenance routine. Choose the capacity that fits your catalog, sales channels and monthly workload.</p>
      <p className="text-[#585858]">Monthly plans start at <strong>$249</strong>. Pay annually for 12 months at the cost of 10. Need help deciding what to delegate? <Link href="/services/ecommerce-store-management" className="underline text-[#6B46C1]">See how our store management service works.</Link></p>
    </header>
    <StoreManagementPricing />
    <section className="rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] p-8 space-y-4">
      <h2 className="font-display text-3xl font-bold">A clear monthly scope, agreed before we start</h2>
      <p className="text-[#585858]">Bring an existing store, approved product information, usable images, current pricing and access to your platform. We confirm your catalog size, order volume and channel count, then set priorities in a shared task list. If a request exceeds your allowance, we quote it for approval before doing extra work.</p>
      <p className="text-[#585858]">These are operations retainers. New store builds, buyer support, physical fulfillment, paid advertising, custom development and third-party subscriptions are separate. Each plan’s checks follow its stated schedule; they are not continuous monitoring.</p>
    </section>
    <section className="space-y-5"><h2 className="font-display text-3xl font-bold">Store management pricing questions</h2>
      {STORE_MANAGEMENT_FAQS.map(faq => <details key={faq.question} className="rounded-2xl border border-[#E0DDDB] p-5 bg-white"><summary className="font-semibold cursor-pointer">{faq.question}</summary><p className="mt-4 text-[#585858] leading-relaxed">{faq.answer}</p></details>)}
    </section>
    <section className="space-y-4"><h2 className="font-display text-2xl font-bold">Build, manage and improve your store</h2><div className="flex flex-wrap gap-5 text-[#6B46C1] underline underline-offset-4"><Link href="/services/ecommerce-store-management">Store management service</Link><Link href="/ecommerce-growth-packages">Store setup & growth packages</Link><Link href="/services/shopify-development">Shopify development</Link><Link href="/services/ecommerce">eCommerce & marketplace services</Link><Link href="/services/aiseo">AI SEO services</Link></div></section>
  </main>;
}
