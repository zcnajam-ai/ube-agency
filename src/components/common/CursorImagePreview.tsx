"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface CursorImagePreviewProps {
  activeImage: string | null;
  activeTitle?: string;
  isVisible: boolean;
}

export default function CursorImagePreview({
  activeImage,
  activeTitle = "",
  isVisible,
}: CursorImagePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEnabledRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = window.innerWidth < 1024;

    if (prefersReducedMotion || isTouch || isMobile) {
      isEnabledRef.current = false;
      return;
    }

    isEnabledRef.current = true;
    const el = containerRef.current;
    if (!el) return;

    // Follow pointer with smooth lag
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power2.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power2.out" });
    const rTo = gsap.quickTo(el, "rotation", { duration: 0.6, ease: "power2.out" });

    let lastX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabledRef.current) return;

      const deltaX = e.clientX - lastX;
      lastX = e.clientX;

      // Position offset near cursor
      xTo(e.clientX + 30);
      yTo(e.clientY - 120);

      // Subtle dynamic rotation based on horizontal movement
      const rot = Math.max(-8, Math.min(8, deltaX * 0.4));
      rTo(rot);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!activeImage) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-40 hidden lg:block select-none will-change-transform transition-opacity duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <div className="relative w-64 h-40 rounded-2xl overflow-hidden border-2 border-white shadow-[0_20px_40px_rgba(22,22,22,0.18)] bg-white">
        <Image
          src={activeImage}
          alt={activeTitle}
          fill
          sizes="260px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {activeTitle && (
          <span className="absolute bottom-2.5 left-3 text-[11px] font-mono-num font-bold text-white uppercase tracking-wider">
            {activeTitle}
          </span>
        )}
      </div>
    </div>
  );
}
