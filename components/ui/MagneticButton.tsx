"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  onClick?: () => void;
  strength?: number;
};

const MotionAnchor = motion.a;
const MotionButton = motion.button;

/**
 * Wraps interactive elements with a subtle magnetic pull toward the cursor.
 * Disabled entirely under prefers-reduced-motion.
 */
export function Magnetic({
  children,
  className,
  as = "button",
  href,
  target,
  rel,
  download,
  onClick,
  strength = 14,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength;
    setPos({ x, y });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
    >
      {as === "a" ? (
        <MotionAnchor
          href={href}
          target={target}
          rel={rel}
          download={download}
          onClick={onClick}
          className={cn(className)}
          whileTap={{ scale: 0.96 }}
        >
          {children}
        </MotionAnchor>
      ) : (
        <MotionButton onClick={onClick} className={cn(className)} whileTap={{ scale: 0.96 }}>
          {children}
        </MotionButton>
      )}
    </motion.div>
  );
}
