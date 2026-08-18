import { z } from "zod";
import { CATEGORIES } from "../../shared/categories.js";

// ---- Zod schemas (runtime validation of whatever the model returns) ----

export const routerResultSchema = z.object({
  route: z.enum(["nano", "luna", "clarify"]),
  category: z.enum(CATEGORIES),
  subcategory: z.string().min(1),
  riskLevel: z.enum(["low", "medium", "high", "critical"]),
  complexity: z.enum(["simple", "medium", "complex"]),
  ambiguity: z.enum(["low", "medium", "high"]),
  requiresCurrentInfo: z.boolean(),
  requiresWeb: z.boolean(),
  requiresCalculation: z.boolean(),
  requiresClarification: z.boolean(),
  clarificationQuestion: z.string().nullable(),
  seniorTip: z.string().nullable(),
  reasonCode: z.string().min(1),
});

export const answerResultSchema = z.object({
  answer: z.string().min(1),
  tip: z.string().nullable(),
});

// ---- OpenAI structured-output JSON Schemas (strict mode: every property is
// required; nullability is expressed via a ["type", "null"] union). ----

export const ROUTER_JSON_SCHEMA = {
  name: "router_result",
  strict: true,
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      route: { type: "string", enum: ["nano", "luna", "clarify"] },
      category: { type: "string", enum: [...CATEGORIES] },
      subcategory: { type: "string" },
      risk_level: { type: "string", enum: ["low", "medium", "high", "critical"] },
      complexity: { type: "string", enum: ["simple", "medium", "complex"] },
      ambiguity: { type: "string", enum: ["low", "medium", "high"] },
      requires_current_info: { type: "boolean" },
      requires_web: { type: "boolean" },
      requires_calculation: { type: "boolean" },
      requires_clarification: { type: "boolean" },
      clarification_question: { type: ["string", "null"] },
      senior_tip: { type: ["string", "null"] },
      reason_code: { type: "string" },
    },
    required: [
      "route",
      "category",
      "subcategory",
      "risk_level",
      "complexity",
      "ambiguity",
      "requires_current_info",
      "requires_web",
      "requires_calculation",
      "requires_clarification",
      "clarification_question",
      "senior_tip",
      "reason_code",
    ],
  },
} as const;

export const ANSWER_JSON_SCHEMA = {
  name: "senior_answer",
  strict: true,
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      answer: { type: "string" },
      tip: { type: ["string", "null"] },
    },
    required: ["answer", "tip"],
  },
} as const;

// The model returns snake_case keys (matching the JSON schema above); the rest
// of the app works in camelCase. These converters are the single seam between
// the two.
export function fromRouterJson(raw: unknown) {
  const r = raw as Record<string, unknown>;
  return routerResultSchema.parse({
    route: r.route,
    category: r.category,
    subcategory: r.subcategory,
    riskLevel: r.risk_level,
    complexity: r.complexity,
    ambiguity: r.ambiguity,
    requiresCurrentInfo: r.requires_current_info,
    requiresWeb: r.requires_web,
    requiresCalculation: r.requires_calculation,
    requiresClarification: r.requires_clarification,
    clarificationQuestion: r.clarification_question,
    seniorTip: r.senior_tip,
    reasonCode: r.reason_code,
  });
}

export function fromAnswerJson(raw: unknown) {
  const r = raw as Record<string, unknown>;
  return answerResultSchema.parse({
    answer: r.answer,
    tip: r.tip,
  });
}
