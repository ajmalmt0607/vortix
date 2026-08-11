import type { StatTile } from "../types/dashboard";

export const dashboardStats: StatTile[] = [
  { id: "revenue", label: "Revenue", value: "AED 48,620", badge: "+12.4%", badgeTone: "positive" },
  { id: "orders", label: "Orders", value: "1,284", badge: "+6.1%", badgeTone: "positive" },
  { id: "margin", label: "Gross Margin", value: "28.4%", badge: "+1.2%", badgeTone: "positive" },
  { id: "low-stock", label: "Low Stock", value: "12", badge: "12 items", badgeTone: "warning" },
  { id: "occupancy", label: "Occupancy", value: "84%", badge: "Peak 21:00", badgeTone: "neutral" },
  { id: "avg-ticket", label: "Avg Ticket", value: "AED 37.9", badge: "+3.8%", badgeTone: "positive" },
];
