"use client";

import { LazyMotion, domAnimation } from "motion/react";

/** Loads Motion's DOM animation features once so the lightweight `m.*` components can animate. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
