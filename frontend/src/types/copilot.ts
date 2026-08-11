export interface CopilotInsight {
  id: string;
  text: string;
}

export interface CopilotRecommendedAction {
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
}

export interface CopilotSuggestedPrompt {
  id: string;
  text: string;
  active?: boolean;
}
