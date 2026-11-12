import { assets } from "@/data/assets";
import { hero, links } from "@/data/content";
import { AppStoreBadge } from "./ui/Button";
import { PhoneMockup } from "./ui/PhoneMockup";
import { EASE_PHONE, FadeIn } from "./motion/Reveal";

/**
 * Load choreography (measured from the reference recording):
 * copy settles almost immediately, then both phones rise ~110px while scaling
 * from 80%, the front phone leading the back one by a few frames.
 */
const PHONE = { y: 110, scale: 0.8, duration: 0.65, ease: EASE_PHONE };

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[1126px] overflow-hidden max-tablet:h-auto max-tablet:pb-0"
    >
      <div id="download" className="flex flex-col items-center px-5 pt-[140px] text-center">
        <FadeIn y={14} duration={0.5}>
          <h1 className="t-h1 max-w-[500px] text-black">
            <span className="text-muted">{hero.titleMuted}</span>
            <br />
            {hero.title}
          </h1>
        </FadeIn>
        <FadeIn y={14} duration={0.5} delay={0.06} className="mt-[18px]">
          <p className="t-p max-w-[500px] text-muted">{hero.body}</p>
        </FadeIn>
        <FadeIn y={14} duration={0.5} delay={0.12} className="mt-8">
          <AppStoreBadge href={links.appStore} />
        </FadeIn>
      </div>

      {/* Two tilted phones. Centers sit 77px left / 119px right of the page center on desktop;
          on phones they stack, the front one tilted the other way. The outer box carries the
          fade (opaque to 270px below the phone tops, gone by 469px), so the fade line stays
          horizontal in page space while the phones tilt and rise into it. A mask also clips to
          its box, so the box starts 27px above the phones to leave room for the tilted corners. */}
      <div className="relative mx-auto mt-[60px] h-[639px] w-full max-w-[1120px] pt-[27px] mask-b-from-[297px] mask-b-to-[496px] max-tablet:mt-[21px] max-tablet:h-[587px] max-tablet:overflow-hidden">
        <div className="relative h-full">
          <FadeIn
            {...PHONE}
            delay={0.16}
            className="absolute top-0 left-[calc(50%_-_227px)] z-0 max-tablet:left-[calc(50%_-_140px)]"
          >
            <PhoneMockup
              width={300}
              screenSrc={assets.heroScreen1}
              screenLabel="Hero screenshot 1 — Home / Recent Notes"
              className="-rotate-[13deg] max-tablet:rotate-0"
              priority
            />
          </FadeIn>
          <FadeIn
            {...PHONE}
            delay={0.08}
            className="absolute top-0 left-[calc(50%_-_31px)] z-10 max-tablet:top-[70px] max-tablet:left-[calc(50%_-_165px)]"
          >
            <PhoneMockup
              width={300}
              screenSrc={assets.heroScreen2}
              screenLabel="Hero screenshot 2 — Transcript tab"
              className="rotate-[5deg] max-tablet:-rotate-[8deg]"
              priority
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
