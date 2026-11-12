import { assets } from "@/data/assets";
import { benefits } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { PhoneMockup } from "./ui/PhoneMockup";
import { Reveal } from "./motion/Reveal";
import { cn } from "@/lib/cn";
import type { AssetSrc } from "@/data/assets";

type CardProps = {
  title: string;
  body: string;
  screenSrc: AssetSrc;
  screenLabel: string;
  /** Phone peeks in from the top, text sits below (middle card). */
  phoneFirst?: boolean;
};

function BenefitCard({ title, body, screenSrc, screenLabel, phoneFirst }: CardProps) {
  /* The phone sits in a wrapper that fills the card below (or above) the text and carries
     the fade: out over its bottom third down to the card edge, or in over its top third
     when the phone peeks down from above. */
  const phone = (
    <div
      className={cn(
        "relative min-h-0 w-full flex-1 overflow-hidden",
        phoneFirst ? "mask-t-from-67%" : "mt-10 mask-b-from-67%",
      )}
    >
      <PhoneMockup
        width={273}
        screenSrc={screenSrc}
        screenLabel={screenLabel}
        position="absolute"
        className={cn("left-1/2 -translate-x-1/2", phoneFirst ? "bottom-0" : "top-0")}
      />
    </div>
  );
  return (
    <div
      className={cn(
        "relative flex h-[420px] flex-col overflow-hidden rounded-[40px] bg-surface px-10",
        phoneFirst ? "pb-10" : "pt-10",
      )}
    >
      {phoneFirst && phone}
      <h3 className={cn("t-h6 text-black", phoneFirst && "mt-10")}>{title}</h3>
      <p className="t-p mt-2 text-muted">{body}</p>
      {!phoneFirst && phone}
    </div>
  );
}

export default function Benefits() {
  const [notes, record, references] = benefits.cards;
  return (
    <section id="benefits" className="px-5 py-5">
      <SectionHeading
        eyebrow={benefits.eyebrow}
        muted={benefits.titleMuted}
        title={benefits.title}
        stacked={false}
      />
      <div className="mx-auto mt-[38px] grid max-w-[1120px] grid-cols-3 gap-[18.5px] max-tablet:max-w-[361px] max-tablet:grid-cols-1">
        <Reveal>
          <BenefitCard
            {...notes}
            screenSrc={assets.benefitsNotesScreen}
            screenLabel="Screenshot — Summary tab (Abiding in the Vine)"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <BenefitCard
            {...record}
            phoneFirst
            screenSrc={assets.benefitsRecordScreen}
            screenLabel="Screenshot — live transcript while recording"
          />
        </Reveal>
        <Reveal delay={0.2}>
          <BenefitCard
            {...references}
            screenSrc={assets.benefitsReferencesScreen}
            screenLabel="Screenshot — References tab"
          />
        </Reveal>
      </div>
    </section>
  );
}
