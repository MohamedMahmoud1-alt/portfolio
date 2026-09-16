"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Brand gradient stops, used to interpolate the cursor glow's color in JS
// so it works identically in every browser (no dependency on newer
// relative-color CSS syntax).
const STOPS: [number, number, number][] = [
  [167, 139, 250], // violet
  [244, 114, 182], // pink
  [251, 146, 60], // orange
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function colorAt(t: number): string {
  const clamped = Math.max(0, Math.min(1, t));
  const scaled = clamped * (STOPS.length - 1);
  const i = Math.min(STOPS.length - 2, Math.floor(scaled));
  const localT = scaled - i;
  const [r1, g1, b1] = STOPS[i];
  const [r2, g2, b2] = STOPS[i + 1];
  const r = Math.round(lerp(r1, r2, localT));
  const g = Math.round(lerp(g1, g2, localT));
  const b = Math.round(lerp(b1, b2, localT));
  return `${r}, ${g}, ${b}`;
}

/**
 * Site-wide ambient background: three slow-drifting gradient "auroras" in
 * the brand hues, plus a cursor-following glow whose color shifts across
 * the violet -> pink -> orange gradient based on horizontal cursor
 * position. Fixed behind all content, pointer-events disabled.
 *
 * Under prefers-reduced-motion the drift and cursor tracking are skipped
 * and the blobs render in a fixed, calm position.
 */
export function AmbientBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const el = rootRef.current;
    if (!el) return;

    let raf = 0;
    let targetX = 0.5;
    let targetY = 0.35;
    let curX = 0.5;
    let curY = 0.35;

    function onPointerMove(e: PointerEvent) {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    }

    function tick() {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      if (el) {
        el.style.setProperty("--mx", `${(curX * 100).toFixed(2)}%`);
        el.style.setProperty("--my", `${(curY * 100).toFixed(2)}%`);
        el.style.setProperty("--cursor-rgb", colorAt(curX));
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return (
    <div ref={rootRef} className="ambient-bg" aria-hidden="true">
      <span className="ambient-blob ambient-blob--1" />
      <span className="ambient-blob ambient-blob--2" />
      <span className="ambient-blob ambient-blob--3" />
      <span className="ambient-cursor-glow" />
      <span className="ambient-grid" />
    </div>
  );
}
