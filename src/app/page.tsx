import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Intelligence from "@/components/Intelligence";
import Connect from "@/components/Connect";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-[120px] overflow-x-clip">
        <Hero />
        <Challenge />
        <Benefits />
        <Features />
        <Intelligence />
        <Connect />
        <Reviews />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
