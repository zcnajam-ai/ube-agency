"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function SectionProgressNavigator() {
  const [position, setPosition] = useState({ index: 0, count: 0, progress: 0 });

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > div > section")).filter((section) => section.offsetHeight > 100);
    if (sections.length < 2) return;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const line = window.scrollY + window.innerHeight * 0.4;
        const index = Math.max(0, sections.findLastIndex((section) => section.getBoundingClientRect().top + window.scrollY <= line));
        const pageHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        setPosition({ index, count: sections.length, progress: Math.min(100, Math.round(window.scrollY / pageHeight * 100)) });
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  if (position.count < 2) return null;
  const next = () => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > div > section")).filter((section) => section.offsetHeight > 100);
    sections[(position.index + 1) % sections.length]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return (
    <button type="button" onClick={next} aria-label={`Section ${position.index + 1} of ${position.count}. Go to next section.`} className="fixed bottom-5 left-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#161616] text-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B4BA7] sm:bottom-7 sm:left-7" style={{ backgroundImage: `conic-gradient(#9F8BE7 ${position.progress}%, #424047 ${position.progress}%)` }}>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#161616]"><ArrowDown className="h-5 w-5" aria-hidden="true" /></span>
      <span className="sr-only">Scroll progress {position.progress}%</span>
    </button>
  );
}
