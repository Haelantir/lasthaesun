// Single place that maps our internal model "tiers" to actual OpenAI model IDs.
// Nothing else in the codebase should read process.env.OPENAI_*_MODEL directly.

// reasoningEffort controls how much hidden "thinking" the model does before
// answering. GPT-5-family models default to heavy reasoning, which pushed a
// plain structured-output router call past 14s in testing — right at our
// request timeout. The router is a pure classification task and doesn't need
// deep reasoning, so it runs at "minimal". Luna handles higher-stakes answers
// (medical/finance/legal/fraud) so it keeps more reasoning budget.
export const MODEL_CONFIG = {
  router: {
    model: process.env.OPENAI_ROUTER_MODEL || "gpt-5-nano",
    reasoningEffort: "minimal",
  },
  nano: {
    model: process.env.OPENAI_NANO_MODEL || "gpt-5-nano",
    reasoningEffort: "minimal",
  },
  luna: {
    model: process.env.OPENAI_LUNA_MODEL || "gpt-5.6-luna",
    reasoningEffort: "medium",
  },
  // Used instead of "luna" when the Router says the question needs live,
  // current information (weather, prices, news, etc). This model has its own
  // built-in web search and does not accept a reasoning_effort parameter.
  search: {
    model: process.env.OPENAI_SEARCH_MODEL || "gpt-5-search-api",
    reasoningEffort: null,
  },
  // Speech-to-text for the "말해서 물어보기" voice input button. Doesn't accept
  // a reasoning_effort parameter.
  transcribe: {
    model: process.env.OPENAI_TRANSCRIBE_MODEL || "gpt-transcribe",
    reasoningEffort: null,
  },
} as const;

export type ModelTier = keyof typeof MODEL_CONFIG;
