"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate, useReducedMotion } from "framer-motion";

type Parsed = { prefix: string; target: number; decimals: number; suffix: string };

// Parses "≈3.75%", "2nd", "3.15", "12" into [prefix, number, suffix] so the
// numeric part can be counted up while symbols/units stay static.
function parseValue(raw: string): Parsed | null {
  const match = raw.match(/^([^\d-]*)(-?[\d.]+)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, target: parseFloat(numStr), decimals, suffix };
}

function format(p: Parsed, n: number) {
  return `${p.prefix}${n.toFixed(p.decimals)}${p.suffix}`;
}

export function Counter({ value, duration = 1.3 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const parsed = parseValue(value);
  const [animated, setAnimated] = useState<string | null>(null);

  useEffect(() => {
    if (!inView || !parsed || reduceMotion) return;
    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        setAnimated(format(parsed, v));
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduceMotion]);

  if (!parsed) return <span ref={ref}>{value}</span>;

  // Derived directly from render-time state — no effect/setState needed for
  // the static cases (not yet in view, or reduced motion requested).
  const shown = animated ?? (reduceMotion && inView ? format(parsed, parsed.target) : format(parsed, 0));

  return <span ref={ref}>{shown}</span>;
}
