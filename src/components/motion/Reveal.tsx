"use client";

import { m, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

/** Soft ease-out used for every reveal (close to Framer's default appear curve). */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
/** Snappier curve for the hero phones, which travel further. */
export const EASE_PHONE = [0.16, 1, 0.3, 1] as const;

type Shared = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Seconds to wait before starting. */
  delay?: number;
  /** Starting vertical offset in px. */
  y?: number;
  /** Starting scale. */
  scale?: number;
  duration?: number;
  ease?: readonly [number, number, number, number];
};

/**
 * Fades + slides an element in the first time it scrolls into view.
 * Renders a plain div when the visitor prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  style,
  delay = 0,
  y = 28,
  scale = 1,
  duration = 0.7,
  ease = EASE_OUT,
  amount = 0.2,
}: Shared & {
  /** Fraction of the element that must be visible before it animates. */
  amount?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <m.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration, delay, ease: [...ease] }}
    >
      {children}
    </m.div>
  );
}

/** Animates in as soon as it mounts. Used above the fold (hero). */
export function FadeIn({
  children,
  className,
  style,
  delay = 0,
  y = 16,
  scale = 1,
  duration = 0.6,
  ease = EASE_OUT,
}: Shared) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <m.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, scale }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration, delay, ease: [...ease] }}
    >
      {children}
    </m.div>
  );
}
