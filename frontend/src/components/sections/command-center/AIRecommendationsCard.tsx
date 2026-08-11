import { Sparkles } from "lucide-react";
import {
  commandCenterRecommendations,
  commandCenterRecommendationsBadge,
} from "../../../data/commandCenter";

export function AIRecommendationsCard() {
  return (
    <div className="h-full rounded-xl border border-brand/20 bg-brand-light/50 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-brand" aria-hidden="true" />
          <p className="text-sm font-bold text-ink">AI recommendations</p>
        </div>
        <span className="whitespace-nowrap rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
          {commandCenterRecommendationsBadge}
        </span>
      </div>
      <ul className="mt-4 flex flex-col gap-3">
        {commandCenterRecommendations.map((item) => (
          <li key={item.id} className="flex items-start gap-2.5 text-sm text-ink/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
