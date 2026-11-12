import Image from "next/image";
import { cn } from "@/lib/cn";
import type { AssetSrc } from "@/data/assets";

type PlaceholderProps = {
  label: string;
  hint?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Hide the text chip (for tiny slots like icons). */
  quiet?: boolean;
  /** "blue" mimics the gradient illustrations in the Intelligence section. */
  tone?: "gray" | "blue";
};

/** Labelled striped box used wherever a graphic still needs to be supplied. */
export function Placeholder({ label, hint, className, style, quiet, tone = "gray" }: PlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden text-center",
        tone === "gray"
          ? "placeholder-bg"
          : "bg-[linear-gradient(155deg,#0b3ccf_0%,#2f6ff0_40%,#9cc3ff_78%,#e3eeff_100%)]",
        className,
      )}
      style={style}
      role="img"
      aria-label={`Placeholder: ${label}`}
      data-placeholder={label}
    >
      {!quiet && (
        <div className="max-w-[90%] rounded-md bg-white/90 px-2.5 py-1.5 text-[11px] leading-tight font-medium tracking-[-0.01em] text-[#555] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
          <div>{label}</div>
          {hint && <div className="mt-0.5 text-[10px] font-normal text-[#999]">{hint}</div>}
        </div>
      )}
    </div>
  );
}

type AssetProps = PlaceholderProps & {
  src: AssetSrc;
  alt?: string;
  /** object-fit for the real image. */
  fit?: "cover" | "contain";
  sizes?: string;
  priority?: boolean;
};

/**
 * Renders the real image when `src` is set, otherwise a labelled placeholder.
 * The wrapper always fills its parent, so size the parent.
 */
export function Asset({
  src,
  alt = "",
  fit = "cover",
  sizes = "100vw",
  priority,
  className,
  style,
  ...ph
}: AssetProps) {
  if (!src) {
    return <Placeholder className={cn("h-full w-full", className)} style={style} {...ph} />;
  }
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={fit === "cover" ? "object-cover" : "object-contain"}
      />
    </div>
  );
}
