"use client";

import { useEffect, useRef } from "react";
import styles from "./SiteAmbientBackground.module.css";

export default function SiteAmbientBackground() {
  const violetRef = useRef<HTMLDivElement>(null);
  const blushRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = 0;
    let pointerX = 0;
    let pointerY = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 28,
        y: (event.clientY / window.innerHeight - 0.5) * 22,
      };
    };

    const animate = (time: number) => {
      frame = requestAnimationFrame(animate);
      if (time - last < 33) return;
      last = time;
      pointerX += (pointerRef.current.x - pointerX) * 0.12;
      pointerY += (pointerRef.current.y - pointerY) * 0.12;
      const scroll = window.scrollY;
      const wave = Math.sin(scroll / 700) * 24;
      if (violetRef.current) violetRef.current.style.transform = `translate3d(${pointerX * 0.45}px, ${wave + pointerY * 0.5}px, 0)`;
      if (blushRef.current) blushRef.current.style.transform = `translate3d(${-pointerX * 0.35}px, ${-wave * 0.75 - pointerY * 0.4}px, 0)`;
    };

    const reset = () => {
      violetRef.current?.style.removeProperty("transform");
      blushRef.current?.style.removeProperty("transform");
    };

    const sync = () => {
      cancelAnimationFrame(frame);
      if (motion.matches) reset();
      else if (!document.hidden) frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    sync();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div className={styles.ambient} aria-hidden="true">
      <div ref={violetRef} className={styles.violet} />
      <div ref={blushRef} className={styles.blush} />
    </div>
  );
}
