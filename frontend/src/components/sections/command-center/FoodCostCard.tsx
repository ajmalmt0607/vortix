import { motion } from "framer-motion";
import {
  commandCenterFoodCostTrend,
  commandCenterFoodCostValue,
} from "../../../data/commandCenter";

const WIDTH = 220;
const HEIGHT = 70;

function getChartPoints() {
  const values = commandCenterFoodCostTrend.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const stepX = WIDTH / (commandCenterFoodCostTrend.length - 1);

  return commandCenterFoodCostTrend.map((point, index) => {
    const normalized = (point.value - min) / (max - min || 1);
    return {
      x: index * stepX,
      y: HEIGHT - normalized * (HEIGHT - 8) - 4,
    };
  });
}

export function FoodCostCard() {
  const points = getChartPoints();
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${WIDTH} ${HEIGHT} L 0 ${HEIGHT} Z`;

  return (
    <div className="flex h-full flex-col rounded-xl border border-ink/8 bg-white p-5">
      <p className="text-sm font-bold text-ink">Food cost %</p>
      <p className="text-xs text-slate-400">7-day trend</p>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mt-3 h-16 w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label="Food cost percentage over the last 7 days, trending downward"
      >
        <motion.path
          d={areaPath}
          fill="var(--color-brand)"
          fillOpacity={0.1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>
      <p className="mt-2 text-2xl font-bold text-ink">{commandCenterFoodCostValue}</p>
    </div>
  );
}
