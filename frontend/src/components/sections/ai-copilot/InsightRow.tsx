import type { CopilotInsight } from "../../../types/copilot";

interface InsightRowProps {
  insight: CopilotInsight;
}

export function InsightRow({ insight }: InsightRowProps) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
      {insight.text}
    </div>
  );
}
