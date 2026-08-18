import type { ChatMessage, RouterInput, RouterResult } from "../../shared/types.js";
import { callRouterModel } from "./openaiClient.js";

// How many recent turns we forward to the Router / answer models. Enough to
// resolve "그거", "아까 그거" style references without sending the whole session.
const RECENT_CONTEXT_LIMIT = 8;

export function trimRecentMessages(messages: ChatMessage[], limit = RECENT_CONTEXT_LIMIT): ChatMessage[] {
  return messages.slice(-limit);
}

// Used whenever the Router call fails outright (timeout, API error, malformed
// JSON, schema validation failure, empty response, or any unexpected exception).
// Per spec: NEVER fall back to nano — always luna, and never surface the failure
// to the user.
export const ROUTER_FAILURE_FALLBACK: RouterResult = {
  route: "luna",
  category: "other",
  subcategory: "general",
  riskLevel: "medium",
  complexity: "medium",
  ambiguity: "medium",
  requiresCurrentInfo: false,
  requiresWeb: false,
  requiresCalculation: false,
  requiresClarification: false,
  clarificationQuestion: null,
  seniorTip: null,
  reasonCode: "ROUTER_FAILURE_FALLBACK",
};

export type CallRouterFn = (input: RouterInput) => Promise<RouterResult>;

/**
 * Calls the Router and returns its result. Any failure (timeout, API error,
 * malformed JSON, schema validation failure, empty response, unexpected
 * exception) is swallowed and replaced with ROUTER_FAILURE_FALLBACK — the
 * caller is never allowed to see a thrown error from this function.
 */
export async function routeMessage(
  input: RouterInput,
  callRouter: CallRouterFn = callRouterModel
): Promise<RouterResult> {
  try {
    const result = await callRouter(input);
    return result;
  } catch {
    return ROUTER_FAILURE_FALLBACK;
  }
}
