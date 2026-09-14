"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number; // 0, 1, or 2 -> indexes into the brand palette
  pulse: number;
};

// Brand gradient stops (violet, pink, orange), duplicated here since canvas
// fillStyle can't read CSS custom properties directly.
const PALETTE = {
  dark: {
    line: [167, 139, 250] as const,
    nodes: [
      [167, 139, 250],
      [244, 114, 182],
      [251, 146, 60],
    ] as const,
  },
  light: {
    line: [124, 58, 237] as const,
    nodes: [
      [124, 58, 237],
      [219, 39, 119],
      [234, 88, 12],
    ] as const,
  },
};

/**
 * Lightweight canvas-based drifting node network in the brand's gradient
 * hues, evoking a neural net / circuit graph without being literal. Frozen
 * to a single static frame under prefers-reduced-motion. Re-colors itself
 * when the page theme toggles. Pointer-events disabled — purely decorative.
 */
export function NeuralBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationId: number;
    let t = 0;
    let theme: "dark" | "light" =
      document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

    function resize() {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.scale(dpr, dpr);

      const count = Math.min(56, Math.round((width * height) / 21000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        hue: Math.floor(Math.random() * 3),
        pulse: Math.random() * Math.PI * 2,
      }));
    }

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      t += 0.016;

      const palette = PALETTE[theme];

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      const maxDist = Math.min(160, width / 6);
      const [lr, lg, lb] = palette.line;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = `rgba(${lr}, ${lg}, ${lb}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const [nr, ng, nb] = palette.nodes[n.hue];
        const glow = reduceMotion ? 0.55 : 0.4 + Math.sin(t * 1.4 + n.pulse) * 0.2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nr}, ${ng}, ${nb}, ${glow})`;
        ctx.fill();
      }

      if (!reduceMotion) {
        animationId = requestAnimationFrame(step);
      }
    }

    resize();
    step();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        resize();
        if (reduceMotion) step();
      }, 150);
    };
    window.addEventListener("resize", onResize);

    const observer = new MutationObserver(() => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      if (next !== theme) {
        theme = next;
        if (reduceMotion) step();
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ pointerEvents: "none" }}
    />
  );
}
