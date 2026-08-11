import { Container } from "../ui/Container";
import { platformPillars } from "../../data/platformPillars";
import { StepCard } from "./shared/StepCard";

export function ConnectedPlatform() {
  return (
    <section id="connected-platform" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            One connected platform
          </span>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            From restaurant floor to business control.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-500">
            VORTIX brings front-of-house, back-office and AI operations together so
            restaurant teams can run the entire business from one connected system.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {platformPillars.map((pillar, index) => (
            <StepCard
              key={pillar.id}
              step={pillar}
              showConnector={index < platformPillars.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
