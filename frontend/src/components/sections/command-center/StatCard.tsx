import type { StatTile } from "../../../types/dashboard";
import { cn } from "../../../lib/cn";

const deltaToneStyles: Record<NonNullable<StatTile["badgeTone"]>, string> = {
  positive: "text-emerald-600",
  warning: "text-amber-600",
  neutral: "text-slate-400",
};

export function StatCard({ label, value, badge, badgeTone = "neutral" }: StatTile) {
  return (
    <div className="rounded-xl border border-ink/8 bg-white p-4">
      <p className="text-sm leading-snug text-slate-500">{label}</p>
      <p className="mt-1.5 text-2xl font-bold text-ink">{value}</p>
      {badge && (
        <p className={cn("mt-1 text-sm font-medium", deltaToneStyles[badgeTone])}>{badge}</p>
      )}
    </div>
  );
}
