import {
  Banknote,
  BrainCircuit,
  Boxes,
  ChefHat,
  CreditCard,
  Landmark,
  Megaphone,
  QrCode,
  ShoppingCart,
  Truck,
  Users,
  Utensils,
} from "lucide-react";
import type { ModuleItem } from "../types/modules";

export const modules: ModuleItem[] = [
  // Restaurant experience
  {
    id: "pos",
    icon: CreditCard,
    title: "POS",
    description: "Run orders, tables, payments and daily sales from one intelligent point of sale.",
  },
  {
    id: "payments",
    icon: Banknote,
    title: "Payments",
    description: "Accept payments, split bills and manage every transaction in one place.",
  },
  {
    id: "self-ordering",
    icon: QrCode,
    title: "Self Ordering",
    description: "Let guests order directly through QR and digital ordering channels.",
  },
  {
    id: "waiter",
    icon: Utensils,
    title: "Waiter",
    description: "Give restaurant teams a fast interface for tables, orders and service.",
  },
  {
    id: "kitchen",
    icon: ChefHat,
    title: "Kitchen",
    description: "Send orders directly to the kitchen and track preparation in real time.",
  },
  {
    id: "online-ordering",
    icon: Truck,
    title: "Online Ordering",
    description: "Manage pickup, delivery and digital orders from one connected system.",
  },
  // Operations & intelligence
  {
    id: "inventory",
    icon: Boxes,
    title: "Inventory",
    description: "Track stock, recipes, waste and food cost in real time.",
  },
  {
    id: "procurement",
    icon: ShoppingCart,
    title: "Procurement",
    description: "Manage suppliers, purchasing and approval workflows.",
  },
  {
    id: "finance",
    icon: Landmark,
    title: "Finance",
    description: "Connect sales, expenses, invoices and financial operations.",
  },
  {
    id: "people",
    icon: Users,
    title: "People",
    description: "Manage employees, attendance, roles and approvals.",
  },
  {
    id: "crm",
    icon: Megaphone,
    title: "CRM & Marketing",
    description: "Understand customers and create smarter campaigns.",
  },
  {
    id: "ai-agents",
    icon: BrainCircuit,
    title: "AI Agents",
    description: "Monitor operations, detect issues and recommend intelligent actions.",
  },
];
