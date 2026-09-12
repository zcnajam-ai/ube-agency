import Link from "next/link";

export default function StoreManagementLink() {
  return <section className="rounded-3xl border border-[#E0DDDB] bg-[#FAF7F6] p-8 sm:p-10 space-y-4">
    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">Keep your store running after launch</h2>
    <p className="text-[#585858] max-w-3xl">Get ongoing product updates, inventory checks, order monitoring and promotion support. Store management starts at $249/month, with discounted annual billing.</p>
    <div className="flex flex-wrap gap-5 font-semibold text-[#6B46C1]">
      <Link href="/services/ecommerce-store-management" className="underline underline-offset-4">Explore store management services</Link>
      <Link href="/ecommerce-store-management-packages" className="underline underline-offset-4">Compare management packages</Link>
    </div>
  </section>;
}
