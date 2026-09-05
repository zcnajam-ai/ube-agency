"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { animate, remove } from "animejs";

interface FloatingDotsBackgroundProps {
  color?: number;
  accentColor?: number;
  density?: number;
  minParticles?: number;
  maxParticles?: number;
  opacity?: number;
  size?: number;
  pointerStrength?: number;
  scrollStrength?: number;
  className?: string;
  isAbsolute?: boolean;
}

export default function FloatingDotsBackground({
  color = 0x9f8be7,
  accentColor = 0x303030,
  density = 0.00006,
  minParticles = 35,
  maxParticles = 120,
  opacity = 0.45,
  size = 0.048,
  pointerStrength = 0.28,
  scrollStrength = 0.00038,
  className = "",
  isAbsolute = true,
}: FloatingDotsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current || window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pointer = new THREE.Vector2();
    const pointerTarget = new THREE.Vector2();
    let scrollTarget = window.scrollY;
    let scrollCurrent = window.scrollY;
    const clock = new THREE.Clock();
    let raf = 0;
    let destroyed = false;

    // 1. WebGL Renderer with 1.5 Pixel Ratio Cap
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

    // 2. Scene & Camera
    const scene = new THREE.Scene();
    const width = isAbsolute && canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    const height = isAbsolute && canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 100);
    camera.position.z = 7;

    const group = new THREE.Group();
    scene.add(group);

    // 3. Build Particles
    const count = Math.round(
      Math.min(maxParticles, Math.max(minParticles, width * height * density))
    );
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const primaryCol = new THREE.Color(color);
    const accentCol = new THREE.Color(accentColor);
    const lilacCol = new THREE.Color(0xc8bdfc);
    const whiteCol = new THREE.Color(0xffffff);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Density bias toward the open right side of hero (x > 0)
      const xBias = Math.random() > 0.35 ? Math.random() * 0.6 : Math.random() - 0.5;
      positions[i3] = xBias * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 11;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;

      const rand = Math.random();
      let selectedColor = primaryCol;
      if (rand > 0.88) {
        selectedColor = accentCol;
      } else if (rand > 0.75) {
        selectedColor = lilacCol;
      } else if (rand > 0.65) {
        selectedColor = whiteCol;
      }

      colors[i3] = selectedColor.r;
      colors[i3 + 1] = selectedColor.g;
      colors[i3 + 2] = selectedColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size,
      vertexColors: true,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.NormalBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    group.add(points);

    // 4. Interaction Event Handlers
    const onPointerMove = (event: PointerEvent) => {
      const currentWidth = isAbsolute && canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const currentHeight = isAbsolute && canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      pointerTarget.set(
        (event.clientX / currentWidth) * 2 - 1,
        -(event.clientY / currentHeight) * 2 + 1
      );
    };

    const onTap = (event: PointerEvent) => {
      if (reducedMotion) return;
      const currentWidth = isAbsolute && canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const currentHeight = isAbsolute && canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      const x = (event.clientX / currentWidth) * 2 - 1;
      const y = -(event.clientY / currentHeight) * 2 + 1;

      remove(group.scale);
      animate(group.scale, {
        x: [1, 1.12, 1],
        y: [1, 1.12, 1],
        z: [1, 1.12, 1],
        duration: 900,
        ease: "outElastic(1, .55)",
      });

      remove(group.rotation);
      animate(group.rotation, {
        x: group.rotation.x + y * 0.08,
        y: group.rotation.y + x * 0.08,
        duration: 700,
        ease: "outCubic",
      });
    };

    const onScroll = () => {
      scrollTarget = window.scrollY;
    };

    const onResize = () => {
      const currentWidth = isAbsolute && canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const currentHeight = isAbsolute && canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      camera.aspect = currentWidth / currentHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentWidth, currentHeight, false);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        render();
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onTap, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange, { passive: true });

    onResize();

    // 5. Render Loop
    const render = () => {
      if (destroyed || document.hidden) return;
      const elapsed = clock.getElapsedTime();
      const motionFactor = reducedMotion ? 0.15 : 1;

      pointer.lerp(pointerTarget, 0.045);
      scrollCurrent += (scrollTarget - scrollCurrent) * 0.055;

      group.rotation.y = elapsed * 0.018 * motionFactor + pointer.x * pointerStrength;
      group.rotation.x =
        Math.sin(elapsed * 0.18) * 0.08 * motionFactor - pointer.y * pointerStrength * 0.5;
      group.position.y =
        Math.sin(elapsed * 0.28) * 0.12 * motionFactor + scrollCurrent * scrollStrength;
      group.position.x = pointer.x * 0.35;
      camera.position.z = 7 + Math.sin(elapsed * 0.22) * 0.15 * motionFactor;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };

    render();

    // 6. Cleanup & Resource Disposal
    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onTap);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [color, accentColor, density, minParticles, maxParticles, opacity, size, pointerStrength, scrollStrength, isAbsolute]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${isAbsolute ? "absolute" : "fixed"} inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
}
