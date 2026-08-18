import type { AnswerResult, ChatApiResponse, ChatMessage, RouterInput, RouterResult } from "../../shared/types";
import { routeMessage, trimRecentMessages, type CallRouterFn } from "./router";
import { applySafetyOverride } from "./safetyOverride";
import { callAnswerModel, type AnswerTier } from "./openaiClient";

const FRIENDLY_ERROR_MESSAGE = "지금 답변을 불러오지 못했어요.\n잠시 후 다시 질문해주세요.";
const DEFAULT_CLARIFICATION_QUESTION = "어떤 것에 대해 궁금하신지 조금 더 말씀해주시겠어요?";

export type CallAnswerFn = (
  tier: AnswerTier,
  input: { userMessage: string; recentMessages: ChatMessage[] }
) => Promise<AnswerResult>;

// The Router flags questions that need live/current info via requiresWeb /
// requiresCurrentInfo. When either is set we answer through the search-backed
// tier instead of the plain nano/luna model, regardless of which route the
// Router picked (a router mistake here should still get real info, not a
// confident-sounding guess).
function decideAnswerTier(result: RouterResult): AnswerTier {
  if (result.requiresWeb || result.requiresCurrentInfo) {
    return "search";
  }
  return result.route === "nano" ? "nano" : "luna";
}

export interface ChatServiceDeps {
  callRouter?: CallRouterFn;
  callAnswer?: CallAnswerFn;
  // Fires once, right when we decide this turn needs a live web search —
  // before the (possibly retried) search call actually happens. Lets the
  // route layer tell the client "찾고 있어요" instead of the generic
  // loading text, without exposing any of this internal reasoning to it.
  onStage?: (stage: "searching") => void;
}

// Which answer tiers to try, in order, for a given initial tier. A search
// failure is retried once as "search" again before honestly falling back to
// plain luna (no search) — most search failures are a one-off network/API
// hiccup, and a quiet second attempt beats showing the "확인 불가" message
// for something that would have worked a second later.
function fallbackChain(initialTier: AnswerTier): AnswerTier[] {
  if (initialTier === "search") {
    return ["search", "search", "luna"];
  }
  if (initialTier === "nano") {
    return ["nano", "luna"];
  }
  return ["luna"];
}

function errorResponse(): ChatApiResponse {
  return {
    type: "error",
    answer: FRIENDLY_ERROR_MESSAGE,
    tip: null,
    clarificationQuestion: null,
  };
}

function clarifyResponse(routerResult: RouterResult): ChatApiResponse {
  return {
    type: "clarify",
    answer: null,
    tip: null,
    clarificationQuestion: routerResult.clarificationQuestion ?? DEFAULT_CLARIFICATION_QUESTION,
  };
}

function answerResponse(result: AnswerResult): ChatApiResponse {
  return {
    type: "answer",
    answer: result.answer,
    tip: result.tip,
    clarificationQuestion: null,
  };
}

/**
 * Full pipeline for one turn: Router -> Safety Override -> nano/luna/clarify ->
 * answer (with nano-failure-retries-as-luna) -> friendly-error fallback.
 * Never throws — always resolves to a ChatApiResponse.
 */
export async function handleChatMessage(
  message: string,
  history: ChatMessage[],
  deps: ChatServiceDeps = {}
): Promise<ChatApiResponse> {
  const callAnswer = deps.callAnswer ?? callAnswerModel;
  const recentMessages = trimRecentMessages(history);

  const routerInput: RouterInput = {
    userMessage: message,
    recentMessages,
    hasImage: false,
    hasFile: false,
  };

  const routedResult = await routeMessage(routerInput, deps.callRouter);
  const finalResult = applySafetyOverride(message, recentMessages, routedResult);

  if (finalResult.route === "clarify") {
    return clarifyResponse(finalResult);
  }

  const answerInput = { userMessage: message, recentMessages };
  const initialTier = decideAnswerTier(finalResult);

  if (initialTier === "search") {
    deps.onStage?.("searching");
  }

  const chain = fallbackChain(initialTier);

  for (let i = 0; i < chain.length; i++) {
    try {
      const result = await callAnswer(chain[i], answerInput);
      return answerResponse(result);
    } catch (err) {
      // Every attempt gets logged, including ones a later attempt recovers
      // from — otherwise a flaky first try leaves no trace once a retry
      // quietly succeeds.
      logAnswerFailure(`${chain[i]} attempt ${i + 1}/${chain.length} failed`, err);
    }
  }

  return errorResponse();
}

// Deliberately logs only the error, never the user's message content (Section 37:
// no raw user question text in server logs).
function logAnswerFailure(stage: string, err: unknown) {
  const reason = err instanceof Error ? err.message : "unknown error";
  console.error(`[chatService] answer generation failed at ${stage}: ${reason}`);
}
