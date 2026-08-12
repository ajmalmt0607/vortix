import type { LucideIcon } from "lucide-react";

export type DeltaTone = "positive" | "warning" | "neutral";

export interface StatTile {
  id: string;
  label: string;
  value: string;
  badge?: string;
  badgeTone?: DeltaTone;
}

export interface AIInsight {
  id: string;
  text: string;
}

export interface RevenuePoint {
  label: string;
  value: number;
}

export interface HourlySalesPoint {
  hour: string;
  value: number;
}

export interface FeatureHighlight {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SidebarNavItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

export interface KitchenTicket {
  id: string;
  ticketNumber: string;
  table: string;
  items: string;
  minutesAgo: number;
}

export interface KitchenStatusCount {
  id: string;
  label: string;
  count: number;
  dotColor: string;
}

export interface MenuCategory {
  id: string;
  label: string;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  icon: LucideIcon;
  tint: string;
}

export interface OrderLine {
  id: string;
  name: string;
  qty: number;
  price: number;
}
