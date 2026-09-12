"use client";

import { useEffect, useRef } from "react";

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

    targets.forEach((t) => {
      if (t.ref.current) {
        t.ref.current.style.transition = "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)";
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabledRef.current) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);

      targets.forEach((t) => {
        const el = t.ref.current;
        if (!el) return;
        const depth = t.depth ?? 15;
        const targetX = normX * depth;
        const targetY = normY * depth;
        const rot = t.rotate ? normX * 4 : 0;
        el.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) rotate(${rot}deg)`;
      });
    };

    const handleMouseLeave = () => {
      if (!isEnabledRef.current) return;

      targets.forEach((t) => {
        const el = t.ref.current;
        if (el) {
          el.style.transform = "translate3d(0, 0, 0) rotate(0deg)";
        }
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
