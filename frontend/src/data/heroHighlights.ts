import { Clock, Share2, Sparkles, Zap } from "lucide-react";
import type { FeatureHighlight } from "../types/dashboard";

export const heroHighlights: FeatureHighlight[] = [
  { id: "pos-first", icon: Zap, title: "POS First", description: "Built for restaurants" },
  { id: "all-in-one", icon: Share2, title: "All-in-One", description: "Connected operations" },
  { id: "ai-powered", icon: Sparkles, title: "AI Powered", description: "Intelligence at every step" },
  { id: "real-time", icon: Clock, title: "Real-time", description: "Live data, always" },
];
