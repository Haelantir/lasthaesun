import type { ChatMessage, RouterResult } from "../../shared/types";

// Code-level backstop against a Router mistake. If the Router says "nano" but the
// message (or recent context) contains a strong signal for health, money, legal,
// or fraud/security risk, we force the route to "luna" no matter what the Router
// said. This is NOT how routing normally happens — the Router (an LLM call) does
// that. This only exists to catch Router errors before they reach the user.

interface SafetyTrigger {
  riskLevel: "high" | "critical";
  reasonCode: string;
}

// Fraud/security: unambiguous action words used in scam messages targeting seniors.
// Kept separate from FINANCE/MEDICAL because these should always read as "critical".
const FRAUD_KEYWORDS = [
  "송금",
  "계좌",
  "인증번호",
  "링크",
  "환급금",
  "경찰",
  "검찰",
  "국세청",
  "사기",
  "스미싱",
  "보이스피싱",
  "앱 설치",
  "원격제어",
  "apk",
];

const MEDICAL_KEYWORDS = [
  "약",
  "복용",
  "약봉투",
  "병원",
  "응급",
  "혈압",
  "혈당",
  "가슴 통증",
  "가슴",
  "답답",
  "숨이 안",
  "숨쉬기 힘들",
  "임신",
  "수술",
  "부작용",
  "치매",
  "검사 결과",
];

const FINANCE_KEYWORDS = [
  "보험",
  "대출",
  "투자",
  "주식",
  "연금",
  "세금",
  "상속",
  "증여",
  "건강보험",
  "국민연금",
];

const LEGAL_KEYWORDS = ["계약", "소송", "고소", "유언"];

function includesAny(haystack: string, keywords: string[]): boolean {
  return keywords.some((k) => haystack.includes(k));
}

function detectTrigger(combinedText: string): SafetyTrigger | null {
  const text = combinedText.toLowerCase();

  if (includesAny(text, FRAUD_KEYWORDS)) {
    return { riskLevel: "critical", reasonCode: "SAFETY_OVERRIDE_FRAUD_OR_SECURITY_RISK" };
  }
  if (includesAny(text, MEDICAL_KEYWORDS)) {
    return { riskLevel: "high", reasonCode: "SAFETY_OVERRIDE_HIGH_STAKES_MEDICAL" };
  }
  if (includesAny(text, FINANCE_KEYWORDS)) {
    return { riskLevel: "high", reasonCode: "SAFETY_OVERRIDE_HIGH_STAKES_FINANCE" };
  }
  if (includesAny(text, LEGAL_KEYWORDS)) {
    return { riskLevel: "high", reasonCode: "SAFETY_OVERRIDE_HIGH_STAKES_LEGAL" };
  }
  return null;
}

/**
 * Pure function: given the raw user message, recent conversation, and the
 * Router's result, returns a (possibly modified) RouterResult with route
 * forced to "luna" if a safety trigger is found and the Router said "nano".
 * Never downgrades risk; never touches routes other than "nano".
 */
export function applySafetyOverride(
  userMessage: string,
  recentMessages: ChatMessage[],
  routerResult: RouterResult
): RouterResult {
  if (routerResult.route !== "nano") {
    return routerResult;
  }

  const combinedText = [...recentMessages.map((m) => m.content), userMessage].join(" ");
  const trigger = detectTrigger(combinedText);

  if (!trigger) {
    return routerResult;
  }

  return {
    ...routerResult,
    route: "luna",
    riskLevel: trigger.riskLevel,
    reasonCode: trigger.reasonCode,
  };
}
