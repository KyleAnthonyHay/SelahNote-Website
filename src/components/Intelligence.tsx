import { assets } from "@/data/assets";
import { intelligence } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Asset } from "./ui/Asset";
import { Reveal } from "./motion/Reveal";

const ART = [
  { src: assets.intelligenceStructured, label: "Illustration — Structured Notes" },
  { src: assets.intelligenceTimeline, label: "Illustration — Scripture Timeline" },
  { src: assets.intelligenceTranscript, label: "Illustration — Full Transcript" },
];

export default function Intelligence() {
  return (
    <section className="px-5 py-5">
      <SectionHeading
        eyebrow={intelligence.eyebrow}
        muted={intelligence.titleMuted}
        title={intelligence.title}
      />
      <div className="mx-auto mt-8 grid max-w-[1120px] grid-cols-3 gap-[18.5px] max-tablet:max-w-[361px] max-tablet:grid-cols-1">
        {intelligence.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.1}>
            <div className="relative aspect-square w-full overflow-hidden rounded-[40px]">
              <Asset
                src={ART[i].src}
                label={ART[i].label}
                hint="1254×1254"
                tone="blue"
                sizes="(max-width: 809px) 100vw, 361px"
              />
            </div>
            <h3 className="t-h6 mt-6 text-black">{card.title}</h3>
            <p className="t-p mt-2 text-muted">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
