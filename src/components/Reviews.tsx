"use client";

import { useState } from "react";
import { assets } from "@/data/assets";
import { reviews } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { CircleButton } from "./ui/Button";
import { Asset } from "./ui/Asset";
import { BubbleCornerBottomLeft, BubbleCornerTopRight, ChevronIcon } from "./icons";
import { Reveal } from "./motion/Reveal";

function initials(name: string) {
  return name
    .replace(/^@/, "")
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function Reviews() {
  const items = reviews.items;
  const [index, setIndex] = useState(0);
  const current = items[index];
  const avatar = assets.avatars[current.id];

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <section id="reviews" className="flex flex-col items-center px-5 pt-[60px] pb-[100px]">
      <SectionHeading eyebrow={reviews.eyebrow} muted={reviews.titleMuted} title={reviews.title} />

      {/* Speech-bubble card: gray rounded box with two white notches carved by SVG overlays */}
      <Reveal className="relative mt-[33px] h-[360px] w-full max-w-[500px] rounded-[40px] bg-surface" delay={0.1}>
        <BubbleCornerTopRight className="pointer-events-none absolute top-0 right-0 h-[82px] w-[120px]" />
        <BubbleCornerBottomLeft className="pointer-events-none absolute bottom-0 left-0 h-[82px] w-[120px]" />

        <div key={current.id} className="animate-fade relative flex h-full flex-col px-[50px] pt-10 pb-[41px] max-tablet:px-8">
          <div className="flex flex-1 items-center justify-center">
            <p className="t-h4 max-w-[400px] text-center text-muted">{current.quote}</p>
          </div>
          <div className="flex items-center justify-center gap-3.5">
            {/* Avatars render in black and white on the live site. */}
            <div className="relative h-[45px] w-[45px] shrink-0 overflow-hidden rounded-full shadow-avatar">
              {avatar ? (
                <Asset src={avatar} alt={current.name} label="avatar" sizes="45px" className="grayscale" />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center bg-[#e2e2e2] text-[13px] font-semibold text-[#777]"
                  title={`Placeholder: ${current.name} profile picture`}
                  data-placeholder={`avatar-${current.id}`}
                >
                  {initials(current.name)}
                </div>
              )}
            </div>
            <div className="text-left">
              <p className="t-p text-black">{current.name}</p>
              <p className="t-xs text-muted">{current.role}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8 flex items-center gap-3" delay={0.25} y={12}>
        <CircleButton className="rounded-full" aria-label="Previous review" onClick={() => go(-1)}>
          <ChevronIcon direction="left" />
        </CircleButton>
        <CircleButton className="rounded-full" aria-label="Next review" onClick={() => go(1)}>
          <ChevronIcon direction="right" />
        </CircleButton>
      </Reveal>
    </section>
  );
}
