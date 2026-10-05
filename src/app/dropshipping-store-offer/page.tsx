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
  { name: "Starter Package", tagline: "Best for new sellers", price: "$399", items: ["Complete store setup", "Theme customization", "Up to 50 products uploaded", "Payment gateway setup", "Shipping setup", "Mobile responsive design", "Basic product SEO and optimization", "Shopify, Amazon, Etsy or eBay setup"], note: "Choose one store or eligible marketplace for the written scope. Seller approval and platform fees are separate." },
  { name: "Growth Package", tagline: "Best for starting a dropshipping business", price: "$799", items: ["Everything in Starter", "Up to 100 products uploaded", "Complete dropshipping setup", "Supplier integration such as CJ Dropshipping or Printify", "Basic store automation", "Reviews, upsell and other essential app integrations", "Meta Pixel and Google Ads tracking setup", "Store structured for future marketing and scaling"], note: "Supplier access, app fees and advertising spend are scoped separately." },
  { name: "Premium Package", tagline: "Best for a more complete automated ecommerce business", price: "$999", items: ["Everything in Growth", "Up to 200 products uploaded", "Advanced dropshipping setup", "Supplier, order and fulfillment automation", "Meta Pixel and analytics setup", "Upsell and cross sell setup", "Marketplace integration with Amazon, eBay or Etsy", "Priority support", "Strategy session for growth and scaling"], note: "Marketplace integration depends on seller approval, product eligibility and supported connectors." },
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
          <Image src="/images/offers/store-launch-offer.webp" alt="Unified Branding Experts dropshipping store offer showing Starter $399, Growth $799 and Premium $999 packages" width={1200} height={1200} priority sizes="(max-width: 1024px) 100vw, 48vw" className="block h-auto w-full" />
        </div>
      </section>
      <section id="compare" aria-labelledby="compare-title" className="space-y-6 scroll-mt-28">
        <h2 id="compare-title" className="font-display text-3xl font-bold">Compare the complete offers</h2>
        <div className="grid gap-5 md:grid-cols-3">{plans.map((plan) => <article key={plan.name} className="rounded-[2rem] border border-[#DDD5E8] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 motion-reduce:transform-none"><h3 className="font-display text-2xl font-bold">{plan.name}</h3><p className="mt-1 text-sm font-medium text-[#585858]">{plan.tagline}</p><p className="mt-4 text-3xl font-bold text-[#6049B0]">{plan.price}<span className="ml-2 text-sm font-normal text-[#585858]">one-time</span></p><ul className="mt-6 space-y-3">{plan.items.map((item) => <li key={item} className="flex gap-2 text-sm text-[#303030]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6049B0]" />{item}</li>)}</ul><p className="mt-6 border-t border-[#E0DDDB] pt-4 text-sm text-[#585858]">{plan.note}</p></article>)}</div>
        <p className="text-sm text-[#585858]">These are the campaign offer tiers shown above. Platform subscriptions, paid apps, product samples, inventory and ad spend are separate. Seller accounts and marketplace listings depend on platform approval and product eligibility.</p>
      </section>
      <section className="grid gap-8 rounded-[2rem] bg-[#F2ECFA] p-6 lg:grid-cols-2 lg:p-10">
        <div className="space-y-4"><h2 className="font-display text-3xl font-bold">After launch, what moves the numbers?</h2><p className="text-[#414141]">A store build makes the catalog purchasable. Ongoing work tests product demand and conversion, manages listings and vendors, improves content and AI search visibility, and runs a channel plan across Meta, Instagram, TikTok or Google where appropriate.</p><p className="flex gap-2 text-sm text-[#414141]"><Info className="mt-0.5 h-5 w-5 shrink-0 text-[#6049B0]" />Our 60-day aim is to measure sales against the agreed investment. Sales and return depend on product fit, pricing, approved budgets, fulfillment and the signed plan. A specific outcome is only guaranteed if it is defined with conditions and remedies in your agreement.</p><Link href="/dropshipping-growth-plans" className="inline-flex items-center gap-2 font-bold text-[#6049B0] underline">Compare 90-day, six-month and annual growth plans <ArrowRight className="h-4 w-4" /></Link><br /><Link href="/services/dropshipping" className="inline-flex items-center gap-2 font-bold text-[#6049B0] underline">How our dropshipping work operates <ArrowRight className="h-4 w-4" /></Link></div>
        <OfferInquiryForm />
      </section>
    </div>
  );
}
