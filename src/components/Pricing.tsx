"use client";

import { useState } from "react";
import { assets } from "@/data/assets";
import { links, pricing } from "@/data/content";
import { pricingIcons, ProCardNotch } from "./icons";
import { Button } from "./ui/Button";
import { PhoneMockup } from "./ui/PhoneMockup";
import { Reveal } from "./motion/Reveal";
import { cn } from "@/lib/cn";

type Feature = { icon: keyof typeof pricingIcons; text: string };

function FeatureList({ items, light, width }: { items: readonly Feature[]; light?: boolean; width: number }) {
  return (
    <ul className="mt-5 flex flex-col gap-2" style={{ width }}>
      {items.map((f) => {
        const Icon = pricingIcons[f.icon];
        return (
          <li key={f.text} className="flex items-start gap-2.5">
            <Icon size={20} className={cn("mt-[3px] shrink-0", light ? "text-surface" : "text-muted")} />
            <span className="t-p text-muted">{f.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label="Save with the yearly plan"
      onClick={() => onChange(!on)}
      className={cn(
        "relative h-[18px] w-8 shrink-0 cursor-pointer rounded-full border transition-colors duration-200",
        on ? "border-brand bg-brand" : "border-white/60 bg-transparent",
      )}
    >
      <span
        className={cn(
          "absolute top-[1px] left-[1px] h-[14px] w-[14px] rounded-full bg-white transition-transform duration-200",
          on && "translate-x-[14px]",
        )}
      />
    </button>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const { free, pro } = pricing;
  const price = yearly ? pro.yearly : pro.monthly;

  return (
    <section id="pricing" className="px-5 py-5">
      <div className="relative mx-auto flex max-w-[1120px] items-end max-desktop:max-w-[560px] max-desktop:flex-col max-desktop:items-stretch max-desktop:gap-4">
        {/* Free */}
        <Reveal className="h-[373px] w-[560px] rounded-l-[40px] bg-surface pt-[39px] pb-[39px] pl-[90px] max-desktop:h-auto max-desktop:w-full max-desktop:rounded-[40px] max-desktop:px-10 max-desktop:py-10">
          <p className="t-h5 text-muted">{free.name}</p>
          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="t-price text-black">{free.price}</span>
            <span className="t-h5 text-muted">{free.suffix}</span>
          </div>
          <FeatureList items={free.features} width={280} />
          <Button href={links.appStore} className="mt-5">
            {free.cta}
          </Button>
        </Reveal>

        {/* Pro */}
        <Reveal
          delay={0.1}
          className="relative h-[414px] w-[560px] rounded-[40px] rounded-bl-none bg-black pt-[59px] pr-[100px] pb-[60px] pl-[228px] max-desktop:h-auto max-desktop:w-full max-desktop:rounded-bl-[40px] max-desktop:px-10 max-desktop:py-10"
        >
          <ProCardNotch className="pointer-events-none absolute -top-px -left-px h-[42px] w-[394px] max-desktop:hidden" />

          <div className="absolute top-[35px] right-[30px] flex items-center gap-2.5 max-desktop:static max-desktop:mb-6">
            <span className={cn("t-xs", yearly ? "text-brand" : "text-muted")}>
              {yearly ? pro.yearly.label : pro.toggleLabel}
            </span>
            <Toggle on={yearly} onChange={setYearly} />
          </div>

          <p className="t-h5 text-muted">{pro.name}</p>
          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="t-price text-white">{price.price}</span>
            <span className="t-h5 text-muted">{price.suffix}</span>
          </div>
          <FeatureList items={pro.features} width={202} light />
          <Button href={links.appStore} className="mt-5">
            {pro.cta}
          </Button>

          {/* Below the desktop breakpoint the phone moves inside the Pro card, like the live site. */}
          <div className="mx-auto mt-8 hidden h-[400px] w-[274px] overflow-hidden max-desktop:block">
            <PhoneMockup
              width={274}
              screenSrc={assets.pricingScreen}
              screenLabel="Screenshot — Summary tab with Selah banner"
            />
          </div>
        </Reveal>

        {/* Phone overlapping both cards; cropped to 476px tall */}
        <Reveal
          delay={0.2}
          y={60}
          duration={0.8}
          className="absolute bottom-0 left-[401px] z-10 h-[476px] w-[274px] overflow-hidden max-desktop:hidden"
        >
          <PhoneMockup
            width={274}
            screenSrc={assets.pricingScreen}
            screenLabel="Screenshot — Summary tab with Selah banner"
          />
        </Reveal>
      </div>
    </section>
  );
}
