import {
  Boxes,
  BrainCircuit,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  Landmark,
  Megaphone,
  ShoppingCart,
  Users,
} from "lucide-react";
import type { SidebarNavItem } from "../types/dashboard";

export const sidebarNav: SidebarNavItem[] = [
  { id: "overview", icon: LayoutDashboard, label: "Overview" },
  { id: "pos", icon: CreditCard, label: "POS" },
  { id: "orders", icon: ClipboardList, label: "Orders" },
  { id: "inventory", icon: Boxes, label: "Inventory" },
  { id: "procurement", icon: ShoppingCart, label: "Procurement" },
  { id: "finance", icon: Landmark, label: "Finance" },
  { id: "people", icon: Users, label: "People" },
  { id: "crm", icon: Megaphone, label: "CRM" },
  { id: "ai-agents", icon: BrainCircuit, label: "AI Agents" },
];
