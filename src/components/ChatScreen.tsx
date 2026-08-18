import { useEffect, useRef } from "react";
import type { DisplayMessage } from "../types";
import { MessageBubble } from "./MessageBubble";
import { MessageInputBar } from "./MessageInputBar";
import { LoadingIndicator } from "./LoadingIndicator";

interface ChatScreenProps {
  messages: DisplayMessage[];
  loading: boolean;
  loadingText: string;
  onSend: (text: string) => void;
  onGoHome: () => void;
}

export function ChatScreen({ messages, loading, loadingText, onSend, onGoHome }: ChatScreenProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

  return (
    <div className="chat-screen">
      <header className="chat-header">
        <button type="button" className="home-link-btn" onClick={onGoHome}>
          ← 새 질문 시작하기
        </button>
      </header>

      <div className="chat-messages">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
        {loading && (
          <div className="message-row message-row-assistant">
            <LoadingIndicator text={loadingText} />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-wrapper">
        <MessageInputBar onSend={onSend} disabled={loading} size="compact" />
      </div>
    </div>
  );
}
