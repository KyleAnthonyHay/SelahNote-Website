import { assets } from "@/data/assets";
import { Asset } from "./Asset";
import { LogoMarkFallback } from "@/components/icons";

/** 34×34 white rounded tile with the SelahNote mark (nav + footer). */
export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white"
      style={{ width: size, height: size }}
    >
      {assets.logoMark ? (
        <Asset src={assets.logoMark} label="Logo mark" alt="SelahNote" fit="contain" sizes={`${size}px`} />
      ) : (
        <LogoMarkFallback size={size} />
      )}
    </div>
  );
}
