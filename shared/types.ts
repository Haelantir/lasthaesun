import type { Category } from "./categories.js";

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export type Route = "nano" | "luna" | "clarify";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export type Complexity = "simple" | "medium" | "complex";

export type Ambiguity = "low" | "medium" | "high";

export interface RouterResult {
  route: Route;
  category: Category;
  subcategory: string;
  riskLevel: RiskLevel;
  complexity: Complexity;
  ambiguity: Ambiguity;
  requiresCurrentInfo: boolean;
  requiresWeb: boolean;
  requiresCalculation: boolean;
  requiresClarification: boolean;
  clarificationQuestion: string | null;
  seniorTip: string | null;
  reasonCode: string;
}

// What the Nano/Luna answer models return (Section 29 of the spec: Senior UX Layer).
export interface AnswerResult {
  answer: string;
  tip: string | null;
}

// has_image / has_file are carried for forward-compatibility with future
// image/file upload features. This MVP never sets them to true.
export interface RouterInput {
  userMessage: string;
  recentMessages: ChatMessage[];
  hasImage: boolean;
  hasFile: boolean;
}

export type ChatResponseType = "answer" | "clarify" | "error";

export interface ChatApiResponse {
  type: ChatResponseType;
  answer: string | null;
  tip: string | null;
  clarificationQuestion: string | null;
}

export interface ChatApiRequest {
  message: string;
  history: ChatMessage[];
}
