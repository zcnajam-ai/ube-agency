import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import OfferInquiryForm from "@/components/offers/OfferInquiryForm";

const url = "https://unifiedbrandingexperts.com/dropshipping-store-offer";
export const metadata: Metadata = {
  title: "Dropshipping Store Setup Offer | Shopify Launch from $399",
  description: "Compare $399, $799 and $999 eCommerce store builds. See products, suppliers, setup scope and what is separate. Ask UBE about your store plan.",
  alternates: { canonical: url },
  openGraph: { title: "Dropshipping Store Setup Offer | UBE", description: "Compare store builds from $399 and get a written scope for products, suppliers and launch.", url, images: [{ url: "/images/offers/store-launch-offer.webp", width: 1200, height: 1200, alt: "UBE dropshipping store setup offer creative" }] },
};

const plans = [
  { name: "Launch", price: "$399", items: ["Shopify or WooCommerce storefront", "Theme, mobile layout and navigation", "Up to 50 product uploads", "Payment, shipping and basic product SEO"], note: "For a store foundation. Supplier automation and advertising are separate." },
  { name: "Growth", price: "$799", items: ["Everything in Launch", "Up to 100 product uploads", "Scoped supplier connection and stock workflow", "Analytics, product-page and email-flow setup"], note: "Supplier choice and app permissions are confirmed in the proposal." },
  { name: "Scale", price: "$999", items: ["Everything in Growth", "Up to 200 product uploads", "Marketplace readiness and eligibility review", "Advanced search and catalog planning"], note: "Marketplace seller approval and ongoing management are separate." },
];

export default function DropshippingStoreOfferPage() {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "Dropshipping store setup offer", url, provider: { "@id": "https://unifiedbrandingexperts.com/#organization" }, offers: plans.map((plan) => ({ "@type": "Offer", name: `${plan.name} store setup`, price: plan.price.slice(1), priceCurrency: "USD", url })) };
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-32 sm:px-6 md:px-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="text-sm"><Link href="/" className="underline">Home</Link> / Store setup offer</nav>
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="rounded-full border border-[#D7C9EE] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#6049B0]">Current store build offer</span>
          <h1 className="font-display text-4xl font-bold leading-tight text-[#161616] sm:text-6xl">Start the store. Then build the sales plan.</h1>
          <p className="max-w-xl text-lg leading-relaxed text-[#414141]">We build the storefront, organize the catalog and configure the agreed supplier and checkout workflows. Choose a build tier first; add active store management, AI SEO and paid marketing when you are ready to test and improve demand.</p>
          <a href="#compare" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#9F8BE7] px-6 font-bold text-[#161616] hover:bg-[#b4a3f7]">Compare the three builds <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#E0DDDB] bg-white shadow-lg">
          <div className="relative aspect-[16/10] overflow-hidden"><Image src="/images/offers/store-launch-offer.webp" alt="UBE store launch campaign creative showing storefront devices and commerce platform marks" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover object-top" />
          </div>
          <p className="p-4 text-sm text-[#414141]">This campaign visual introduces the offer. The deliverables below and your signed project scope define the work for your store.</p>
        </div>
      </section>
      <section id="compare" aria-labelledby="compare-title" className="space-y-6 scroll-mt-28">
        <h2 id="compare-title" className="font-display text-3xl font-bold">Choose the right store build</h2>
        <div className="grid gap-5 md:grid-cols-3">{plans.map((plan) => <article key={plan.name} className="rounded-[2rem] border border-[#DDD5E8] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 motion-reduce:transform-none"><h3 className="font-display text-2xl font-bold">{plan.name}</h3><p className="mt-2 text-3xl font-bold text-[#6049B0]">{plan.price}<span className="ml-2 text-sm font-normal text-[#585858]">one-time</span></p><ul className="mt-6 space-y-3">{plan.items.map((item) => <li key={item} className="flex gap-2 text-sm text-[#303030]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6049B0]" />{item}</li>)}</ul><p className="mt-6 border-t border-[#E0DDDB] pt-4 text-sm text-[#585858]">{plan.note}</p></article>)}</div>
        <p className="text-sm text-[#585858]">Platform subscriptions, paid apps, product samples, inventory and ad spend are not included. See the <Link className="font-semibold text-[#6049B0] underline" href="/ecommerce-growth-packages">full eCommerce package details</Link> for the existing package scope.</p>
      </section>
      <section className="grid gap-8 rounded-[2rem] bg-[#F2ECFA] p-6 lg:grid-cols-2 lg:p-10">
        <div className="space-y-4"><h2 className="font-display text-3xl font-bold">After launch, what moves the numbers?</h2><p className="text-[#414141]">A store build makes the catalog purchasable. Ongoing work tests product demand and conversion, manages listings and vendors, improves content and AI search visibility, and runs a channel plan across Meta, Instagram, TikTok or Google where appropriate.</p><p className="flex gap-2 text-sm text-[#414141]"><Info className="mt-0.5 h-5 w-5 shrink-0 text-[#6049B0]" />Our 60-day aim is to measure sales against the agreed investment. Sales and return depend on product fit, pricing, approved budgets, fulfillment and the signed plan. A specific outcome is only guaranteed if it is defined with conditions and remedies in your agreement.</p><Link href="/dropshipping-growth-plans" className="inline-flex items-center gap-2 font-bold text-[#6049B0] underline">Compare 90-day, six-month and annual growth plans <ArrowRight className="h-4 w-4" /></Link><br /><Link href="/services/dropshipping" className="inline-flex items-center gap-2 font-bold text-[#6049B0] underline">How our dropshipping work operates <ArrowRight className="h-4 w-4" /></Link></div>
        <OfferInquiryForm />
      </section>
    </div>
  );
}
