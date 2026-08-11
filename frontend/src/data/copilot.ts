import type {
  CopilotInsight,
  CopilotRecommendedAction,
  CopilotSuggestedPrompt,
} from "../types/copilot";

export const copilotModulesConnected = 7;

export const copilotQuestion = "Why did food cost increase this week?";

export const copilotSummary = "Food cost increased by 4.2% this week.";

export const copilotInsights: CopilotInsight[] = [
  { id: "chicken-price", text: "Chicken prices increased 8.4%" },
  { id: "branch-waste", text: "Waste increased 12% at Branch 03" },
  { id: "purchase-orders", text: "14 purchase orders were above the normal price" },
];

export const copilotRecommendedAction: CopilotRecommendedAction = {
  description:
    "Review supplier pricing for Al Noor Foods and investigate waste at Branch 03.",
  primaryActionLabel: "Review suppliers",
  secondaryActionLabel: "Open Branch 03",
};

export const copilotSuggestedPrompts: CopilotSuggestedPrompt[] = [
  { id: "food-cost", text: "Why did food cost increase this week?", active: true },
  { id: "underperforming-branch", text: "Which branch is underperforming today?" },
  { id: "weekend-order", text: "What should I order for the weekend?" },
];
