import { Container } from "../ui/Container";
import { CopilotCard } from "./ai-copilot/CopilotCard";

export function AICopilot() {
  return (
    <section id="ai" className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[56rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/20 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            VORTIX AI
          </span>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your restaurant has an AI co-pilot.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/60">
            Ask questions in natural language. VORTIX analyzes your restaurant data
            and turns insights into actions.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <CopilotCard />
        </div>
      </Container>
    </section>
  );
}
