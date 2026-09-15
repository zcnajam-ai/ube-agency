"use client";

import React, { useEffect, createContext, useContext, useState, useCallback, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { trackStartProjectClick } from "@/lib/analytics";

interface ScrollContextType {
  getLenis: () => Lenis | null;
  scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void;
  openProjectModal: (service?: string) => void;
  closeProjectModal: () => void;
  isProjectModalOpen: boolean;
  selectedServiceForModal: string;
  setSelectedServiceForModal: (service: string) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  getLenis: () => null,
  scrollTo: () => {},
  openProjectModal: () => {},
  closeProjectModal: () => {},
  isProjectModalOpen: false,
  selectedServiceForModal: "",
  setSelectedServiceForModal: () => {},
});

export const useScroll = () => useContext(ScrollContext);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState("");

  // Keep wheel scrolling polished without taking over native touch scrolling.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 0.72,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      overscroll: true,
      anchors: { duration: 0.65, offset: -16 },
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Add a single, GPU-friendly 0.5s reveal to each top-level page section.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observed = new WeakSet<Element>();

    const revealImmediately = (element: Element) => {
      element.classList.add("scroll-reveal", "scroll-reveal--visible");
    };

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      document.querySelectorAll("main section").forEach(revealImmediately);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
    );

    const registerSections = () => {
      document.querySelectorAll("main section").forEach((section) => {
        // Nested sections inherit their parent's motion to prevent compounded scaling.
        if (section.parentElement?.closest("section") || observed.has(section)) return;
        observed.add(section);
        section.classList.add("scroll-reveal");
        observer.observe(section);
      });
    };

    registerSections();

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  // Lock background body scroll cleanly when modal is open without breaking modal's native scroll
  useEffect(() => {
    if (isProjectModalOpen) {
      lenisRef.current?.stop();
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      lenisRef.current?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isProjectModalOpen]);

  const getLenis = useCallback(() => lenisRef.current, []);

  const scrollTo = useCallback((target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(target, {
        offset: options?.offset ?? 0,
        duration: options?.duration ?? 0.65,
      });
      return;
    }

    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else if (typeof target === "string") {
      const el = document.querySelector(target);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY + (options?.offset ?? 0);
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else if (target instanceof HTMLElement) {
      const top = target.getBoundingClientRect().top + window.scrollY + (options?.offset ?? 0);
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const openProjectModal = useCallback((service?: string) => {
    if (service) setSelectedServiceForModal(service);
    trackStartProjectClick(service || "General Project Inquiry");
    setIsProjectModalOpen(true);
  }, []);

  const closeProjectModal = useCallback(() => {
    setIsProjectModalOpen(false);
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        getLenis,
        scrollTo,
        openProjectModal,
        closeProjectModal,
        isProjectModalOpen,
        selectedServiceForModal,
        setSelectedServiceForModal,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
