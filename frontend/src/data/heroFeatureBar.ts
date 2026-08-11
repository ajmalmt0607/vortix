import { Boxes, Sparkles, Utensils, Wallet } from "lucide-react";
import type { FeatureHighlight } from "../types/dashboard";

export const heroFeatureBar: FeatureHighlight[] = [
  {
    id: "pos-ordering",
    icon: Utensils,
    title: "POS & Ordering",
    description: "Faster service, happier guests",
  },
  {
    id: "inventory-procurement",
    icon: Boxes,
    title: "Inventory & Procurement",
    description: "Lower food cost, less waste",
  },
  {
    id: "finance-people",
    icon: Wallet,
    title: "Finance & People",
    description: "Complete business control",
  },
  {
    id: "ai-agents",
    icon: Sparkles,
    title: "AI Agents",
    description: "Insights and actions, automatically",
  },
];
