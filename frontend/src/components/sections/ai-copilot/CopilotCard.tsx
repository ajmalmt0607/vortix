import { ArrowRight, CornerDownLeft, Sparkles } from "lucide-react";
import {
  copilotInsights,
  copilotModulesConnected,
  copilotQuestion,
  copilotRecommendedAction,
  copilotSuggestedPrompts,
  copilotSummary,
} from "../../../data/copilot";
import { InsightRow } from "./InsightRow";
import { SuggestedPromptPill } from "./SuggestedPromptPill";

export function CopilotCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-brand">
            <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
          <span className="text-base font-semibold text-white">VORTIX Copilot</span>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/50">
          Connected to {copilotModulesConnected} modules
        </span>
      </div>

      <div className="flex flex-col gap-6 px-6 py-8">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-sky-400 via-indigo-500 to-brand px-5 py-3 text-sm font-medium text-white shadow-lg shadow-brand/20">
            {copilotQuestion}
          </div>
        </div>

        <div className="flex gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-brand">
            <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
          <div className="flex flex-1 flex-col gap-3">
            <p className="text-base font-semibold text-white">{copilotSummary}</p>

            <div className="flex flex-col gap-2">
              {copilotInsights.map((insight) => (
                <InsightRow key={insight.id} insight={insight} />
              ))}
            </div>

            <div className="rounded-xl border border-brand/30 bg-brand/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">
                Recommended Action
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {copilotRecommendedAction.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-brand px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  {copilotRecommendedAction.primaryActionLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
                >
                  {copilotRecommendedAction.secondaryActionLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
          <span className="flex-1 truncate text-sm text-white/40">{copilotQuestion}</span>
          <CornerDownLeft className="h-4 w-4 shrink-0 text-white/30" aria-hidden="true" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {copilotSuggestedPrompts.map((prompt) => (
            <SuggestedPromptPill key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>
    </div>
  );
}
