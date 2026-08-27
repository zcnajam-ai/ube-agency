"use client";

import React from "react";
import { RefreshCw, PackageCheck, Send, BarChart3, Layers, Truck } from "lucide-react";

export default function EcommerceAutomationVisual() {
  const steps = [
    { title: "Product Sync", desc: "Catalog & Pricing", icon: <RefreshCw className="w-4 h-4 text-emerald-600" /> },
    { title: "Inventory", desc: "Multi-Location Stock", icon: <Layers className="w-4 h-4 text-[#9F8BE7]" /> },
    { title: "Order Flow", desc: "Automated Routing", icon: <PackageCheck className="w-4 h-4 text-blue-600" /> },
    { title: "Fulfillment", desc: "3PL & Supplier API", icon: <Truck className="w-4 h-4 text-amber-600" /> },
    { title: "Customer Alert", desc: "Tracking Email/SMS", icon: <Send className="w-4 h-4 text-rose-500" /> },
    { title: "Analytics", desc: "Revenue & Margin", icon: <BarChart3 className="w-4 h-4 text-purple-600" /> },
  ];

  return (
    <div className="w-full rounded-3xl bg-[#161616] text-white p-6 sm:p-8 space-y-6 shadow-xl border border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="text-[11px] font-mono-num font-bold text-[#DDF160] uppercase tracking-wider block">
            AUTOMATED ECOMMERCE WORKFLOW ENGINE
          </span>
          <h3 className="font-display text-xl font-bold text-white">
            Operational Order &amp; Inventory Synchronization Pipeline
          </h3>
        </div>
        <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono-num font-bold text-[#DDF160]">
          Zero Manual Bottlenecks
        </div>
      </div>

      {/* Workflow Step Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {steps.map((st, i) => (
          <div
            key={st.title}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#9F8BE7]/50 flex flex-col justify-between space-y-3 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono-num text-[#9F8BE7] font-bold">
                0{i + 1}
              </span>
              <div className="p-1.5 rounded-lg bg-white/10">{st.icon}</div>
            </div>
            <div>
              <h4 className="font-display text-xs font-bold text-white group-hover:text-[#DDF160] transition-colors">
                {st.title}
              </h4>
              <p className="text-[10px] font-mono-num text-[#ACACAC]">{st.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
