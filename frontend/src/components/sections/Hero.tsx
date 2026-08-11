import { Container } from "../ui/Container";
import { HeroContent } from "./hero/HeroContent";
import { HeroDashboard } from "./hero/HeroDashboard";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-white py-12"
    >
      <Container className="-translate-y-4 sm:-translate-y-6 lg:-translate-y-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <HeroContent />
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}
