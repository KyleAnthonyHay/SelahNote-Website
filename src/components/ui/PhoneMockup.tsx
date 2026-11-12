import Image from "next/image";
import { cn } from "@/lib/cn";
import { Asset } from "./Asset";
import { assets, type AssetSrc } from "@/data/assets";

/** The phone frame PNG (980×2000) and the screen behind its transparent cut-out, in frame pixels.
 *  The cut-out spans 50,44 to 930,1956; the screen bleeds 3px under the bezel so no seam shows. */
const FRAME = { w: 980, h: 2000 };
const SCREEN = { x: 47, y: 41, w: 886, h: 1918, radius: 110 };

export const PHONE_RATIO = FRAME.w / FRAME.h;

type Props = {
  /** Rendered width in px. Height follows the frame ratio. */
  width: number;
  screenSrc: AssetSrc;
  screenLabel: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  /** Positioning of the wrapper itself (it must be positioned for the inner layers). */
  position?: "relative" | "absolute";
};

/** iPhone mockup: the screenshot (or its placeholder) sits under the frame PNG's cut-out. */
export function PhoneMockup({
  width,
  screenSrc,
  screenLabel,
  className,
  style,
  priority,
  position = "relative",
}: Props) {
  const scale = width / FRAME.w;

  return (
    <div
      className={cn("shrink-0 select-none", className)}
      style={{ position, width, height: Math.round(FRAME.h * scale), ...style }}
      aria-hidden
    >
      <div
        className="absolute overflow-hidden bg-white"
        style={{
          left: SCREEN.x * scale,
          top: SCREEN.y * scale,
          width: SCREEN.w * scale,
          height: SCREEN.h * scale,
          borderRadius: SCREEN.radius * scale,
        }}
      >
        <Asset src={screenSrc} label={screenLabel} hint="1320×2868" priority={priority} />
      </div>

      <Image
        src={assets.phoneFrame}
        alt=""
        fill
        sizes={`${width}px`}
        className="pointer-events-none object-contain"
        priority={priority}
      />
    </div>
  );
}
