import { motion } from "framer-motion";
import {
  commandCenterRevenueBadge,
  commandCenterRevenueTrend,
} from "../../../data/commandCenter";

const WIDTH = 600;
const HEIGHT = 180;

function getChartPoints() {
  const values = commandCenterRevenueTrend.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const stepX = WIDTH / (commandCenterRevenueTrend.length - 1);

  return commandCenterRevenueTrend.map((point, index) => {
    const normalized = (point.value - min) / (max - min || 1);
    return {
      x: index * stepX,
      y: HEIGHT - normalized * (HEIGHT - 16) - 8,
    };
  });
}

export function RevenueTrendCard() {
  const points = getChartPoints();
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${WIDTH} ${HEIGHT} L 0 ${HEIGHT} Z`;

  return (
    <div className="h-full rounded-xl border border-ink/8 bg-white p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-ink">Revenue trend</p>
          <p className="text-xs text-slate-400">Last 14 days · all branches</p>
        </div>
        <span className="whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          {commandCenterRevenueBadge}
        </span>
      </div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-40 w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label="Revenue trend over the last 14 days, trending upward"
      >
        <motion.path
          d={areaPath}
          fill="var(--color-brand)"
          fillOpacity={0.12}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
