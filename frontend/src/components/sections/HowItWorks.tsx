import { TrendingUp } from "lucide-react";
import { Container } from "../ui/Container";
import { pipelineSteps } from "../../data/pipelineSteps";
import { pipelineTags } from "../../data/pipelineTags";
import { StepCard } from "./shared/StepCard";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Operational graph
          </span>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Every transaction creates intelligence.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-500">
            Every restaurant transaction becomes connected operational data — helping
            teams understand what happened, why it happened and what to do next.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-bold uppercase tracking-wide">
            {pipelineSteps.map((step, index) => (
              <span key={step.id} className="flex items-center gap-2">
                <span className={step.id === "ai" ? "text-brand" : "text-ink"}>
                  {step.label}
                </span>
                {index < pipelineSteps.length - 1 && (
                  <span className="text-brand" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-500">One transaction. Six connected systems.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {pipelineSteps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              showConnector={index < pipelineSteps.length - 1}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {pipelineTags.map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-slate-600"
            >
              <TrendingUp className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {tag.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
