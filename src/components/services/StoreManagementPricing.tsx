"use client";

import { useState } from "react";
import { STORE_MANAGEMENT_PLANS } from "@/data/store-management";
import ServiceProjectModalTrigger from "./ServiceProjectModalTrigger";

export default function StoreManagementPricing() {
  const [annual, setAnnual] = useState(false);
  const money = (value: number) => value.toLocaleString("en-US");
  return <section aria-label="Store management pricing" className="space-y-8">
    <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Billing period">
      {[false, true].map((yearly) => <button key={String(yearly)} type="button" aria-pressed={annual === yearly} onClick={() => setAnnual(yearly)} className={`rounded-full border px-6 py-3 font-semibold cursor-pointer ${annual === yearly ? "bg-[#161616] text-white" : "bg-white text-[#161616] border-[#E0DDDB]"}`}>{yearly ? "Annual · save 16.7%" : "Monthly"}</button>)}
    </div>
    <div className="grid gap-6 lg:grid-cols-3" aria-live="polite">
      {STORE_MANAGEMENT_PLANS.map((plan) => <article key={plan.name} className={`rounded-3xl border bg-white p-7 flex flex-col gap-5 ${plan.name === "Growth" ? "border-[#9F8BE7] border-2" : "border-[#E0DDDB]"}`}>
        <h2 className="font-display text-2xl font-bold">{plan.name}</h2>
        <p className="text-sm text-[#585858]">{plan.audience}</p>
        <div><p className="text-4xl font-bold">${money(annual ? plan.annual : plan.monthly)}<span className="text-base font-normal">/{annual ? "year" : "month"}</span></p>
          <p className="mt-2 text-sm text-[#585858]">{annual ? `$${(plan.annual / 12).toFixed(2)}/month equivalent · billed annually upfront` : "Billed monthly"}</p>
          {annual && <p className="mt-1 text-sm font-semibold text-emerald-700">Save ${money(plan.monthly * 12 - plan.annual)} per year</p>}
        </div>
        <p className="rounded-xl bg-[#FAF7F6] p-3 text-sm font-semibold">{plan.scope}</p>
        <ul className="space-y-3 text-sm text-[#585858] list-disc pl-5 flex-1">{plan.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
        <ServiceProjectModalTrigger label={`Enquire about ${plan.name}`} service={`eCommerce Store Management — ${plan.name} — ${annual ? "Annual" : "Monthly"}`} variant="primary" className="rounded-full w-full" />
      </article>)}
    </div>
    <p className="text-center text-sm text-[#585858]">All prices in USD, excluding applicable taxes and third-party costs. Annual billing changes the payment schedule; monthly capacity stays the same. Confirm scope before payment.</p>
  </section>;
}
