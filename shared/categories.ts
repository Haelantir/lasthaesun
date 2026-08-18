// Category / subcategory taxonomy shared by the router prompt, schema validation,
// and (indirectly) tests. Keep this list intentionally small and maintainable —
// subcategories are documented per category rather than left as free text.

export const CATEGORIES = [
  "daily_life",
  "cooking",
  "language",
  "general_knowledge",
  "digital_help",
  "travel_transport",
  "shopping",
  "medical",
  "finance",
  "legal",
  "government",
  "fraud_security",
  "family",
  "relationship",
  "emotional_support",
  "writing",
  "education",
  "entertainment",
  "news_current",
  "weather",
  "document",
  "image",
  "other",
] as const;

export type Category = (typeof CATEGORIES)[number];

// Documented subcategories per category. This is guidance for the router prompt
// and for humans maintaining the taxonomy — the schema itself accepts any string
// so the model isn't blocked when a question doesn't fit a documented bucket
// (it can fall back to "<category>.general").
export const SUBCATEGORIES: Partial<Record<Category, string[]>> = {
  medical: ["medication", "symptoms", "test_result", "diet", "mental_health", "emergency"],
  finance: ["pension", "loan", "insurance", "investment", "tax", "banking"],
  legal: ["contract", "inheritance", "lawsuit", "labor", "administrative"],
  digital_help: ["kakao", "android", "iphone", "browser", "settings"],
  fraud_security: ["smishing", "voice_phishing", "account_security", "impersonation"],
  government: ["subsidy", "registration", "application"],
  travel_transport: ["train", "bus", "flight", "directions"],
};
