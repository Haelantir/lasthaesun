import type { RouterResult } from "../../../shared/types";

export function makeRouterResult(overrides: Partial<RouterResult> = {}): RouterResult {
  return {
    route: "nano",
    category: "daily_life",
    subcategory: "general",
    riskLevel: "low",
    complexity: "simple",
    ambiguity: "low",
    requiresCurrentInfo: false,
    requiresWeb: false,
    requiresCalculation: false,
    requiresClarification: false,
    clarificationQuestion: null,
    seniorTip: null,
    reasonCode: "SIMPLE_LOW_RISK",
    ...overrides,
  };
}
