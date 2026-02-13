"use client";

export default function LogoMarquee() {
  const logoSet = (
    <>
      <LogoItem>
        <WebflowLogo />
      </LogoItem>
      <LogoItem>
        <GustoLogo />
      </LogoItem>
      <LogoItem>
        <StanfordLogo />
      </LogoItem>
      <LogoItem>
        <YCLogo />
      </LogoItem>
      <LogoItem>
        <CanvaLogo />
      </LogoItem>
      <LogoItem>
        <CoinbaseLogo />
      </LogoItem>
    </>
  );

  return (
    <section className="pt-4 pb-20 flex flex-col items-center">
      <p className="text-[12px] text-[#b0b0b0] tracking-[0.03em] mb-8 font-normal">
        Trusted by 50,000+ users
      </p>

      <div className="relative w-full max-w-[850px] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f6f4ff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f6ff] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {logoSet}
          {logoSet}
        </div>
      </div>
    </section>
  );
}

function LogoItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center mx-[38px] shrink-0 opacity-[0.35] grayscale">
      {children}
    </div>
  );
}

function WebflowLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="24" height="16" viewBox="0 0 28 18" fill="none">
        <path d="M20.8 0.5L16.2 12L13.5 0.5H8L2.5 17.5H7.5L10.2 6L13 17.5H18L24.8 0.5H20.8Z" fill="#1a1a2e" />
      </svg>
      <span className="text-[17px] font-bold text-[#1a1a2e] tracking-[-0.02em]">Webflow</span>
    </div>
  );
}

function GustoLogo() {
  return (
    <span
      className="text-[21px] text-[#1a1a2e] tracking-[-0.01em]"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 600 }}
    >
      gusto
    </span>
  );
}

function StanfordLogo() {
  return (
    <span
      className="text-[19px] text-[#1a1a2e] tracking-[0.01em]"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700 }}
    >
      Stanford
    </span>
  );
}

function YCLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[26px] h-[26px] bg-[#f06529] rounded-[4px] flex items-center justify-center">
        <span className="text-white text-[14px] font-bold leading-none">Y</span>
      </div>
      <span className="text-[15px] font-medium text-[#1a1a2e] tracking-[-0.01em]">Combinator</span>
    </div>
  );
}

function CanvaLogo() {
  return (
    <span className="text-[22px] font-bold text-[#1a1a2e] tracking-[-0.02em] italic">
      Canva
    </span>
  );
}

function CoinbaseLogo() {
  return (
    <div className="flex items-center gap-0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#1a1a2e" strokeWidth="2.5" fill="none" />
        <path d="M14.5 9.5C13.8 8.8 13 8.5 12 8.5C10.1 8.5 8.5 10.1 8.5 12C8.5 13.9 10.1 15.5 12 15.5C13 15.5 13.8 15.2 14.5 14.5" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
