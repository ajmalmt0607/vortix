import type { FooterColumn } from "../types/footer";

export const footerColumns: FooterColumn[] = [
  {
    id: "platform",
    title: "Platform",
    links: [
      { label: "POS", href: "#platform" },
      { label: "Inventory", href: "#platform" },
      { label: "Procurement", href: "#platform" },
      { label: "Finance", href: "#platform" },
    ],
  },
  {
    id: "solutions",
    title: "Solutions",
    links: [
      { label: "Single location", href: "#solutions" },
      { label: "Multi-brand", href: "#solutions" },
      { label: "Enterprise", href: "#solutions" },
      { label: "Cloud kitchens", href: "#solutions" },
    ],
  },
  {
    id: "ai",
    title: "AI",
    links: [
      { label: "Copilot", href: "#ai" },
      { label: "AI agents", href: "#ai" },
      { label: "Digital twin", href: "#ai" },
      { label: "Forecasting", href: "#ai" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
      { label: "Press", href: "#press" },
    ],
  },
];
