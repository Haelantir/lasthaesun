import { useCallback, useEffect, useState } from "react";
import { sendChatMessage } from "../lib/api";
import type { ChatMessage } from "../../shared/types";
import type { DisplayMessage } from "../types";

const STORAGE_KEY = "senior-ai-chat.session.v1";
const NETWORK_ERROR_TEXT = "지금 답변을 불러오지 못했어요.\n잠시 후 다시 질문해주세요.";
const DEFAULT_LOADING_TEXT = "질문을 살펴보고 있어요...";
const SEARCHING_LOADING_TEXT = "열심히 정보를 찾고 있어요...";

function loadStoredMessages(): DisplayMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

// Converts what's on screen into the plain role/content history the backend
// expects. Clarify questions and error messages still count as assistant turns
// so context isn't lost, matching the spec's "clarify 답변도 대화 문맥에 포함" rule.
function toApiHistory(messages: DisplayMessage[]): ChatMessage[] {
  return messages.map((m) => ({ role: m.role, content: m.content }));
}

export function useChat() {
  const [messages, setMessages] = useState<DisplayMessage[]>(() => loadStoredMessages());
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(DEFAULT_LOADING_TEXT);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // localStorage can fail (private browsing, quota) — session continues in memory only.
    }
  }, [messages]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const userMessage: DisplayMessage = { id: makeId(), role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMessage]);
      setLoading(true);
      setLoadingText(DEFAULT_LOADING_TEXT);

      try {
        const history = toApiHistory([...messages, userMessage]);
        const response = await sendChatMessage(trimmed, history.slice(0, -1), (stage) => {
          if (stage === "searching") setLoadingText(SEARCHING_LOADING_TEXT);
        });

        const assistantMessage: DisplayMessage =
          response.type === "clarify"
            ? {
                id: makeId(),
                role: "assistant",
                content: response.clarificationQuestion ?? "",
                kind: "clarify",
              }
            : {
                id: makeId(),
                role: "assistant",
                content: response.answer ?? "",
                kind: response.type,
                tip: response.tip,
              };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch {
        setMessages((prev) => [
          ...prev,
          { id: makeId(), role: "assistant", content: NETWORK_ERROR_TEXT, kind: "error" },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading]
  );

  const resetSession = useCallback(() => {
    setMessages([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return { messages, loading, loadingText, sendMessage, resetSession };
}
