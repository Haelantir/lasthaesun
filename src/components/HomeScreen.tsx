import { MessageInputBar } from "./MessageInputBar";

interface HomeScreenProps {
  onAsk: (question: string) => void;
}

export function HomeScreen({ onAsk }: HomeScreenProps) {
  return (
    <div className="home-screen">
      <div className="home-hero">
        <h1>무엇이든 물어보세요</h1>
        <p className="home-subtitle">무엇이 궁금하신가요?</p>
      </div>

      <MessageInputBar onSend={onAsk} placeholder="궁금한 내용을 적어주세요" size="hero" />
    </div>
  );
}
