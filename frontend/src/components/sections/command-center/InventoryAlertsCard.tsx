import { AlertTriangle } from "lucide-react";
import { commandCenterInventoryAlerts } from "../../../data/commandCenter";
import { cn } from "../../../lib/cn";

export function InventoryAlertsCard() {
  return (
    <div className="h-full rounded-xl border border-ink/8 bg-white p-5">
      <p className="text-sm font-bold text-ink">Inventory alerts</p>
      <ul className="mt-4 flex flex-col gap-3.5">
        {commandCenterInventoryAlerts.map((alert) => (
          <li key={alert.id} className="flex items-start gap-2.5">
            <AlertTriangle
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                alert.severity === "critical" ? "text-red-500" : "text-amber-500",
              )}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-ink">{alert.name}</p>
              <p className="text-xs text-slate-400">
                {alert.cover} · {alert.branch}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
