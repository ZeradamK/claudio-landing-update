"use client";
import NavBar from "../components/NavBar";
import SmallScreenNav from "../components/smallScreenNav";
import DotsBg from "../components/dots-bg";
import Hero from "../components/Hero";
import HeroScrollFeatures from "../components/hero-scroll-features";
import FeaturesClaudio from "../components/features-claudio";
import MoreFeatures from "../components/more-features";
import HeroTwo from "../components/hero-two";
import { Footer2 } from "@/components/footer2";


export default function Home() {
  return (
    <>
      {/* Desktop NavBar (md and up) */}
      <div className="hidden md:block fixed w-full z-50 transition-opacity duration-300 ease-in-out">
        <NavBar />
      </div>
      {/* Small Screen NavBar (below md) */}
      <div className="block md:hidden fixed w-full z-50 transition-opacity duration-300 ease-in-out">
        <SmallScreenNav />
      </div>
      <main className="relative z-10">
        <Hero />
        <div style={{ marginTop: 150 }}>
          <HeroTwo />
        </div>
        <div className="mt-[-50px]">
          <HeroScrollFeatures />
        </div>
        <div className="mt-[-100px]">
          <FeaturesClaudio />
        </div>
        <div style={{ marginTop: 100 }} className="flex justify-center items-center w-full">
          <MoreFeatures />
        </div>
      </main>
      <div className="fixed inset-0 w-full h-full z-[-1000] pointer-events-none">
        <DotsBg />
    </div>
      <Footer2 />
    </>
  );
}
