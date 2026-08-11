import type { PipelineStep } from "../types/pipeline";

export const platformPillars: PipelineStep[] = [
  { id: "pos", number: 1, label: "POS", description: "Orders, tables and payments" },
  { id: "operations", number: 2, label: "Operations", description: "Inventory, kitchen and daily workflows" },
  { id: "procurement", number: 3, label: "Procurement", description: "Suppliers, purchasing and approvals" },
  { id: "finance", number: 4, label: "Finance", description: "Revenue, expenses and financial control" },
  { id: "customers", number: 5, label: "Customers", description: "CRM, loyalty and marketing" },
  { id: "ai", number: 6, label: "AI", description: "Predictions, recommendations and automation" },
];
