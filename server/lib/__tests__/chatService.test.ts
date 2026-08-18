import { describe, it, expect, vi } from "vitest";
import { handleChatMessage } from "../chatService";
import { makeRouterResult } from "./testHelpers";
import type { AnswerResult, ChatMessage, RouterResult } from "../../../shared/types";

function deps(routerResult: RouterResult, answerImpl?: (tier: "nano" | "luna") => Promise<AnswerResult>) {
  const callRouter = vi.fn().mockResolvedValue(routerResult);
  const callAnswer = vi.fn().mockImplementation(
    answerImpl ??
      ((tier: "nano" | "luna") =>
        Promise.resolve({ answer: `${tier} answer`, tip: null }))
  );
  return { callRouter, callAnswer };
}

describe("handleChatMessage — Nano-appropriate questions stay on Nano", () => {
  const nanoQuestions = [
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
  ];

  it.each(nanoQuestions)("routes to nano: %s", async (message) => {
    const routerResult = makeRouterResult({ route: "nano" });
    const { callRouter, callAnswer } = deps(routerResult);

    const response = await handleChatMessage(message, [], { callRouter, callAnswer });

    expect(callAnswer).toHaveBeenCalledWith("nano", expect.objectContaining({ userMessage: message }));
    expect(response.type).toBe("answer");
  });
});

describe("handleChatMessage — high-stakes questions go to Luna", () => {
  const lunaQuestions = [
    "혈압약 어제 안 먹었는데 오늘 두 개 먹어도 돼?",
    "감기약하고 혈압약 같이 먹어도 돼?",
    "가슴이 답답한데 괜찮아?",
    "혈당이 250인데 병원 가야 돼?",
    "국민연금 남편 것까지 같이 받을 수 있어?",
    "이 보험 해지하는 게 좋아?",
    "은행에서 대출 갈아타라고 하는데 해야 돼?",
    "이 주식 사도 돼?",
    "전세계약서 이대로 사인해도 돼?",
    "상속받으면 세금 얼마나 내?",
    "건강보험에서 환급금 준다고 문자 왔어",
    "이 링크 눌러도 돼?",
    "아들이 급하다고 300만원 보내달래",
    "검찰에서 전화가 왔는데 계좌번호를 달래",
    "오늘 삼성전자 주가 얼마야?",
    "오늘 서울 날씨 알려줘",
    "내일 부산 가는 KTX 몇 시에 있어?",
    "저번에 말한 남편 연금 다시 알려줘",
  ];

  it.each(lunaQuestions)("routes to luna: %s", async (message) => {
    const routerResult = makeRouterResult({ route: "luna", riskLevel: "high" });
    const { callRouter, callAnswer } = deps(routerResult);

    const response = await handleChatMessage(message, [], { callRouter, callAnswer });

    expect(callAnswer).toHaveBeenCalledWith("luna", expect.objectContaining({ userMessage: message }));
    expect(response.type).toBe("answer");
  });
});

describe("handleChatMessage — Safety Override upgrades a Router mistake before it reaches the user", () => {
  const shouldHaveBeenLuna = [
    "혈압약 두 개 먹어도 돼?",
    "환급금 준다는 링크 눌러도 돼?",
    "이 계약서 사인해도 돼?",
    "검찰에서 계좌번호 알려달래",
    "국민연금 얼마나 받을 수 있어?",
  ];

  it.each(shouldHaveBeenLuna)(
    "forces luna even when Router (wrongly) says nano: %s",
    async (message) => {
      const routerSaysNanoByMistake = makeRouterResult({ route: "nano", riskLevel: "low" });
      const { callRouter, callAnswer } = deps(routerSaysNanoByMistake);

      const response = await handleChatMessage(message, [], { callRouter, callAnswer });

      expect(callAnswer).toHaveBeenCalledWith("luna", expect.anything());
      expect(callAnswer).not.toHaveBeenCalledWith("nano", expect.anything());
      expect(response.type).toBe("answer");
    }
  );
});

describe("handleChatMessage — Clarify without enough context", () => {
  const noContextQuestions = ["이거 얼마야?", "거기 어떻게 가?", "그 사람 전화번호 알려줘", "그거 해도 돼?"];

  it.each(noContextQuestions)("asks for clarification: %s", async (message) => {
    const routerResult = makeRouterResult({
      route: "clarify",
      requiresClarification: true,
      clarificationQuestion: "어떤 것을 말씀하시는지 조금 더 알려주시겠어요?",
    });
    const { callRouter, callAnswer } = deps(routerResult);

    const response = await handleChatMessage(message, [], { callRouter, callAnswer });

    expect(response.type).toBe("clarify");
    expect(response.clarificationQuestion).toBeTruthy();
    expect(callAnswer).not.toHaveBeenCalled();
  });

  it("falls back to a generic clarification question if the Router omitted one", async () => {
    const routerResult = makeRouterResult({ route: "clarify", clarificationQuestion: null });
    const { callRouter, callAnswer } = deps(routerResult);

    const response = await handleChatMessage("이거 얼마야?", [], { callRouter, callAnswer });

    expect(response.type).toBe("clarify");
    expect(response.clarificationQuestion).toBeTruthy();
  });
});

