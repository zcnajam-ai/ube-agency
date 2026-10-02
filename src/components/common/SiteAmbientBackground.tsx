"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SiteAmbientBackground.module.css";

const PARTICLES = [
  [9, 30, 18, 0], [18, 79, 24, 1], [30, 46, 14, 2], [43, 88, 20, 0],
  [54, 12, 24, 1], [65, 69, 16, 2], [78, 86, 22, 0], [90, 32, 18, 1],
  [96, 68, 14, 2], [5, 92, 16, 1], [74, 10, 14, 0], [37, 7, 18, 2],
] as const;

const COLORS = ["#8F77DB", "#C4B2F4", "#E8ABC9"] as const;

export default function SiteAmbientBackground() {
  const violetRef = useRef<HTMLDivElement>(null);
  const blushRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Array<HTMLSpanElement | null>>([]);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [pulse, setPulse] = useState<{ x: number; y: number; id: number } | null>(null);

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

    const onPointerDown = (event: PointerEvent) => {
      if (motion.matches || (event.target as Element).closest("a, button, input, textarea, select, [role='button']")) return;
      const id = Date.now();
      setPulse({ x: event.clientX, y: event.clientY, id });
      window.setTimeout(() => setPulse((current) => current?.id === id ? null : current), 800);
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
      particlesRef.current.forEach((particle, index) => {
        if (!particle) return;
        const depth = 0.4 + (index % 3) * 0.22;
        const driftX = Math.sin(time / (3200 + index * 150) + index) * 5;
        const driftY = Math.cos(time / (3900 + index * 120) + index) * 7;
        const scrollY = Math.sin(scroll / (490 + index * 45) + index) * (12 + index % 4 * 5);
        particle.style.transform = `translate3d(${pointerX * depth + driftX}px, ${pointerY * depth + driftY + scrollY}px, 0)`;
      });
    };

    const reset = () => {
      violetRef.current?.style.removeProperty("transform");
      blushRef.current?.style.removeProperty("transform");
      particlesRef.current.forEach((particle) => particle?.style.removeProperty("transform"));
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      if (motion.matches) reset();
      else if (!document.hidden) frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div className={styles.ambient} aria-hidden="true">
      <div ref={violetRef} className={styles.violet} />
      <div ref={blushRef} className={styles.blush} />
      <div className={styles.particles}>
        {PARTICLES.map(([x, y, size, color], index) => (
          <span
            key={index}
            ref={(node) => { particlesRef.current[index] = node; }}
            className={styles.particle}
            style={{
              left: `${x}%`, top: `${y}%`, width: size, height: size,
              background: `radial-gradient(circle at 35% 30%, #fff 0%, ${COLORS[color]} 55%, transparent 100%)`,
            }}
          />
        ))}
      </div>
      {pulse && <span key={pulse.id} className={styles.pulse} style={{ left: pulse.x, top: pulse.y }} />}
    </div>
  );
}
