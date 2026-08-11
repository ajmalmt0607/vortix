import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { Modules } from "../components/sections/Modules";
// import { HowItWorks } from "../components/sections/HowItWorks";
import { ConnectedPlatform } from "../components/sections/ConnectedPlatform";
import { AICopilot } from "../components/sections/AICopilot";
import { CommandCenter } from "../components/sections/CommandCenter";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <AICopilot />
        <CommandCenter />
        {/* <HowItWorks /> */}
        <ConnectedPlatform />
      </main>
    </>
  );
}
