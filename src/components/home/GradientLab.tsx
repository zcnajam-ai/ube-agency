"use client";

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import styles from "./GradientLab.module.css";

const THEMES = [
  {
    name: "Violet & Blush",
    note: "Cream · violet · soft rose",
    background:
      "radial-gradient(ellipse 70% 85% at 82% 22%, #DED2FF 0%, transparent 70%), radial-gradient(ellipse 70% 60% at 10% 72%, #F7DFE9 0%, transparent 70%), #FAF7F6",
    colors: ["#8F77DB", "#C4B2F4", "#E8ABC9"],
  },
  {
    name: "Violet & Sky",
    note: "Pearl · violet · cool blue",
    background:
      "radial-gradient(ellipse 70% 85% at 82% 22%, #DCD0FF 0%, transparent 70%), radial-gradient(ellipse 70% 60% at 10% 72%, #DFEDFC 0%, transparent 70%), #FAF8FA",
    colors: ["#8F77DB", "#C4B2F4", "#9FC9E8"],
  },
  {
    name: "Violet & Mint",
    note: "Cream · violet · soft mint",
    background:
      "radial-gradient(ellipse 70% 85% at 82% 22%, #DED2FF 0%, transparent 70%), radial-gradient(ellipse 70% 60% at 10% 72%, #DCF1E8 0%, transparent 70%), #FAF8F7",
    colors: ["#8F77DB", "#C4B2F4", "#9FD9C5"],
  },
] as const;

const PARTICLES = [
  [9, 23, 18, 0], [19, 74, 24, 1], [31, 41, 14, 2], [42, 86, 20, 0],
  [53, 14, 26, 1], [64, 61, 16, 2], [77, 82, 22, 0], [89, 30, 18, 1],
  [96, 64, 14, 2], [5, 91, 16, 1], [73, 9, 14, 0], [37, 7, 18, 2],
] as const;

export default function GradientLab({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState(0);
  const [pulse, setPulse] = useState<{ x: number; y: number; id: number } | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Array<HTMLSpanElement | null>>([]);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    let frame = 0;
    let last = 0;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { threshold: 0.01 });
    observer.observe(area);

    const animate = (time: number) => {
      frame = requestAnimationFrame(animate);
      if (motion.matches || !visible || document.hidden || time - last < 33) return;
      last = time;
      nodesRef.current.forEach((node, index) => {
        if (!node) return;
        const depth = 0.45 + (index % 3) * 0.2;
        const driftX = Math.sin(time / (3300 + index * 170) + index) * 5;
        const driftY = Math.cos(time / (4000 + index * 130) + index) * 7;
        const scrollShift = Math.min(window.scrollY, 1200) * depth * 0.035;
        node.style.transform = `translate3d(${pointerRef.current.x * depth + driftX}px, ${pointerRef.current.y * depth + driftY + scrollShift}px, 0)`;
      });
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !areaRef.current) return;
    const rect = areaRef.current.getBoundingClientRect();
    pointerRef.current = {
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 32,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 26,
    };
  };

  const handleTap = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button, a")) return;
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;
    const id = Date.now();
    setPulse({ x: event.clientX - rect.left, y: event.clientY - rect.top, id });
    window.setTimeout(() => setPulse((current) => current?.id === id ? null : current), 750);
  };

  return (
    <div
      ref={areaRef}
      className={styles.canvas}
      style={{ background: THEMES[selected].background }}
      onPointerMove={handleMove}
      onPointerLeave={() => { pointerRef.current = { x: 0, y: 0 }; }}
      onPointerDown={handleTap}
    >
      <div className={styles.particles} aria-hidden="true">
        {PARTICLES.map(([x, y, size, color], index) => (
          <span
            key={index}
            ref={(node) => { nodesRef.current[index] = node; }}
            className={styles.particle}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              background: `radial-gradient(circle at 35% 30%, #fff 0%, ${THEMES[selected].colors[color]} 55%, transparent 100%)`,
            }}
          />
        ))}
        {pulse && (
          <span key={pulse.id} className={styles.pulse} style={{ left: pulse.x, top: pulse.y }} />
        )}
      </div>
      <div className="relative z-30 mx-auto max-w-7xl px-4 pt-28 sm:px-6 md:px-12">
        <div className="rounded-3xl border border-[#E0DDDB] bg-white/90 p-4 shadow-sm backdrop-blur-md sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono-num text-[11px] font-bold uppercase tracking-[0.18em] text-[#6B46C1]">Design preview</p>
              <h2 className="font-display text-lg font-bold text-[#161616]">Choose a background direction</h2>
              <p className="text-xs text-[#585858]">Move your pointer, scroll, or tap the background to test the particles.</p>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Gradient concepts">
              {THEMES.map((theme, index) => (
                <button
                  key={theme.name}
                  type="button"
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                  className={`min-h-11 rounded-full border px-4 py-2 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1] ${selected === index
                    ? "border-[#9F8BE7] bg-[#9F8BE7] font-bold text-[#161616]"
                    : "border-[#E0DDDB] bg-white text-[#161616] hover:border-[#9F8BE7]"}`}
                >
                  <span className="block">{theme.name}</span>
                  <span className="block text-[10px] font-normal opacity-75">{theme.note}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
