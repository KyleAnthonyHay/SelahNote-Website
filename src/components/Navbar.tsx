"use client";

import { useState } from "react";
import { links, nav } from "@/data/content";
import { Button } from "./ui/Button";
import { LogoMark } from "./ui/LogoMark";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-5">
      <div className="w-full max-w-[800px]">
        <nav className="relative flex h-[54px] w-full items-center rounded-3xl bg-black/70 p-2 pl-2.5 backdrop-blur-[10px]">
          <a href="#hero" className="flex items-center gap-2" aria-label="SelahNote home">
            <LogoMark size={34} />
            <span className="t-logo text-white">SelahNote</span>
          </a>

          <div className="hidden flex-1 items-center justify-center tablet:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="t-sm px-2.5 text-white transition-opacity hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="ml-auto hidden tablet:block">
            <Button href={links.appStore}>Get the app</Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-auto flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-2xl tablet:hidden"
          >
            <span
              className={cn(
                "block h-[1.5px] w-[18px] bg-white transition-transform",
                open && "translate-y-[6.5px] rotate-45",
              )}
            />
            <span className={cn("block h-[1.5px] w-[18px] bg-white transition-opacity", open && "opacity-0")} />
            <span
              className={cn(
                "block h-[1.5px] w-[18px] bg-white transition-transform",
                open && "-translate-y-[6.5px] -rotate-45",
              )}
            />
          </button>
        </nav>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-3xl bg-black/80 p-3 backdrop-blur-[10px] tablet:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="t-sm rounded-2xl px-3 py-2.5 text-white hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <Button href={links.appStore} className="mt-1">
              Get the app
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
