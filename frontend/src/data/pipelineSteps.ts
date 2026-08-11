import type { PipelineStep } from "../types/pipeline";

export const pipelineSteps: PipelineStep[] = [
  { id: "order", number: 1, label: "Order", description: "Guest places an order" },
  { id: "pos", number: 2, label: "POS", description: "Sale captured & closed" },
  { id: "inventory", number: 3, label: "Inventory", description: "Ingredients and stock updated" },
  { id: "procurement", number: 4, label: "Procurement", description: "Reorder needs identified" },
  { id: "finance", number: 5, label: "Finance", description: "Revenue and cost updated" },
  { id: "ai", number: 6, label: "AI", description: "Insights and actions generated" },
];
