import {
  BarChart3,
  Boxes,
  Contact,
  CreditCard,
  Landmark,
  LayoutDashboard,
  Megaphone,
  Settings,
  ShoppingCart,
  BrainCircuit,
  Users,
} from "lucide-react";
import type { StatTile, RevenuePoint, HourlySalesPoint } from "../types/dashboard";
import type {
  ActivityItem,
  CommandCenterNavItem,
  InventoryAlert,
  RecommendationItem,
} from "../types/commandCenter";

export const commandCenterWorkspace = {
  name: "Dubai Restaurant Group",
  scope: "All branches · Today",
  syncedLabel: "Synced 12s ago",
};

export const commandCenterNav: CommandCenterNavItem[] = [
  { id: "overview", icon: LayoutDashboard, label: "Overview" },
  { id: "pos", icon: CreditCard, label: "POS" },
  { id: "inventory", icon: Boxes, label: "Inventory" },
  { id: "procurement", icon: ShoppingCart, label: "Procurement" },
  { id: "finance", icon: Landmark, label: "Finance" },
  { id: "people", icon: Users, label: "People" },
  { id: "crm", icon: Contact, label: "CRM" },
  { id: "marketing", icon: Megaphone, label: "Marketing" },
  { id: "ai-command", icon: BrainCircuit, label: "AI Command" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export const commandCenterStats: StatTile[] = [
  { id: "revenue", label: "Today's Revenue", value: "AED 48,620", badge: "+12.4%", badgeTone: "positive" },
  { id: "orders", label: "Orders", value: "1,284", badge: "+6.1%", badgeTone: "positive" },
  { id: "food-cost", label: "Food Cost", value: "28.4%", badge: "+1.2%", badgeTone: "warning" },
  { id: "gross-margin", label: "Gross Margin", value: "64.2%", badge: "-0.8%", badgeTone: "warning" },
  { id: "low-stock", label: "Low Stock", value: "12", badge: "items", badgeTone: "warning" },
  { id: "pending-approvals", label: "Pending Approvals", value: "8", badge: "open", badgeTone: "warning" },
];

export const commandCenterRevenueTrend: RevenuePoint[] = [
  { label: "D1", value: 20 },
  { label: "D2", value: 26 },
  { label: "D3", value: 22 },
  { label: "D4", value: 30 },
  { label: "D5", value: 26 },
  { label: "D6", value: 34 },
  { label: "D7", value: 30 },
  { label: "D8", value: 38 },
  { label: "D9", value: 34 },
  { label: "D10", value: 42 },
  { label: "D11", value: 38 },
  { label: "D12", value: 46 },
  { label: "D13", value: 42 },
  { label: "D14", value: 50 },
];

export const commandCenterRevenueBadge = "+12.4%";

export const commandCenterSalesByHour: HourlySalesPoint[] = [
  { hour: "11:00", value: 12 },
  { hour: "12:00", value: 16 },
  { hour: "13:00", value: 20 },
  { hour: "14:00", value: 18 },
  { hour: "15:00", value: 24 },
  { hour: "16:00", value: 30 },
  { hour: "17:00", value: 26 },
  { hour: "18:00", value: 36 },
  { hour: "19:00", value: 42 },
  { hour: "20:00", value: 48 },
  { hour: "21:00", value: 40 },
  { hour: "22:00", value: 33 },
  { hour: "23:00", value: 27 },
  { hour: "00:00", value: 21 },
];

export const commandCenterSalesPeakLabel = "Peak 19:00 — 21:00";

export const commandCenterFoodCostTrend: RevenuePoint[] = [
  { label: "T-6", value: 33 },
  { label: "T-5", value: 30 },
  { label: "T-4", value: 32 },
  { label: "T-3", value: 29 },
  { label: "T-2", value: 30 },
  { label: "T-1", value: 27 },
  { label: "Today", value: 24 },
];

export const commandCenterFoodCostValue = "28.4%";

export const commandCenterInventoryAlerts: InventoryAlert[] = [
  { id: "chicken-breast", name: "Chicken breast", cover: "1.8 days cover", branch: "Branch 03", severity: "critical" },
  { id: "mozzarella", name: "Mozzarella", cover: "2.4 days cover", branch: "Branch 01", severity: "warning" },
  { id: "cola-330", name: "Cola 330ml", cover: "3.1 days cover", branch: "Branch 02", severity: "warning" },
];

export const commandCenterRecommendationsBadge = "3 AI actions recommended";

export const commandCenterRecommendations: RecommendationItem[] = [
  { id: "raise-chicken-po", text: "Raise chicken PO by 15% before Thursday" },
  { id: "renegotiate-pricing", text: "Renegotiate Al Noor Foods pricing (+8.4%)" },
  { id: "investigate-waste", text: "Investigate 12% waste spike at Branch 03" },
];

export const commandCenterActivity: ActivityItem[] = [
  { id: "po-4821", actor: "Layla H.", description: "approved PO #4821 · AED 6,340", time: "2m" },
  { id: "shift-branch-02", actor: "POS · Branch 02", description: "closed shift with AED 12,410", time: "18m" },
  { id: "finance-agent", actor: "Finance Agent", description: "matched 42 invoices automatically", time: "41m" },
  { id: "recipe-cost", actor: "Omar K.", description: "adjusted recipe cost for Shawarma Plate", time: "1h" },
];
