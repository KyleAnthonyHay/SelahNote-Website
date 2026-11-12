import { assets } from "@/data/assets";
import { features } from "@/data/content";
import { featureIcons } from "./icons";
import { SectionHeading } from "./ui/SectionHeading";
import { PhoneMockup } from "./ui/PhoneMockup";
import { Reveal } from "./motion/Reveal";
import { cn } from "@/lib/cn";

type Item = {
  icon: keyof typeof featureIcons;
  title: string;
  body: string;
};

/** Card widths alternate 250 / 280 / 250 so the column edge steps in and out. */
const WIDTHS = [250, 280, 250];

function FeatureCard({ item, width }: { item: Item; width: number }) {
  const Icon = featureIcons[item.icon];
  return (
    <div
      className="rounded-[40px] bg-surface p-5 max-desktop:w-full max-desktop:max-w-[280px]"
      style={{ width }}
    >
      <Icon size={36} className="text-brand" />
      <h3 className="t-h6 mt-2.5 text-black">{item.title}</h3>
      <p className="t-p mt-1.5 text-muted">{item.body}</p>
    </div>
  );
}

function Column({
  items,
  align,
  baseDelay,
}: {
  items: readonly Item[];
  align: "end" | "start";
  baseDelay: number;
}) {
  return (
    <div
      className={cn(
        "flex w-[280px] shrink-0 flex-col gap-5 max-desktop:w-full max-desktop:flex-row max-desktop:flex-wrap max-desktop:justify-center",
        align === "end" ? "items-end" : "items-start",
      )}
    >
      {items.map((item, i) => (
        <Reveal key={item.title} delay={baseDelay + i * 0.1} y={24}>
          <FeatureCard item={item} width={WIDTHS[i]} />
        </Reveal>
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="px-5 pt-5 pb-[29px]">
      <SectionHeading
        eyebrow={features.eyebrow}
        muted={features.titleMuted}
        title={features.title}
      />
      <div className="mx-auto mt-12 flex max-w-[1120px] items-center justify-center gap-10 max-desktop:flex-col">
        <Column items={features.left} align="end" baseDelay={0.1} />
        <Reveal y={48} scale={0.94} duration={0.8} className="max-desktop:order-first">
          {/* Fades over its lower 40% on desktop; below 1200px the phone sits above the cards unfaded. */}
          <PhoneMockup
            width={320}
            screenSrc={assets.featuresScreen}
            screenLabel="Screenshot — References tab"
            className="desktop:mask-b-from-60% desktop:mask-b-to-90%"
          />
        </Reveal>
        <Column items={features.right} align="start" baseDelay={0.2} />
      </div>
    </section>
  );
}
