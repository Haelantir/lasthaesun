import { useState } from "react";
import { HomeScreen } from "./components/HomeScreen";
import { ChatScreen } from "./components/ChatScreen";
import { useChat } from "./hooks/useChat";

export function App() {
  const { messages, loading, loadingText, sendMessage, resetSession } = useChat();
  const [screen, setScreen] = useState<"home" | "chat">(messages.length > 0 ? "chat" : "home");

  const handleAsk = (question: string) => {
    setScreen("chat");
    void sendMessage(question);
  };

  const handleGoHome = () => {
    resetSession();
    setScreen("home");
  };

  if (screen === "home") {
    return <HomeScreen onAsk={handleAsk} />;
  }

  return (
    <ChatScreen
      messages={messages}
      loading={loading}
      loadingText={loadingText}
      onSend={sendMessage}
      onGoHome={handleGoHome}
    />
  );
}