describe("handleChatMessage — recent context resolves pronouns instead of forcing Clarify", () => {
  it("routes '그거 다시 알려줘' to luna when prior turn already established the topic", async () => {
    const history: ChatMessage[] = [
      { role: "user", content: "남편 국민연금도 제가 받을 수 있어?" },
      { role: "assistant", content: "남편분의 국민연금은 본인만 받을 수 있는 것이 원칙이에요." },
    ];
    const routerResult = makeRouterResult({ route: "luna", riskLevel: "high" });
    const { callRouter, callAnswer } = deps(routerResult);

    const response = await handleChatMessage("그거 다시 쉽게 설명해줘", history, {
      callRouter,
      callAnswer,
    });

    expect(response.type).toBe("answer");
    expect(callAnswer).toHaveBeenCalledWith("luna", expect.anything());
    // the router must have received the prior context, not just the bare message
    expect(callRouter.mock.calls[0][0].recentMessages).toEqual(history);
  });
});

describe("handleChatMessage — Router failure is invisible to the user", () => {
  it("falls back to luna and still returns a normal answer when the Router throws", async () => {
    const callRouter = vi.fn().mockRejectedValue(new Error("router API down"));
    const callAnswer = vi
      .fn()
      .mockResolvedValue({ answer: "괜찮습니다.", tip: null });

    const response = await handleChatMessage("혈압약 두 개 먹어도 돼?", [], { callRouter, callAnswer });

    expect(callAnswer).toHaveBeenCalledWith("luna", expect.anything());
    expect(response.type).toBe("answer");
    expect(response.answer).toBe("괜찮습니다.");
  });
});

describe("handleChatMessage — questions needing current info go through search", () => {
  it("uses the search tier when requiresWeb is true", async () => {
    const routerResult = makeRouterResult({ route: "luna", requiresWeb: true, requiresCurrentInfo: true });
    const { callRouter, callAnswer } = deps(routerResult);

    const response = await handleChatMessage("오늘 서울 날씨 알려줘", [], { callRouter, callAnswer });

    expect(callAnswer).toHaveBeenCalledWith("search", expect.objectContaining({ userMessage: "오늘 서울 날씨 알려줘" }));
    expect(response.type).toBe("answer");
  });

  it("uses the search tier when only requiresCurrentInfo is true", async () => {
    const routerResult = makeRouterResult({ route: "luna", requiresCurrentInfo: true, requiresWeb: false });
    const { callRouter, callAnswer } = deps(routerResult);

    await handleChatMessage("오늘 삼성전자 주가 얼마야?", [], { callRouter, callAnswer });

    expect(callAnswer).toHaveBeenCalledWith("search", expect.anything());
  });

  it("retries search once (silently) and succeeds on the second attempt", async () => {
    const routerResult = makeRouterResult({ route: "luna", requiresWeb: true, requiresCurrentInfo: true });
    const callRouter = vi.fn().mockResolvedValue(routerResult);
    const callAnswer = vi
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error("transient search failure")))
      .mockImplementationOnce(() =>
        Promise.resolve({ answer: "오늘 서울은 맑고 28도입니다.", tip: null })
      );

    const response = await handleChatMessage("오늘 서울 날씨 알려줘", [], { callRouter, callAnswer });

    expect(callAnswer).toHaveBeenNthCalledWith(1, "search", expect.anything());
    expect(callAnswer).toHaveBeenNthCalledWith(2, "search", expect.anything());
    expect(callAnswer).toHaveBeenCalledTimes(2);
    expect(response.type).toBe("answer");
    expect(response.answer).toBe("오늘 서울은 맑고 28도입니다.");
  });

  it("falls back to plain luna (no search) when both search attempts fail", async () => {
    const routerResult = makeRouterResult({ route: "luna", requiresWeb: true, requiresCurrentInfo: true });
    const callRouter = vi.fn().mockResolvedValue(routerResult);
    const callAnswer = vi
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error("search down")))
      .mockImplementationOnce(() => Promise.reject(new Error("search down again")))
      .mockImplementationOnce(() =>
        Promise.resolve({ answer: "지금은 실시간 정보를 확인할 수 없어요.", tip: null })
      );

    const response = await handleChatMessage("오늘 서울 날씨 알려줘", [], { callRouter, callAnswer });

    expect(callAnswer).toHaveBeenNthCalledWith(1, "search", expect.anything());
    expect(callAnswer).toHaveBeenNthCalledWith(2, "search", expect.anything());
    expect(callAnswer).toHaveBeenNthCalledWith(3, "luna", expect.anything());
    expect(response.type).toBe("answer");
  });

  it("returns a friendly error when both search attempts and the luna fallback all fail", async () => {
    const routerResult = makeRouterResult({ route: "luna", requiresWeb: true, requiresCurrentInfo: true });
    const callRouter = vi.fn().mockResolvedValue(routerResult);
    const callAnswer = vi.fn().mockRejectedValue(new Error("everything is down"));

    const response = await handleChatMessage("오늘 서울 날씨 알려줘", [], { callRouter, callAnswer });

    expect(response.type).toBe("error");
    expect(callAnswer).toHaveBeenCalledTimes(3);
  });

  it("fires the onStage('searching') callback before attempting the search call", async () => {
    const routerResult = makeRouterResult({ route: "luna", requiresWeb: true });
    const callRouter = vi.fn().mockResolvedValue(routerResult);
    const callOrder: string[] = [];
    const callAnswer = vi.fn().mockImplementation(() => {
      callOrder.push("callAnswer");
      return Promise.resolve({ answer: "ok", tip: null });
    });
    const onStage = vi.fn().mockImplementation(() => callOrder.push("onStage"));

    await handleChatMessage("오늘 서울 날씨 알려줘", [], { callRouter, callAnswer, onStage });

    expect(onStage).toHaveBeenCalledWith("searching");
    expect(callOrder).toEqual(["onStage", "callAnswer"]);
  });

  it("never fires onStage for questions that don't need search", async () => {
    const routerResult = makeRouterResult({ route: "nano" });
    const { callRouter, callAnswer } = deps(routerResult);
    const onStage = vi.fn();

    await handleChatMessage("계란후라이 어떻게 해?", [], { callRouter, callAnswer, onStage });

    expect(onStage).not.toHaveBeenCalled();
  });
});

