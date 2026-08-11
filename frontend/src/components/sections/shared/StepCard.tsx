import type { PipelineStep } from "../../../types/pipeline";

interface StepCardProps {
  step: PipelineStep;
  showConnector: boolean;
}

export function StepCard({ step, showConnector }: StepCardProps) {
  return (
    <div className="relative flex h-full flex-col items-center gap-3 rounded-2xl border border-ink/8 bg-white px-4 py-6 text-center">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
        {step.number}
      </span>
      <h3 className="text-xs font-bold uppercase tracking-wide text-ink">{step.label}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>

      {showConnector && (
        <span
          aria-hidden="true"
          className="absolute -right-4 top-10.5 hidden h-0 w-4 -translate-y-1/2 border-t-2 border-dashed border-brand/50 lg:block"
        />
      )}
    </div>
  );
}
