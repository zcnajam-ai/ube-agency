"use client";

import React, {
  useRef,
  useMemo,
  useEffect,
  useSyncExternalStore,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─────────────────────────── constants ─────────────────────────── */

const COLORS = {
  main: new THREE.Color("#9F8BE7"),
  white: new THREE.Color("#FFFFFF"),
  dark: new THREE.Color("#303030"),
};

const OPACITY_MIN = 0.30;
const OPACITY_MAX = 0.42;

/** Responsive particle counts */
function getParticleCount(): number {
  if (typeof window === "undefined") return 110;
  const w = window.innerWidth;
  if (w < 640) return 45;
  if (w < 1024) return 75;
  return 110;
}

/* ─── weight-biased distribution toward the right side ────────── */

/**
 * Returns a value in 0…1, biased so ~75 % of particles land in
 * the right 60 % of the canvas, and only ~25 % land further left.
 * The leftmost 30 % (where headline sits) gets very few particles.
 */
function biasedX(): number {
  const r = Math.random();
  if (r < 0.75) {
    // Right zone: 0.40 … 1.0
    return 0.40 + Math.random() * 0.60;
  }
  // Left sparse zone: 0.0 … 0.40
  return Math.random() * 0.40;
}

/* ─────────────────────── Particle System ────────────────────── */

interface ParticleData {
  /** Base positions as normalised 0…1 coordinates */
  baseX: Float32Array;
  baseY: Float32Array;
  colors: Float32Array;
  opacities: Float32Array;
  /** Dot diameter in CSS-like pixels (2 – 5) */
  sizes: Float32Array;
  /** Per-particle random phase / speed seeds */
  phaseX: Float32Array;
  phaseY: Float32Array;
  speed: Float32Array;
  count: number;
}

function generateParticles(count: number): ParticleData {
  const baseX = new Float32Array(count);
  const baseY = new Float32Array(count);
  const colors = new Float32Array(count * 3);
  const opacities = new Float32Array(count);
  const sizes = new Float32Array(count);
  const phaseX = new Float32Array(count);
  const phaseY = new Float32Array(count);
  const speed = new Float32Array(count);

  const rarePool = [COLORS.white, COLORS.dark];

  for (let i = 0; i < count; i++) {
    baseX[i] = biasedX();
    baseY[i] = Math.random();

    // Color: ~82 % main purple, ~18 % white / dark
    const color =
      Math.random() < 0.82
        ? COLORS.main
        : rarePool[Math.floor(Math.random() * rarePool.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    opacities[i] =
      OPACITY_MIN + Math.random() * (OPACITY_MAX - OPACITY_MIN);
    sizes[i] = 2.5 + Math.random() * 3.0; // 2.5 – 5.5 px diameter

    phaseX[i] = Math.random() * Math.PI * 2;
    phaseY[i] = Math.random() * Math.PI * 2;
    speed[i] = 0.12 + Math.random() * 0.22;
  }

  return { baseX, baseY, colors, opacities, sizes, phaseX, phaseY, speed, count };
}

/* ─────────────────────── Points component ───────────────────── */

interface DotsProps {
  reducedMotion: boolean;
  paused: boolean;
}

function Dots({ reducedMotion, paused }: DotsProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { size } = useThree(); // pixel dimensions of the canvas

  const data = useMemo(() => generateParticles(getParticleCount()), []);

  // Mutable state ref — avoids re-renders
  const state = useRef({
    pointer: { x: 0, y: 0 },
    scrollY: 0,
    pulseTime: -10,
    elapsed: 0,
  });

  /* ── pointer tracking ───────────────────────────────────────── */
  useEffect(() => {
    if (reducedMotion) return;
    const onPointer = (e: PointerEvent) => {
      state.current.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      state.current.pointer.y =
        -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, [reducedMotion]);

  /* ── scroll tracking ────────────────────────────────────────── */
  useEffect(() => {
    if (reducedMotion) return;
    const onScroll = () => {
      state.current.scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  /* ── click / tap pulse ──────────────────────────────────────── */
  useEffect(() => {
    if (reducedMotion) return;
    const onPulse = () => {
      state.current.pulseTime = state.current.elapsed;
    };
    window.addEventListener("pointerdown", onPulse, { passive: true });
    return () => window.removeEventListener("pointerdown", onPulse);
  }, [reducedMotion]);

  /* ── per-frame update ───────────────────────────────────────── */
  useFrame((_, delta) => {
    if (paused || !pointsRef.current) return;

    const pts = pointsRef.current;
    const geom = pts.geometry;
    const posAttr = geom.getAttribute("position") as THREE.BufferAttribute;
    const opAttr = geom.getAttribute("aOpacity") as THREE.BufferAttribute;
    const posArr = posAttr.array as Float32Array;
    const opArr = opAttr.array as Float32Array;

    const s = state.current;
    s.elapsed += delta;

    const {
      baseX, baseY, phaseX: phX, phaseY: phY, speed: spd,
      opacities: baseOp, count,
    } = data;

    // Canvas pixel dimensions → Three.js world units
    // With an orthographic camera matching pixel coords, 1 unit = 1 px.
    const w = size.width;
    const h = size.height;

    // Scroll influence (gentle vertical shift in px)
    const scrollPx = s.scrollY * 0.03;

    // Pulse easing – decays over 0.8 s
    const pulseDt = s.elapsed - s.pulseTime;
    const pulseStrength = pulseDt < 0.8 ? (1 - pulseDt / 0.8) : 0;

    for (let i = 0; i < count; i++) {
      const bx = baseX[i];
      const by = baseY[i];
      const sp = spd[i];
      const pX = phX[i];
      const pY = phY[i];

      if (reducedMotion) {
        posArr[i * 3] = bx * w;
        posArr[i * 3 + 1] = by * h;
        posArr[i * 3 + 2] = 0;
      } else {
        const t = s.elapsed * sp;

        // Slow floating offset (in px, ±15px max)
        const fx = Math.sin(t + pX) * 15;
        const fy = Math.cos(t * 0.7 + pY) * 12;

        // Pointer parallax (±12px, depth-scaled)
        const px = s.pointer.x * 12 * sp;
        const py = s.pointer.y * 12 * sp;

        // Pulse radial push (±8px max)
        let ppx = 0, ppy = 0;
        if (pulseStrength > 0) {
          ppx = (bx - 0.5) * pulseStrength * 8;
          ppy = (by - 0.5) * pulseStrength * 8;
        }

        posArr[i * 3] = bx * w + fx + px + ppx;
        posArr[i * 3 + 1] = by * h + fy + py + ppy - scrollPx;
        posArr[i * 3 + 2] = 0;
      }

      // Gentle opacity shimmer
      opArr[i] =
        baseOp[i] +
        (reducedMotion ? 0 : Math.sin(s.elapsed * 0.5 + pX) * 0.03) +
        pulseStrength * 0.06;
    }

    posAttr.needsUpdate = true;
    opAttr.needsUpdate = true;
  });

  /* ── geometry ───────────────────────────────────────────────── */
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(new Float32Array(data.count * 3), 3)
    );
    geom.setAttribute(
      "aOpacity",
      new THREE.Float32BufferAttribute(new Float32Array(data.opacities), 1)
    );
    geom.setAttribute(
      "aSize",
      new THREE.Float32BufferAttribute(data.sizes, 1)
    );
    geom.setAttribute(
      "aColor",
      new THREE.Float32BufferAttribute(data.colors, 3)
    );
    return geom;
  }, [data]);

  /* ── material (per-particle color via vertex attribute) ──────── */
  const colorMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute float aOpacity;
        attribute float aSize;
        attribute vec3 aColor;
        varying float vOpacity;
        varying vec3 vColor;
        void main() {
          vOpacity = aOpacity;
          vColor = aColor;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          // aSize is the desired CSS-px diameter.
          // With an ortho camera 1 unit = 1 px, so gl_PointSize = aSize directly.
          gl_PointSize = aSize;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vOpacity;
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          // Tighter smoothstep for a cleaner circular edge
          float alpha = smoothstep(0.5, 0.35, d) * vOpacity;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
  }, []);

  // Clean up
  useEffect(() => {
    return () => {
      geometry.dispose();
      colorMaterial.dispose();
    };
  }, [geometry, colorMaterial]);

  return <points ref={pointsRef} geometry={geometry} material={colorMaterial} />;
}

/* ─────── external store subscriptions (avoids setState in effects) ── */

function subscribeVisibility(cb: () => void) {
  document.addEventListener("visibilitychange", cb);
  return () => document.removeEventListener("visibilitychange", cb);
}
function getVisibilitySnapshot() {
  return document.hidden;
}
function getVisibilityServerSnapshot() {
  return false;
}

function subscribeReducedMotion(cb: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}
function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getReducedMotionServerSnapshot() {
  return false;
}

/* ──────────────── main exported component ───────────────────── */

export default function FloatingDotsBackground() {
  const paused = useSyncExternalStore(
    subscribeVisibility,
    getVisibilitySnapshot,
    getVisibilityServerSnapshot
  );

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-[1] pointer-events-none"
    >
      <Canvas
        dpr={Math.min(window.devicePixelRatio, 1.5)}
        orthographic
        camera={{ position: [0, 0, 1], near: 0.1, far: 10, zoom: 1 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
        }}
        style={{ background: "transparent" }}
        frameloop={paused ? "never" : "always"}
        onCreated={({ camera, size }) => {
          // Configure orthographic camera to match pixel coords:
          // (0,0) = top-left, (width, height) = bottom-right
          const cam = camera as THREE.OrthographicCamera;
          cam.left = 0;
          cam.right = size.width;
          cam.bottom = 0;
          cam.top = size.height;
          cam.updateProjectionMatrix();
        }}
        resize={{
          // React Three Fiber will auto-resize; update camera on resize
          debounce: 100,
        }}
      >
        <CameraSync />
        <Dots reducedMotion={reducedMotion} paused={paused} />
      </Canvas>
    </div>
  );
}

/**
 * Keeps the orthographic camera frustum in sync with canvas pixel dimensions.
 * Uses useFrame's state argument (not from a hook) to avoid the
 * react-hooks/immutability lint rule.
 */
function CameraSync() {
  const prevSize = useRef({ w: 0, h: 0 });
  useFrame(({ camera, size }) => {
    if (prevSize.current.w !== size.width || prevSize.current.h !== size.height) {
      prevSize.current.w = size.width;
      prevSize.current.h = size.height;
      const cam = camera as THREE.OrthographicCamera;
      cam.left = 0;
      cam.right = size.width;
      cam.bottom = 0;
      cam.top = size.height;
      cam.updateProjectionMatrix();
    }
  });
  return null;
}
