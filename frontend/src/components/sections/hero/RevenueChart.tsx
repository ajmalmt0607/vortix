import { motion } from "framer-motion";
import { revenueTrend } from "../../../data/revenueTrend";

const WIDTH = 280;
const HEIGHT = 96;

function getChartPoints() {
  const values = revenueTrend.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const stepX = WIDTH / (revenueTrend.length - 1);

  return revenueTrend.map((point, index) => {
    const normalized = (point.value - min) / (max - min || 1);
    return {
      x: index * stepX,
      y: HEIGHT - normalized * (HEIGHT - 8) - 4,
    };
  });
}

export function RevenueChart() {
  const points = getChartPoints();
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${WIDTH} ${HEIGHT} L 0 ${HEIGHT} Z`;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-ink/80">Revenue · last 12 days</span>
        <span className="whitespace-nowrap text-[11px] text-slate-400">AED thousands</span>
      </div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-24 w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label="Revenue trend over the last 12 days, trending upward"
      >
        <motion.path
          d={areaPath}
          fill="var(--color-brand)"
          fillOpacity={0.08}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
