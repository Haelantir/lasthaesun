import { Router } from "express";
import { z } from "zod";
import { handleChatMessage } from "../lib/chatService.js";

const chatRequestSchema = z.object({
  message: z.string().trim().min(1).max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(4000),
      })
    )
    .max(50)
    .default([]),
});

export const chatRouter = Router();

// The response body is newline-delimited JSON rather than a single JSON
// object: an optional early `{"event":"stage",...}` line lets the client
// swap the loading text to something honest ("찾고 있어요") when a live web
// search is actually happening, followed by exactly one final
// `{"event":"result","data":<ChatApiResponse>}` line. This never exposes
// routing internals to the client — just a single non-technical stage name.
chatRouter.post("/chat", async (req, res) => {
  const parsed = chatRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid_request" });
    return;
  }

  const { message, history } = parsed.data;

  res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache");
  res.flushHeaders();

  const writeLine = (line: unknown) => {
    res.write(`${JSON.stringify(line)}\n`);
  };

  try {
    const response = await handleChatMessage(message, history, {
      onStage: (stage) => writeLine({ event: "stage", stage }),
    });
    writeLine({ event: "result", data: response });
  } catch {
    // handleChatMessage is designed to never throw, but this is a last-resort
    // net so a truly unexpected error still returns the senior-friendly message
    // instead of a stack trace.
    writeLine({
      event: "result",
      data: {
        type: "error",
        answer: "지금 답변을 불러오지 못했어요.\n잠시 후 다시 질문해주세요.",
        tip: null,
        clarificationQuestion: null,
      },
    });
  }
  res.end();
});
