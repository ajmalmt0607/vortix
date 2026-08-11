import { sidebarNav } from "../../../data/sidebarNav";
import { dashboardStats } from "../../../data/dashboardStats";
import { cn } from "../../../lib/cn";
import { DashboardStatCard } from "./DashboardStatCard";
import { RevenueChart } from "./RevenueChart";
import { HourlySalesChart } from "./HourlySalesChart";

export function CommandCenterCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl shadow-ink/10">
      <div className="flex items-center gap-2 border-b border-ink/8 bg-slate-50/60 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 text-sm font-medium text-ink/60">VORTIX · Command Center</span>
      </div>

      <div className="flex">
        <nav
          aria-label="Command Center navigation"
          className="hidden w-36 shrink-0 flex-col gap-0.5 border-r border-ink/8 p-3 sm:flex"
        >
          {sidebarNav.map((item, index) => {
            const Icon = item.icon;
            const active = index === 0;
            return (
              <span
                key={item.id}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium",
                  active ? "bg-brand-light text-brand" : "text-ink/60",
                )}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {item.label}
              </span>
            );
          })}
        </nav>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
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
    </div>
  );
}
