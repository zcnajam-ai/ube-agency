"use client";

import React, { useRef, useEffect } from "react";
import { TrendingUp, Zap } from "lucide-react";
import { gsap } from "gsap";
import { usePointerParallax } from "@/hooks/usePointerParallax";

export default function HeroDimensionalScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const objGlassOrbRef = useRef<HTMLDivElement>(null);
  const objPurplePillRef = useRef<HTMLDivElement>(null);
  const objChromeRingRef = useRef<HTMLDivElement>(null);
  const objBadgeRef = useRef<HTMLDivElement>(null);
  const objUbeMarkRef = useRef<HTMLDivElement>(null);

  // 1. Desktop Pointer Parallax Hook
  usePointerParallax(sceneRef, [
    { ref: objGlassOrbRef, depth: 18, rotate: true },
    { ref: objPurplePillRef, depth: -14, rotate: true },
    { ref: objChromeRingRef, depth: 26, rotate: true },
    { ref: objBadgeRef, depth: 10, rotate: false },
    { ref: objUbeMarkRef, depth: -20, rotate: true },
  ]);

  // 2. Entrance & Scroll Exit Orchestration
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        objGlassOrbRef.current,
        { scale: 0.4, opacity: 0, y: 40, rotation: -20 },
        { scale: 1, opacity: 1, y: 0, rotation: 0, duration: 1.2 },
        0.1
      )
        .fromTo(
          objPurplePillRef.current,
          { scale: 0.5, opacity: 0, x: 30, rotation: 15 },
          { scale: 1, opacity: 1, x: 0, rotation: 0, duration: 1.1 },
          0.2
        )
        .fromTo(
          objChromeRingRef.current,
          { scale: 0.3, opacity: 0, rotation: -45 },
          { scale: 1, opacity: 1, rotation: 0, duration: 1.3 },
          0.15
        )
        .fromTo(
          objBadgeRef.current,
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1.0 },
          0.3
        )
        .fromTo(
          objUbeMarkRef.current,
          { scale: 0.6, opacity: 0, rotation: 30 },
          { scale: 1, opacity: 0.9, rotation: 0, duration: 1.2 },
          0.25
        );
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Translucent Glass Sphere with Specular Refraction (Top Right) */}
      <div
        ref={objGlassOrbRef}
        className="absolute top-12 sm:top-20 right-4 sm:right-16 md:right-32 w-28 sm:w-44 md:w-56 h-28 sm:h-44 md:h-56 rounded-full shadow-[0_20px_50px_rgba(159,139,231,0.25)] border border-white/80 backdrop-blur-md will-change-transform opacity-0"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 30%, rgba(159,139,231,0.2) 65%, rgba(221,241,96,0.12) 100%)",
        }}
      >
        <div className="absolute top-4 left-6 w-8 sm:w-14 h-4 sm:h-7 rounded-full bg-white/70 blur-xs rotate-[-30deg]" />
      </div>

      {/* 2. Dimensional Purple Capsule (Middle Right) */}
      <div
        ref={objPurplePillRef}
        className="hidden sm:flex absolute top-1/2 right-8 md:right-20 -translate-y-1/2 items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#9F8BE7] to-[#8A72E0] text-[#161616] border border-white/60 shadow-[0_12px_30px_rgba(159,139,231,0.4)] will-change-transform opacity-0 rotate-[-6deg]"
      >
        <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center text-[#9F8BE7] shadow-xs">
          <Zap className="w-3.5 h-3.5 fill-[#9F8BE7]" />
        </div>
        <div className="text-left font-display">
          <span className="block text-[10px] font-mono-num font-bold text-white/90 uppercase tracking-wider">
            ROAS ENGINE
          </span>
          <span className="block text-xs font-bold text-white leading-tight">
            +142% Conversion
          </span>
        </div>
      </div>

      {/* 3. Chrome / Metallic Geometric Torus Ring (Bottom Right) */}
      <div
        ref={objChromeRingRef}
        className="absolute bottom-8 sm:bottom-16 right-12 sm:right-28 md:right-48 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 rounded-full border-[10px] sm:border-[16px] md:border-[20px] border-transparent shadow-[0_15px_40px_rgba(22,22,22,0.08)] will-change-transform opacity-0"
        style={{
          borderImage:
            "conic-gradient(from 45deg, #FFFFFF, #E0DDDB, #9F8BE7, #FFFFFF, #DDF160, #C5C0BE, #FFFFFF) 1",
          borderRadius: "50%",
          transform: "rotateX(55deg) rotateY(-20deg)",
        }}
      />

      {/* 4. Floating Live Growth Badge (Bottom Left) */}
      <div
        ref={objBadgeRef}
        className="hidden md:flex absolute bottom-12 left-16 lg:left-28 items-center gap-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] shadow-[0_10px_25px_rgba(22,22,22,0.06)] will-change-transform opacity-0"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div className="text-left font-mono-num text-xs">
          <span className="text-[10px] text-[#585858] block uppercase">Live Verified Track</span>
          <span className="font-bold text-[#161616]">$120M+ Generated</span>
        </div>
      </div>

      {/* 5. Subtle Dimensional UBE Monogram Watermark (Center / Top Left) */}
      <div
        ref={objUbeMarkRef}
        className="absolute top-16 sm:top-24 left-8 sm:left-20 w-16 sm:w-24 h-16 sm:h-24 opacity-0 will-change-transform"
      >
        <div className="w-full h-full rounded-2xl border-2 border-[#9F8BE7]/30 bg-white/40 backdrop-blur-xs flex items-center justify-center shadow-xs rotate-[12deg]">
          <span className="font-display font-black text-xl sm:text-2xl text-[#9F8BE7]/60">
            UBE
          </span>
        </div>
      </div>
    </div>
  );
}
