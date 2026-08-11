import { commandCenterActivity } from "../../../data/commandCenter";

export function RecentActivityCard() {
  return (
    <div className="rounded-xl border border-ink/8 bg-white p-5">
      <p className="text-sm font-bold text-ink">Recent activity</p>
      <ul className="mt-4 flex flex-col divide-y divide-ink/8">
        {commandCenterActivity.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
          >
            <p className="text-sm text-ink/80">
              <span className="font-semibold text-ink">{item.actor}</span> {item.description}
            </p>
            <span className="shrink-0 text-xs text-slate-400">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
