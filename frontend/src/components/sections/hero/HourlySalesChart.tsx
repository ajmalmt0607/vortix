import { motion } from "framer-motion";
import { hourlySales } from "../../../data/hourlySales";

export function HourlySalesChart() {
  const max = Math.max(...hourlySales.map((point) => point.value));

  return (
    <div>
      <div className="mb-2">
        <span className="text-xs font-semibold text-ink/80">Hourly sales</span>
      </div>
      <div
        className="flex h-24 items-end gap-1.5"
        role="img"
        aria-label="Hourly sales distribution, peaking in the evening"
      >
        {hourlySales.map((point, index) => (
          <motion.div
            key={point.hour}
            initial={{ height: 0 }}
            animate={{ height: `${(point.value / max) * 100}%` }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.05, ease: "easeOut" }}
            className="flex-1 rounded-t-sm bg-brand"
          />
        ))}
      </div>
    </div>
  );
}
