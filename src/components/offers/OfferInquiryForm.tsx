"use client";

import { useState, type FormEvent } from "react";
import { trackLeadSubmit } from "@/lib/analytics";

export default function OfferInquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "sent") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: fields.get("name"), email: fields.get("email"), phone: fields.get("phone"),
          service: `Dropshipping Store Offer — ${fields.get("package")}`,
          description: String(fields.get("goal") || ""), honeypot: fields.get("website"),
          sourcePage: "/dropshipping-store-offer",
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Please try again.");
      setStatus("sent");
      setMessage("Your offer inquiry was received. Check your inbox for our confirmation email.");
      trackLeadSubmit({ service: "Dropshipping Store Offer", source_page: "/dropshipping-store-offer" });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-[2rem] border border-[#D5CBEB] bg-white p-5 shadow-lg sm:p-8" aria-labelledby="offer-form-title">
      <h2 id="offer-form-title" className="font-display text-2xl font-bold">Ask about the store offer</h2>
      <p className="text-sm text-[#585858]">Tell us what you want to sell. We will confirm the scope and the next step by email.</p>
      <div className="hidden" aria-hidden="true"><label htmlFor="offer-website">Website</label><input id="offer-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-semibold" htmlFor="offer-name">Name <input id="offer-name" name="name" required minLength={2} maxLength={100} autoComplete="name" className="min-h-12 rounded-xl border border-[#C9C5CC] px-3 font-normal" /></label>
        <label className="grid gap-1 text-sm font-semibold" htmlFor="offer-email">Email <input id="offer-email" name="email" type="email" required maxLength={120} autoComplete="email" className="min-h-12 rounded-xl border border-[#C9C5CC] px-3 font-normal" /></label>
      </div>
      <label className="grid gap-1 text-sm font-semibold" htmlFor="offer-phone">Phone (optional) <input id="offer-phone" name="phone" type="tel" maxLength={30} autoComplete="tel" className="min-h-12 rounded-xl border border-[#C9C5CC] px-3 font-normal" /></label>
      <label className="grid gap-1 text-sm font-semibold" htmlFor="offer-package">Interested package <select id="offer-package" name="package" className="min-h-12 rounded-xl border border-[#C9C5CC] px-3 font-normal"><option>Launch $399</option><option>Growth $799</option><option>Scale $999</option><option>Help me choose</option></select></label>
      <label className="grid gap-1 text-sm font-semibold" htmlFor="offer-goal">What products or suppliers do you have in mind? <textarea id="offer-goal" name="goal" maxLength={2000} rows={3} className="rounded-xl border border-[#C9C5CC] px-3 py-2 font-normal" /></label>
      <button type="submit" disabled={status === "sending" || status === "sent"} className="min-h-12 rounded-full bg-[#9F8BE7] px-6 font-display font-bold text-[#161616] hover:bg-[#b4a3f7] disabled:opacity-60">{status === "sending" ? "Sending…" : status === "sent" ? "Inquiry sent" : "Request offer details"}</button>
      <p role="status" aria-live="polite" className={`text-sm ${status === "error" ? "text-red-700" : "text-[#414141]"}`}>{message}</p>
      <p className="text-xs text-[#585858]">We use your details to answer this inquiry. See our <a href="/privacy-policy" className="underline">Privacy Policy</a>.</p>
    </form>
  );
}
