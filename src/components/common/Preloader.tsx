"use client";

import React, { useEffect, useState } from "react";
import { COMPANY_INFO } from "@/data/company";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExited, setIsExited] = useState(false);

  useEffect(() => {
    const duration = 1200; // ms
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setIsLoaded(true);
          setTimeout(() => setIsExited(true), 600);
          return 100;
        }
        return Math.floor(next);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (isExited) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14 bg-[#08080a] text-white transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isLoaded ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#9F8BE7] flex items-center justify-center font-display font-black text-black text-sm">
            U
          </div>
          <span className="font-display font-semibold tracking-wider text-xs md:text-sm uppercase text-slate-300">
            {COMPANY_INFO.name}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono-num text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>INITIALIZING ECOSYSTEM</span>
        </div>
      </div>

      {/* Center Display */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="relative font-display text-8xl md:text-[11rem] font-extrabold tracking-tighter leading-none text-white select-none">
          <span className="font-mono-num">{count}</span>
          <span className="text-[#9F8BE7] text-4xl md:text-6xl font-light ml-1">%</span>
        </div>
        <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.3em] text-slate-400 font-mono-num">
          Strategy • Commerce • Code • AISEO
        </p>
      </div>

      {/* Bottom Progress Line */}
      <div className="w-full">
        <div className="h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-to-r from-[#9F8BE7] via-[#38BDF8] to-[#10B981] transition-all duration-75"
            style={{ width: `${count}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-3 text-[11px] font-mono-num text-slate-500">
          <span>HIGH-CONVERSION DIGITAL AGENCY</span>
          <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</span>
        </div>
      </div>
    </div>
  );
}
