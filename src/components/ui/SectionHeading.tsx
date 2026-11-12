import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  /** Gray leading part of the heading. */
  muted?: string;
  /** Black part of the heading. */
  title: string;
  /** Put the muted and black parts on separate lines. */
  stacked?: boolean;
  className?: string;
  titleClassName?: string;
  maxWidth?: number;
};

/** Eyebrow + two-tone h2 used by every section. Reveals on scroll. */
export function SectionHeading({
  eyebrow,
  muted,
  title,
  stacked = true,
  className,
  titleClassName,
  maxWidth = 400,
}: Props) {
  return (
    <Reveal className={cn("flex flex-col items-center text-center", className)} y={24}>
      <p className="t-h6 text-muted">{eyebrow}</p>
      <h2 className={cn("t-h2 mt-1.5 text-black", titleClassName)} style={{ maxWidth }}>
        {muted && (
          <>
            <span className="text-muted">{muted}</span>
            {stacked ? <br /> : " "}
          </>
        )}
        {title}
      </h2>
    </Reveal>
  );
}
