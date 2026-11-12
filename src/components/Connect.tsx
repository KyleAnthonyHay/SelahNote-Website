import { assets } from "@/data/assets";
import { connect } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Asset } from "./ui/Asset";
import { Reveal } from "./motion/Reveal";
import { cn } from "@/lib/cn";

const RING = 600; // outer circle diameter
const ORBIT = 277; // distance of each icon center from the ring center

/** Angles in degrees, clockwise from 3 o'clock, measured from the live site. */
const APPS = [
  { key: "appChatGPT", label: "ChatGPT", size: 72, angle: -117.5 },
  { key: "appHallow", label: "Hallow", size: 88, angle: -48.6 },
  { key: "appGlorify", label: "Glorify", size: 72, angle: 3.8 },
  { key: "appNotes", label: "Apple Notes", size: 88, angle: 47.6 },
  { key: "appPray", label: "Pray", size: 88, angle: 130 },
  { key: "appBible", label: "Bible", size: 72, angle: 181 },
] as const;

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative flex h-[726px] items-center justify-center overflow-hidden px-5"
    >
      {/* The ring keeps its 600px size on phones and simply clips at the edges, like the live site. */}
      <Reveal
        className="relative shrink-0"
        style={{ width: RING, height: RING }}
        y={0}
        scale={0.9}
        duration={0.9}
        amount={0.3}
      >
        {/* Slowly rotating ring; each icon counter-rotates so it stays upright.
            On phones the ring scales to ~430px while the copy keeps its size. */}
        <div className="absolute inset-0 animate-orbit max-tablet:scale-[0.72]">
          <div className="absolute inset-0 rounded-full border border-line" />
          <div className="absolute inset-10 rounded-full border border-dashed border-line" />
          {APPS.map((app) => {
            const rad = (app.angle * Math.PI) / 180;
            const cx = RING / 2 + ORBIT * Math.cos(rad);
            const cy = RING / 2 + ORBIT * Math.sin(rad);
            const src = assets[app.key];
            return (
              <div
                key={app.key}
                className="absolute animate-orbit-reverse"
                style={{
                  left: cx - app.size / 2,
                  top: cy - app.size / 2,
                  width: app.size,
                  height: app.size,
                }}
              >
                <div
                  className={cn(
                    "h-full w-full overflow-hidden rounded-3xl bg-white shadow-tile",
                    !src && app.size === 88 && "m-2 h-[72px] w-[72px]",
                  )}
                >
                  <Asset
                    src={src}
                    label={app.label}
                    hint="app icon"
                    fit="contain"
                    sizes={`${app.size}px`}
                    className="text-[10px]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Copy in the middle of the ring */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <SectionHeading
            eyebrow={connect.eyebrow}
            muted={connect.titleMuted}
            title={connect.title}
            stacked={false}
            maxWidth={280}
          />
          <Reveal delay={0.15} y={16}>
            <p className="t-p mt-[5px] max-w-[280px] text-muted">{connect.body}</p>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
