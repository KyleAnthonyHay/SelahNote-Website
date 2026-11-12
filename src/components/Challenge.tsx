import { challenge } from "@/data/content";
import { Reveal } from "./motion/Reveal";

export default function Challenge() {
  // The live section keeps an extra 119px of air below the statement.
  return (
    <section className="flex flex-col items-center px-5 pt-5 pb-[139px] text-center">
      <Reveal className="flex flex-col items-center" y={24}>
        <p className="t-h6 text-muted">{challenge.eyebrow}</p>
        <h2 className="t-h2-sm mt-[7px] max-w-[400px] text-black">
          <span className="text-muted">{challenge.muted}</span>
          {challenge.strong}
        </h2>
      </Reveal>
    </section>
  );
}
