import { Coffee, CupSoda, Pizza, Salad, Sandwich } from "lucide-react";
import type { MenuCategory, MenuItem } from "../types/dashboard";

export const menuCategories: MenuCategory[] = [
  { id: "burgers", label: "Burgers" },
  { id: "pizza", label: "Pizza" },
  { id: "salads", label: "Salads" },
  { id: "drinks", label: "Drinks" },
  { id: "desserts", label: "Desserts" },
];

export const menuItems: MenuItem[] = [
  {
    id: "beef-burger",
    categoryId: "burgers",
    name: "Beef Burger",
    price: 32,
    icon: Sandwich,
    tint: "bg-amber-50 text-amber-600",
  },
  {
    id: "chicken-bowl",
    categoryId: "salads",
    name: "Chicken Bowl",
    price: 28,
    icon: Salad,
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "margherita-pizza",
    categoryId: "pizza",
    name: "Margherita Pizza",
    price: 36,
    icon: Pizza,
    tint: "bg-red-50 text-red-600",
  },
  {
    id: "caesar-salad",
    categoryId: "salads",
    name: "Caesar Salad",
    price: 24,
    icon: Salad,
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "cappuccino",
    categoryId: "drinks",
    name: "Cappuccino",
    price: 12.5,
    icon: Coffee,
    tint: "bg-orange-50 text-orange-700",
  },
  {
    id: "fresh-juice",
    categoryId: "drinks",
    name: "Fresh Juice",
    price: 15,
    icon: CupSoda,
    tint: "bg-yellow-50 text-yellow-600",
  },
];
