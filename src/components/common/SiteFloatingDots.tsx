"use client";

import { useEffect, useRef } from "react";

type Dot = { angle: number; orbit: number; size: number; alpha: number; speed: number; dash: boolean };
type Pulse = { x: number; y: number; started: number };

const fraction = (value: number) => value - Math.floor(value);
const seeded = (index: number, seed: number) => fraction(Math.sin(index * seed) * 43758.5453);

/** Brand-purple orbiting particles shared by every route. It never captures input. */
export default function SiteFloatingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let frame = 0;
    let lastFrame = 0;
    let scroll = window.scrollY;
    let scrollTarget = scroll;
    let pointer = { x: -1000, y: -1000 };
    let pulse: Pulse | null = null;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      dots = Array.from({ length: width < 640 ? 70 : 185 }, (_, index) => {
        const n = index + 1;
        return {
          angle: seeded(n, 127.1) * Math.PI * 2,
          orbit: 0.12 + Math.sqrt(seeded(n, 311.7)) * 0.9,
          size: 4 + seeded(n, 79.9) * 4.2,
          alpha: 0.65 + seeded(n, 47.3) * 0.3,
          speed: 0.5 + seeded(n, 17.1) * 1.1,
          dash: seeded(n, 13.7) > 0.17,
        };
      });
      if (motion.matches) draw(0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      if (!motion.matches) scroll += (scrollTarget - scroll) * 0.09;
      const centerX = width * (width < 640 ? 0.52 : 0.57);
      const centerY = height * 0.44;
      const reach = Math.max(width * 0.52, height * 0.62);

      for (const dot of dots) {
        const angle = dot.angle + (motion.matches ? 0 : time * 0.000055 * dot.speed + scroll * 0.0005 * dot.speed);
        const radius = dot.orbit * reach;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius * 0.82;
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const hover = motion.matches ? 0 : Math.max(0, 1 - distance / 190);
        // A small tangential push lets the field flow around the pointer.
        let offsetX = distance ? ((dx / distance) * 27 - (dy / distance) * 18) * hover : 0;
        let offsetY = distance ? ((dy / distance) * 27 + (dx / distance) * 18) * hover : 0;

        if (pulse && !motion.matches) {
          const age = (time - pulse.started) / 720;
          const tapDistance = Math.hypot(x - pulse.x, y - pulse.y);
          const push = Math.max(0, 1 - tapDistance / 230) * (1 - age) * 48;
          if (tapDistance) {
            offsetX += ((x - pulse.x) / tapDistance) * push;
            offsetY += ((y - pulse.y) / tapDistance) * push;
          }
        }

        context.globalAlpha = Math.min(1, dot.alpha + hover * 0.12);
        context.fillStyle = "#9F8BE7";
        context.beginPath();
        if (dot.dash) {
          context.save();
          context.translate(x + offsetX, y + offsetY);
          context.rotate(angle + Math.PI / 2);
          context.roundRect(-dot.size * 0.5, -1.1, dot.size + hover * 2, 2.2, 1.1);
          context.fill();
          context.restore();
        } else {
          context.arc(x + offsetX, y + offsetY, dot.size * 0.24 + hover * 0.65, 0, Math.PI * 2);
          context.fill();
        }
      }
      context.globalAlpha = 1;

      if (pulse && !motion.matches) {
        const age = (time - pulse.started) / 720;
        if (age >= 1) {
          pulse = null;
        } else {
          context.beginPath();
          context.arc(pulse.x, pulse.y, 12 + age * 55, 0, Math.PI * 2);
          context.strokeStyle = `rgba(159, 139, 231, ${(1 - age) * 0.55})`;
          context.lineWidth = 1.5;
          context.stroke();
        }
      }
    };

    const animate = (time: number) => {
      if (time - lastFrame >= 32) {
        draw(time);
        lastFrame = time;
      }
      frame = requestAnimationFrame(animate);
    };
    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
    };
    const onPointerLeave = (event: PointerEvent) => {
      if (!event.relatedTarget) pointer = { x: -1000, y: -1000 };
    };
    const onPointerDown = (event: PointerEvent) => {
      pulse = { x: event.clientX, y: event.clientY, started: performance.now() };
    };
    const onScroll = () => { scrollTarget = window.scrollY; };
    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden && !motion.matches) frame = requestAnimationFrame(animate);
    };
    const onMotionChange = () => {
      cancelAnimationFrame(frame);
      pointer = { x: -1000, y: -1000 };
      pulse = null;
      if (motion.matches) draw(0);
      else if (!document.hidden) frame = requestAnimationFrame(animate);
    };

    resize();
    if (!motion.matches) frame = requestAnimationFrame(animate);
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerLeave, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerLeave);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[11] pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
