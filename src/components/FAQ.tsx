"use client";

import { useState } from "react";
import { faqs, links } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { CaretDownIcon } from "./icons";
import { Reveal } from "./motion/Reveal";
import { cn } from "@/lib/cn";

export default function FAQ() {
  const [open, setOpen] = useState<Set<number>>(() => new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id="faqs" className="flex flex-col items-center px-5 py-5">
      <SectionHeading eyebrow={faqs.eyebrow} muted={faqs.titleMuted} title={faqs.title} maxWidth={500} />

      <div className="mt-8 flex w-full max-w-[600px] flex-col gap-1">
        {faqs.items.map((item, i) => {
          const isOpen = open.has(i);
          return (
            <Reveal key={item.q} className="rounded-3xl bg-surface" delay={i * 0.06} y={20} amount={0.5}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => toggle(i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 pr-6 text-left"
              >
                <span className="t-sm text-black">{item.q}</span>
                <CaretDownIcon
                  className={cn("shrink-0 transition-transform duration-300", isOpen && "rotate-180")}
                />
              </button>
              <div
                id={`faq-${i}`}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="t-p px-5 pt-[3px] pb-5 text-muted">{item.a}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.3} y={12}>
        <p className="t-xs mt-8 text-center text-muted">
          {faqs.helpPrefix}
          <a href={links.email} className="text-black">
            {faqs.helpEmail}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
