import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { Modules } from "../components/sections/Modules";
// import { HowItWorks } from "../components/sections/HowItWorks";
import { ConnectedPlatform } from "../components/sections/ConnectedPlatform";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modules />
        {/* <HowItWorks /> */}
        <ConnectedPlatform />
      </main>
    </>
  );
}
