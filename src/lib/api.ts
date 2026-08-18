import type { ChatApiResponse, ChatMessage } from "../../shared/types";

export type ChatStage = "searching";

// The server streams newline-delimited JSON: zero or one `{"event":"stage",...}`
// line (fired when a live web search is actually happening, so the UI can show
// an honest "찾고 있어요" instead of the generic loading text) followed by one
// `{"event":"result","data":ChatApiResponse}` line.
export async function sendChatMessage(
  message: string,
  history: ChatMessage[],
  onStage?: (stage: ChatStage) => void
): Promise<ChatApiResponse> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });

  if (!res.ok) {
    throw new Error(`Chat request failed with status ${res.status}`);
  }
  if (!res.body) {
    // Environments without a readable stream body (rare) still get a normal JSON parse.
    return (await res.json()) as ChatApiResponse;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let result: ChatApiResponse | null = null;

  const handleLine = (line: string) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    const parsed = JSON.parse(trimmed) as { event: "stage" | "result"; stage?: ChatStage; data?: ChatApiResponse };
    if (parsed.event === "stage" && parsed.stage) {
      onStage?.(parsed.stage);
    } else if (parsed.event === "result" && parsed.data) {
      result = parsed.data;
    }
  };

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let newlineIndex: number;
    while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
      handleLine(buffer.slice(0, newlineIndex));
      buffer = buffer.slice(newlineIndex + 1);
    }
  }
  if (buffer) handleLine(buffer);

  if (!result) {
    throw new Error("Chat response ended without a result");
  }
  return result;
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = () => reject(new Error("Could not read recorded audio"));
    reader.readAsDataURL(blob);
  });
}

/** Sends a recorded voice clip to the server and returns the recognized text. */
export async function transcribeAudio(blob: Blob): Promise<string> {
  const audio = await blobToBase64(blob);

  const res = await fetch("/api/transcribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ audio, mimeType: blob.type || "audio/webm" }),
  });

  if (!res.ok) {
    throw new Error(`Transcribe request failed with status ${res.status}`);
  }
  const data = (await res.json()) as { text: string };
  return data.text;
}
