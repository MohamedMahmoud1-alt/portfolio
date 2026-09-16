"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Site-wide ambient background: three slow-drifting gradient "auroras" in the
 * brand hues, plus a cursor-following glow that subtly shifts the page's
 * accent hue. Fixed behind all content, pointer-events disabled.
 *
 * Under prefers-reduced-motion the drift and cursor tracking are skipped and
 * the blobs simply render in a fixed, calm position.
 */
export function AmbientBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const el = rootRef.current;
    if (!el) return;

    let raf = 0;
    // Target vs current, so the glow eases toward the cursor instead of snapping.
    let targetX = 0.5;
    let targetY = 0.35;
    let curX = 0.5;
    let curY = 0.35;

    function onPointerMove(e: PointerEvent) {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    }

    function tick() {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      if (el) {
        el.style.setProperty("--mx", `${(curX * 100).toFixed(2)}%`);
        el.style.setProperty("--my", `${(curY * 100).toFixed(2)}%`);
        // Rotate the accent hue a little based on horizontal position.
        el.style.setProperty("--hue-shift", `${((curX - 0.5) * 40).toFixed(1)}deg`);
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
