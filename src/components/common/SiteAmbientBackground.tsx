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

    const update = () => {
      frame = 0;
      if (motion.matches || document.hidden) return;
      const { x, y } = pointerRef.current;
      const wave = Math.sin(window.scrollY / 700) * 24;
      if (violetRef.current) violetRef.current.style.transform = `translate3d(${x * 0.45}px, ${wave + y * 0.5}px, 0)`;
      if (blushRef.current) blushRef.current.style.transform = `translate3d(${-x * 0.35}px, ${-wave * 0.75 - y * 0.4}px, 0)`;
    };

    const schedule = () => {
      if (!frame && !motion.matches && !document.hidden) frame = requestAnimationFrame(update);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 28,
        y: (event.clientY / window.innerHeight - 0.5) * 22,
      };
      schedule();
    };

    const reset = () => {
      violetRef.current?.style.removeProperty("transform");
      blushRef.current?.style.removeProperty("transform");
    };

    const sync = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (motion.matches) reset();
      else schedule();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", schedule);
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
