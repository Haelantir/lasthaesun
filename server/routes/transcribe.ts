import { Router } from "express";
import { z } from "zod";
import { transcribeAudio } from "../lib/openaiClient.js";

// Recorded clips are capped client-side at 60s; base64 of that is well under
// this. The limit here is just a backstop against an oversized/garbage body.
const transcribeRequestSchema = z.object({
  audio: z.string().min(1).max(8_000_000),
  mimeType: z.string().min(1).max(100),
});

export const transcribeRouter = Router();

transcribeRouter.post("/transcribe", async (req, res) => {
  const parsed = transcribeRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid_request" });
    return;
  }

  try {
    const audioBuffer = Buffer.from(parsed.data.audio, "base64");
    const text = await transcribeAudio(audioBuffer, parsed.data.mimeType);
    res.json({ text });
  } catch (err) {
    // Same policy as chat: never log the transcribed content, only the failure.
    const reason = err instanceof Error ? err.message : "unknown error";
    console.error(`[transcribe] failed: ${reason}`);
    res.status(502).json({ error: "transcription_failed" });
  }
});
