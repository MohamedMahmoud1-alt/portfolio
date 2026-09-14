"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 1000 : 220,
    damping: reduceMotion ? 100 : 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[2.5px] origin-left"
      style={{ scaleX: smoothed, background: "var(--gradient-brand)" }}
    />
  );
}
