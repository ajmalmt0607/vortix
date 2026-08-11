import { cn } from "../../../lib/cn";
import type { CopilotSuggestedPrompt } from "../../../types/copilot";

interface SuggestedPromptPillProps {
  prompt: CopilotSuggestedPrompt;
}

export function SuggestedPromptPill({ prompt }: SuggestedPromptPillProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
        prompt.active
          ? "border-white bg-white text-ink"
          : "border-white/15 text-white/60 hover:border-white/30 hover:text-white",
      )}
    >
      {prompt.text}
    </button>
  );
}
