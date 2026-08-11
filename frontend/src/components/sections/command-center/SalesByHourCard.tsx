import { motion } from "framer-motion";
import {
  commandCenterSalesByHour,
  commandCenterSalesPeakLabel,
} from "../../../data/commandCenter";
import { cn } from "../../../lib/cn";

export function SalesByHourCard() {
  const max = Math.max(...commandCenterSalesByHour.map((point) => point.value));

  return (
    <div className="h-full rounded-xl border border-ink/8 bg-white p-5">
      <div className="mb-4">
        <p className="text-sm font-bold text-ink">Sales by hour</p>
        <p className="text-xs text-slate-400">{commandCenterSalesPeakLabel}</p>
      </div>
      <div
        className="flex h-40 items-end gap-1.5"
        role="img"
        aria-label="Sales by hour, peaking in the evening"
      >
        {commandCenterSalesByHour.map((point, index) => (
          <motion.div
            key={point.hour}
            initial={{ height: 0 }}
            animate={{ height: `${(point.value / max) * 100}%` }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.04, ease: "easeOut" }}
            className={cn("flex-1 rounded-t-sm", point.value === max ? "bg-brand" : "bg-brand/30")}
          />
        ))}
      </div>
    </div>
  );
}
