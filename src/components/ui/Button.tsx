"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/cn";
import { AppleIcon } from "@/components/icons";

/** Small spring used for press feedback on every button. */
const PRESS = { type: "spring", stiffness: 500, damping: 30, mass: 0.6 } as const;

function usePress() {
  const reduce = useReducedMotion();
  return reduce
    ? {}
    : { whileHover: { y: -1 }, whileTap: { scale: 0.96, y: 0 }, transition: PRESS };
}

type ButtonProps = Omit<HTMLMotionProps<"a">, "ref"> & {
  variant?: "primary" | "secondary";
};

/** "Primary SM" / "Secondary SM" buttons from the live site (36px tall, 16px radius). */
export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  const press = usePress();
  return (
    <m.a
      className={cn(
        "t-sm inline-flex h-9 items-center justify-center rounded-2xl border px-4 whitespace-nowrap transition-[filter] duration-200 hover:brightness-110",
        variant === "primary"
          ? "border-white/[0.34] bg-brand text-white shadow-primary"
          : "border-black/[0.06] bg-surface text-black shadow-layered",
        className,
      )}
      {...press}
      {...rest}
    >
      {children}
    </m.a>
  );
}

type CircleProps = {
  as?: "button" | "a";
  className?: string;
  children?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

/** 34px round icon button (review arrows, footer socials). */
export function CircleButton({ as = "button", className, children, href, target, rel, onClick, ...rest }: CircleProps) {
  const press = usePress();
  const cls = cn(
    "inline-flex h-[34px] w-[34px] shrink-0 cursor-pointer items-center justify-center border border-black/10 bg-surface-2 text-black shadow-layered",
    className,
  );
  if (as === "a") {
    return (
      <m.a className={cls} href={href} target={target} rel={rel} aria-label={rest["aria-label"]} {...press}>
        {children}
      </m.a>
    );
  }
  return (
    <m.button type="button" className={cls} onClick={onClick} aria-label={rest["aria-label"]} {...press}>
      {children}
    </m.button>
  );
}

/** Custom "Get it on the App Store" badge (127×50, brand blue). */
export function AppStoreBadge({ href, className }: { href: string; className?: string }) {
  const press = usePress();
  return (
    <m.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "relative inline-flex h-[50px] w-[127px] items-center rounded-[18px] border border-white/[0.34] bg-brand pl-4 text-white shadow-primary transition-[filter] duration-200 hover:brightness-110",
        className,
      )}
      aria-label="Get it on the App Store"
      {...press}
    >
      <AppleIcon height={30} className="shrink-0" />
      <span className="ml-1.5 flex flex-col">
        <span className="text-[10px] leading-[10px] font-semibold">Get it on</span>
        <span className="t-sm">App Store</span>
      </span>
    </m.a>
  );
}
