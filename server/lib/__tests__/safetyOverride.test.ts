import { describe, it, expect } from "vitest";
import { applySafetyOverride } from "../safetyOverride";
import { makeRouterResult } from "./testHelpers";

describe("applySafetyOverride — forces nano -> luna on dangerous messages", () => {
  const dangerousCases: Array<[string, string]> = [
    ["혈압약 두 개 먹어도 돼?", "medical"],
    ["환급금 준다는 링크 눌러도 돼?", "fraud"],
    ["이 계약서 사인해도 돼?", "legal"],
    ["검찰에서 계좌번호 알려달래", "fraud"],
    ["국민연금 얼마나 받을 수 있어?", "finance"],
    ["가슴이 계속 답답해", "medical"],
    ["혈당이 250 나왔는데 괜찮아?", "medical"],
    ["이 약이랑 감기약 같이 먹어도 돼?", "medical"],
    ["아들이 급하다고 300만원 보내달래 계좌로", "fraud"],
    ["이 보험 해지해야 하나?", "finance"],
    ["은행에서 대출 갈아타라고 하는데 괜찮아?", "finance"],
    ["이 주식 사도 돼?", "finance"],
    ["상속받으면 세금 얼마나 내?", "finance"],
    ["건강보험에서 환급금 준다고 문자 왔는데 눌러?", "fraud"],
    ["아들이 휴대폰 고장났다고 300만원 보내달래 송금해도 될까", "fraud"],
    ["인증번호 알려달라는데 알려줘도 돼?", "fraud"],
    ["원격제어 앱 설치하라는데 해도 돼?", "fraud"],
    ["이거 스미싱 문자 맞아?", "fraud"],
    ["보이스피싱 같은데 어떡하지?", "fraud"],
    ["임신했는데 이 약 먹어도 돼?", "medical"],
  ];

  it.each(dangerousCases)("forces luna for: %s", (message) => {
    const routerSaidNano = makeRouterResult({ route: "nano", riskLevel: "low" });
    const result = applySafetyOverride(message, [], routerSaidNano);

    expect(result.route).toBe("luna");
    expect(["high", "critical"]).toContain(result.riskLevel);
    expect(result.reasonCode).toMatch(/^SAFETY_OVERRIDE_/);
  });

  it("assigns critical risk specifically for fraud/security triggers", () => {
    const result = applySafetyOverride(
      "검찰이라고 전화왔는데 계좌번호 알려달래",
      [],
      makeRouterResult({ route: "nano" })
    );
    expect(result.route).toBe("luna");
    expect(result.riskLevel).toBe("critical");
    expect(result.reasonCode).toBe("SAFETY_OVERRIDE_FRAUD_OR_SECURITY_RISK");
  });
});

describe("applySafetyOverride — does not false-positive on genuinely safe nano questions", () => {
  const safeCases = [
    "계란후라이 어떻게 해?",
    "된장찌개 끓이는 법 알려줘",
    "고구마 몇 분 삶아?",
    "세종대왕이 누구야?",
    "고래는 물고기야?",
    "이 문장 맞춤법 고쳐줘",
    "이 영어 무슨 뜻이야?",
    "손주한테 생일 축하 문자 써줘",
    "화분에 물 얼마나 자주 줘?",
    "흰옷 얼룩 어떻게 빼?",
    "감자 삶는 법 알려줘",
    "친구한테 보낼 생일 인사 써줘",
    "휴대폰 글씨 크게 하는 법 알려줘",
    "카카오톡 사진 저장하려면 어떻게 해?",
  ];

  it.each(safeCases)("keeps nano for: %s", (message) => {
    const routerSaidNano = makeRouterResult({ route: "nano" });
    const result = applySafetyOverride(message, [], routerSaidNano);
    expect(result.route).toBe("nano");
    expect(result).toEqual(routerSaidNano);
  });
});

describe("applySafetyOverride — only acts on route === 'nano'", () => {
  it("leaves 'luna' route untouched even with dangerous keywords", () => {
    const already = makeRouterResult({ route: "luna", riskLevel: "high" });
    const result = applySafetyOverride("혈압약 두 개 먹었어", [], already);
    expect(result).toEqual(already);
  });

  it("leaves 'clarify' route untouched even with dangerous keywords", () => {
    const clarify = makeRouterResult({
      route: "clarify",
      clarificationQuestion: "어떤 약을 말씀하시는 건가요?",
    });
    const result = applySafetyOverride("이 약 먹어도 돼?", [], clarify);
    expect(result).toEqual(clarify);
  });
});

describe("applySafetyOverride — considers recent conversation context, not just the current message", () => {
  it("triggers when the danger keyword only appears in prior turns", () => {
    const recent = [
      { role: "user" as const, content: "건강보험공단에서 환급금 준다고 문자가 왔어요" },
      { role: "assistant" as const, content: "어떤 내용인지 조금 더 알려주시겠어요?" },
    ];
    const result = applySafetyOverride(
      "그거 눌러도 될까?",
      recent,
      makeRouterResult({ route: "nano" })
    );
    expect(result.route).toBe("luna");
    expect(result.reasonCode).toBe("SAFETY_OVERRIDE_FRAUD_OR_SECURITY_RISK");
  });

  it("does not trigger when neither current message nor context has danger keywords", () => {
    const recent = [
      { role: "user" as const, content: "계란찜 어떻게 해?" },
      { role: "assistant" as const, content: "계란을 풀어서 찜기에 쪄주세요." },
    ];
    const result = applySafetyOverride("몇 분 정도 쪄?", recent, makeRouterResult({ route: "nano" }));
    expect(result.route).toBe("nano");
  });
});
