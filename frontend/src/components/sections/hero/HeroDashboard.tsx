import { motion } from "framer-motion";
import { Bell, Sparkles, TrendingUp } from "lucide-react";
import { dashboardStats } from "../../../data/dashboardStats";
import { aiInsights } from "../../../data/aiInsights";
import { DashboardStatCard } from "./DashboardStatCard";
import { RevenueChart } from "./RevenueChart";
import { HourlySalesChart } from "./HourlySalesChart";
import { FloatingCard } from "./FloatingCard";

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="rounded-2xl border border-ink/10 bg-white shadow-2xl shadow-ink/10">
        <div className="flex items-center gap-2 border-b border-ink/8 bg-slate-50/60 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-sm font-medium text-ink/60">
            VORTIX · Command Center
          </span>
        </div>

        <div className="flex flex-col gap-3 p-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {dashboardStats.map((stat) => (
              <DashboardStatCard key={stat.id} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-5 rounded-xl border border-ink/8 p-4 sm:col-span-3">
              <RevenueChart />
            </div>
            <div className="col-span-5 rounded-xl border border-ink/8 p-4 sm:col-span-2">
              <HourlySalesChart />
            </div>
          </div>
        </div>
      </div>

      <FloatingCard
        className="top-3 right-3 w-44 sm:w-52 md:-top-8 md:-right-8 md:w-64"
        entranceDelay={0.9}
      >
        <div className="p-3.5 md:p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand md:h-7 md:w-7">
              <Sparkles className="h-3 w-3 text-white md:h-3.5 md:w-3.5" />
            </span>
            <span className="text-xs font-semibold text-ink md:text-sm">
              AI detected 3 opportunities
            </span>
          </div>
          <ul className="mt-2.5 hidden space-y-1.5 md:block">
            {aiInsights.map((insight) => (
              <li key={insight.id} className="flex items-start gap-2 text-xs text-slate-500">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {insight.text}
              </li>
            ))}
          </ul>
        </div>
      </FloatingCard>

      <FloatingCard
        className="hidden md:-bottom-8 md:-left-8 md:block"
        entranceDelay={1.1}
        floatDelay={0.6}
      >
        <div className="flex items-center gap-3 p-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </span>
          <div>
            <p className="text-xs text-slate-500">Tomorrow's demand</p>
            <p className="text-base font-bold text-brand">+18% expected</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="hidden md:-bottom-6 md:right-8 md:block"
        entranceDelay={1.3}
        floatDelay={1.2}
      >
        <div className="flex items-center gap-2 px-4 py-2.5">
          <Bell className="h-3.5 w-3.5 text-ink/60" />
          <span className="text-xs font-medium text-ink/70">3 actions recommended</span>
        </div>
      </FloatingCard>
    </motion.div>
  );
}
