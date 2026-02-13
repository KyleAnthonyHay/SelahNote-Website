import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#eeebff] via-[#f4f2ff] to-[#faf9ff]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, transparent 55%, rgba(228, 224, 255, 0.15) 65%, rgba(220, 215, 255, 0.12) 80%, rgba(230, 226, 255, 0.18) 100%)",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <LogoMarquee />
      </div>
    </div>
  );
}
