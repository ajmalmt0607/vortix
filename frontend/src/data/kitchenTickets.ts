import type { KitchenStatusCount, KitchenTicket } from "../types/dashboard";

export const kitchenTickets: KitchenTicket[] = [
  { id: "1048", ticketNumber: "#1048", table: "Table 12", items: "Burger, Chicken Bowl", minutesAgo: 5 },
  { id: "1047", ticketNumber: "#1047", table: "Table 08", items: "Pasta, Garlic Bread", minutesAgo: 8 },
  { id: "1046", ticketNumber: "#1046", table: "Takeaway", items: "Pizza, Lemonade", minutesAgo: 12 },
];

export const kitchenStatusCounts: KitchenStatusCount[] = [
  { id: "new", label: "New Orders", count: 4, dotColor: "bg-brand" },
  { id: "preparing", label: "Preparing", count: 3, dotColor: "bg-amber-500" },
  { id: "ready", label: "Ready", count: 2, dotColor: "bg-emerald-500" },
];
