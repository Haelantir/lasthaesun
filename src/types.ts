export type DisplayMessageKind = "answer" | "clarify" | "error";

export interface DisplayMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  kind?: DisplayMessageKind;
  tip?: string | null;
}