describe("handleChatMessage — answer-model fallback behavior", () => {
  it("retries on Luna when the Nano answer call fails", async () => {
    const routerResult = makeRouterResult({ route: "nano" });
    const callRouter = vi.fn().mockResolvedValue(routerResult);
    const callAnswer = vi
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error("nano down")))
      .mockImplementationOnce(() =>
        Promise.resolve({ answer: "luna로 답변합니다", tip: null })
      );

    const response = await handleChatMessage("계란후라이 어떻게 해?", [], { callRouter, callAnswer });

    expect(callAnswer).toHaveBeenNthCalledWith(1, "nano", expect.anything());
    expect(callAnswer).toHaveBeenNthCalledWith(2, "luna", expect.anything());
    expect(response.type).toBe("answer");
    expect(response.answer).toBe("luna로 답변합니다");
  });

  it("returns a friendly error (not a crash) when both Nano and the Luna retry fail", async () => {
    const routerResult = makeRouterResult({ route: "nano" });
    const callRouter = vi.fn().mockResolvedValue(routerResult);
    const callAnswer = vi.fn().mockRejectedValue(new Error("everything is down"));

    const response = await handleChatMessage("계란후라이 어떻게 해?", [], { callRouter, callAnswer });

    expect(response.type).toBe("error");
    expect(response.answer).toContain("잠시 후 다시");
    expect(callAnswer).toHaveBeenCalledTimes(2);
  });

  it("returns a friendly error with a single attempt when Luna itself fails (no further retry tier)", async () => {
    const routerResult = makeRouterResult({ route: "luna", riskLevel: "high" });
    const callRouter = vi.fn().mockResolvedValue(routerResult);
    const callAnswer = vi.fn().mockRejectedValue(new Error("luna down"));

    const response = await handleChatMessage("혈압약 두 개 먹어도 돼?", [], { callRouter, callAnswer });

    expect(response.type).toBe("error");
    expect(callAnswer).toHaveBeenCalledTimes(1);
  });
});

describe("handleChatMessage — response shape for the UI", () => {
  it("passes through tip from the answer model untouched", async () => {
    const routerResult = makeRouterResult({ route: "nano" });
    const { callRouter, callAnswer } = deps(routerResult, () =>
      Promise.resolve({
        answer: "계란을 3분간 삶아주세요.",
        tip: "너무 오래 삶으면 퍽퍽해질 수 있어요.",
      })
    );

    const response = await handleChatMessage("계란 몇 분 삶아?", [], { callRouter, callAnswer });

    expect(response.tip).toBe("너무 오래 삶으면 퍽퍽해질 수 있어요.");
    expect(response.clarificationQuestion).toBeNull();
  });

  it("never lets clarify responses carry an answer body", async () => {
    const routerResult = makeRouterResult({
      route: "clarify",
      clarificationQuestion: "어느 병원에 가시려는 건가요?",
    });
    const { callRouter, callAnswer } = deps(routerResult);

    const response = await handleChatMessage("병원 어떻게 가?", [], { callRouter, callAnswer });

    expect(response.answer).toBeNull();
    expect(response.clarificationQuestion).toBe("어느 병원에 가시려는 건가요?");
  });
});
