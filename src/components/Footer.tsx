import { footer, links } from "@/data/content";
import { Button, CircleButton } from "./ui/Button";
import { LogoMark } from "./ui/LogoMark";
import { FacebookIcon, InstagramIcon } from "./icons";
import { Reveal } from "./motion/Reveal";

export default function Footer() {
  return (
    <footer className="mt-[120px] px-5 pt-[100px] pb-[100px]">
      <Reveal className="mx-auto max-w-[1160px]" y={20} amount={0.15}>
        <div className="flex items-start justify-between gap-10 max-tablet:flex-col">
          <div className="max-w-[400px]">
            <a href="#hero" className="flex items-center gap-2" aria-label="SelahNote home">
              <LogoMark size={34} />
              <span className="t-logo text-[#171717]">SelahNote</span>
            </a>
            <p className="t-xs mt-[22px] text-muted">{footer.description}</p>
            <div className="mt-5 flex items-center gap-3">
              <CircleButton as="a" href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-2xl">
                <FacebookIcon />
              </CircleButton>
              <CircleButton as="a" href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-2xl">
                <InstagramIcon />
              </CircleButton>
              <Button variant="secondary" href={links.email} target="_blank" rel="noreferrer">
                Contact
              </Button>
            </div>
          </div>

          <div className="flex gap-20 max-tablet:gap-14">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="t-sm text-black">{col.title}</p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={"external" in l && l.external ? "_blank" : undefined}
                        rel={"external" in l && l.external ? "noreferrer" : undefined}
                        className="t-xs text-muted transition-colors hover:text-brand"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[30px] h-px w-full bg-line" />

        <div className="mt-[31px] flex items-center justify-between gap-4 max-tablet:flex-col max-tablet:items-start">
          <p className="t-xs text-muted">{footer.copyright}</p>
          <p className="t-xs text-muted">
            {footer.madeWith}
            <a href={links.author} target="_blank" rel="noreferrer" className="text-black">
              {footer.author}
            </a>
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
