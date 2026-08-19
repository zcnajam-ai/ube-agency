"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PointerTarget {
  ref: React.RefObject<HTMLElement | null>;
  depth?: number; // e.g. 8, 15, 24, -12
  rotate?: boolean; // whether to apply subtle rotation
}

export function usePointerParallax(
  containerRef: React.RefObject<HTMLElement | null>,
  targets: PointerTarget[]
) {
  const isEnabledRef = useRef(false);

  useEffect(() => {
    // Check reduced motion & touch devices
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isMobileViewport = window.innerWidth < 768;

    if (prefersReducedMotion || isTouch || isMobileViewport) {
      isEnabledRef.current = false;
      return;
    }

    isEnabledRef.current = true;
    const container = containerRef.current || document.body;

    // Create gsap quickTo functions for each target
    const quickSetters = targets.map((t) => {
      const el = t.ref.current;
      if (!el) return null;

      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power2.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power2.out" });
      const rTo = t.rotate
        ? gsap.quickTo(el, "rotation", { duration: 0.8, ease: "power2.out" })
        : null;

      return { xTo, yTo, rTo, depth: t.depth ?? 15, rotate: t.rotate };
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabledRef.current) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);

      quickSetters.forEach((setter) => {
        if (!setter) return;
        const targetX = normX * setter.depth;
        const targetY = normY * setter.depth;

        setter.xTo(targetX);
        setter.yTo(targetY);

        if (setter.rTo) {
          setter.rTo(normX * 4);
        }
      });
    };

    const handleMouseLeave = () => {
      if (!isEnabledRef.current) return;

      quickSetters.forEach((setter) => {
        if (!setter) return;
        setter.xTo(0);
        setter.yTo(0);
        if (setter.rTo) setter.rTo(0);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, targets]);
}
