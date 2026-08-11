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
