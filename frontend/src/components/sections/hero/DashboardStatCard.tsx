import type { StatTile } from "../../../types/dashboard";
import { cn } from "../../../lib/cn";

const badgeToneStyles: Record<NonNullable<StatTile["badgeTone"]>, string> = {
  positive: "bg-emerald-50 text-emerald-600",
  warning: "bg-amber-50 text-amber-600",
  neutral: "bg-slate-100 text-slate-600",
};

export function DashboardStatCard({ label, value, badge, badgeTone = "neutral" }: StatTile) {
  return (
    <div className="rounded-xl border border-ink/8 bg-white p-3.5">
      <p className="truncate text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <div className="mt-1.5 flex items-center justify-between gap-2">
        <span className="text-lg font-bold text-ink">{value}</span>
        {badge && (
          <span
            className={cn(
              "whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold",
              badgeToneStyles[badgeTone],
            )}
          >
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}
