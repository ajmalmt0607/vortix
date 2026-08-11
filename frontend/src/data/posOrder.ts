import type { OrderLine } from "../types/dashboard";

export const posOrderLines: OrderLine[] = [
  { id: "burger", name: "Burger", qty: 1, price: 32 },
  { id: "chicken-bowl", name: "Chicken Bowl", qty: 1, price: 28 },
  { id: "cappuccino", name: "Cappuccino", qty: 1, price: 12.5 },
];

export const TAX_RATE = 0.05;
