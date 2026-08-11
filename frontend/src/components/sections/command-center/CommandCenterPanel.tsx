import { commandCenterStats } from "../../../data/commandCenter";
import { AIRecommendationsCard } from "./AIRecommendationsCard";
import { FoodCostCard } from "./FoodCostCard";
import { InventoryAlertsCard } from "./InventoryAlertsCard";
import { RecentActivityCard } from "./RecentActivityCard";
import { RevenueTrendCard } from "./RevenueTrendCard";
import { SalesByHourCard } from "./SalesByHourCard";
import { SidebarNav } from "./SidebarNav";
import { StatCard } from "./StatCard";
import { TopBar } from "./TopBar";

export function CommandCenterPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl shadow-ink/10">
      <TopBar />

      <div className="flex">
        <SidebarNav />

        <div className="flex flex-1 flex-col gap-5 p-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {commandCenterStats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <RevenueTrendCard />
            </div>
            <div className="lg:col-span-2">
              <SalesByHourCard />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <FoodCostCard />
            <InventoryAlertsCard />
            <AIRecommendationsCard />
          </div>

          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
}
