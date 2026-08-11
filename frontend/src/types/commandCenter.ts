import type { LucideIcon } from "lucide-react";

export interface CommandCenterNavItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

export type AlertSeverity = "critical" | "warning";

export interface InventoryAlert {
  id: string;
  name: string;
  cover: string;
  branch: string;
  severity: AlertSeverity;
}

export interface RecommendationItem {
  id: string;
  text: string;
}

export interface ActivityItem {
  id: string;
  actor: string;
  description: string;
  time: string;
}
