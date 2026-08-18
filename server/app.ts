import express from "express";
import { chatRouter } from "./routes/chat";
import { transcribeRouter } from "./routes/transcribe";

export const app = express();
// 10mb covers a 60s base64-encoded voice clip with headroom; chat requests
// are still capped to 2000 chars by the zod schema regardless of this limit.
app.use(express.json({ limit: "10mb" }));

app.use("/api", chatRouter);
app.use("/api", transcribeRouter);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});
