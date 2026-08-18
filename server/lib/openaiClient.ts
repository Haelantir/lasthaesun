import OpenAI, { toFile } from "openai";
import type { ChatMessage } from "../../shared/types";
import { MODEL_CONFIG } from "./modelConfig";
import { ROUTER_JSON_SCHEMA, ANSWER_JSON_SCHEMA, fromRouterJson, fromAnswerJson } from "./schema";
import { ROUTER_SYSTEM_PROMPT } from "./prompts/routerPrompt";
import {
  SENIOR_ANSWER_SYSTEM_PROMPT,
  SENIOR_SEARCH_ANSWER_SYSTEM_PROMPT,
} from "./prompts/seniorAnswerPrompt";

export type AnswerTier = "nano" | "luna" | "search";

const REQUEST_TIMEOUT_MS = 30_000;

let client: OpenAI | null = null;

function getClient(): OpenAI {
  if (!client) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not configured");
    }
    client = new OpenAI({ apiKey });
  }
  return client;
}

function toOpenAiMessages(recentMessages: ChatMessage[]) {
  return recentMessages.map((m) => ({
    role: m.role,
    content: m.content,
  }));
}

/** Calls the Router model and returns a validated RouterResult (camelCase). Throws on any failure. */
export async function callRouterModel(input: {
  userMessage: string;
  recentMessages: ChatMessage[];
  hasImage: boolean;
  hasFile: boolean;
}) {
  const openai = getClient();

  const contextNote =
    input.recentMessages.length > 0
      ? `최근 대화:\n${input.recentMessages
          .map((m) => `${m.role === "user" ? "사용자" : "AI"}: ${m.content}`)
          .join("\n")}\n\n`
      : "최근 대화: 없음\n\n";

  const userPayload = `${contextNote}현재 사용자 질문: ${input.userMessage}\nhas_image: ${input.hasImage}\nhas_file: ${input.hasFile}`;

  const completion = await openai.chat.completions.create(
    {
      model: MODEL_CONFIG.router.model,
      messages: [
        { role: "system", content: ROUTER_SYSTEM_PROMPT },
        { role: "user", content: userPayload },
      ],
      response_format: { type: "json_schema", json_schema: ROUTER_JSON_SCHEMA },
      reasoning_effort: MODEL_CONFIG.router.reasoningEffort,
    },
    { timeout: REQUEST_TIMEOUT_MS }
  );

  const content = completion.choices[0]?.message?.content;
  if (!content) {
    throw new Error("Router returned an empty response");
  }

  const parsed = JSON.parse(content);
  return fromRouterJson(parsed);
}

/** Calls a Nano/Luna/search answer model and returns a validated AnswerResult. Throws on any failure. */
export async function callAnswerModel(
  tier: AnswerTier,
  input: { userMessage: string; recentMessages: ChatMessage[] }
) {
  const openai = getClient();
  const { model, reasoningEffort } = MODEL_CONFIG[tier];
  const systemPrompt = tier === "search" ? SENIOR_SEARCH_ANSWER_SYSTEM_PROMPT : SENIOR_ANSWER_SYSTEM_PROMPT;

  const completion = await openai.chat.completions.create(
    {
      model,
      messages: [
        { role: "system", content: systemPrompt },
        ...toOpenAiMessages(input.recentMessages),
        { role: "user", content: input.userMessage },
      ],
      response_format: { type: "json_schema", json_schema: ANSWER_JSON_SCHEMA },
      // The search model doesn't accept reasoning_effort at all.
      ...(reasoningEffort ? { reasoning_effort: reasoningEffort } : {}),
    },
    { timeout: REQUEST_TIMEOUT_MS }
  );

  const content = completion.choices[0]?.message?.content;
  if (!content) {
    throw new Error(`${tier} model returned an empty response`);
  }

  const parsed = JSON.parse(content);
  return fromAnswerJson(parsed);
}

const EXTENSION_BY_MIME: Record<string, string> = {
  "audio/webm": "webm",
  "audio/mp4": "mp4",
  "audio/aac": "aac",
  "audio/wav": "wav",
  "audio/ogg": "ogg",
  "audio/mpeg": "mp3",
  "audio/mp3": "mp3",
};

/** Transcribes a recorded voice question to Korean text. Throws on any failure. */
export async function transcribeAudio(audioBuffer: Buffer, mimeType: string): Promise<string> {
  const openai = getClient();
  // Browsers report MediaRecorder.mimeType with a codec suffix, e.g.
  // "audio/webm;codecs=opus" — strip it before the extension lookup.
  const baseMimeType = mimeType.split(";")[0].trim();
  const extension = EXTENSION_BY_MIME[baseMimeType] || "webm";

  const file = await toFile(audioBuffer, `voice-question.${extension}`, { type: mimeType });

  const transcription = await openai.audio.transcriptions.create(
    {
      file,
      model: MODEL_CONFIG.transcribe.model,
      language: "ko",
    },
    { timeout: REQUEST_TIMEOUT_MS }
  );

  const text = transcription.text?.trim();
  if (!text) {
    throw new Error("Transcription returned empty text");
  }
  return text;
}
