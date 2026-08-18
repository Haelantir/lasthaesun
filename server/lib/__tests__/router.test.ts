import { describe, it, expect, vi } from "vitest";
import { routeMessage, trimRecentMessages, ROUTER_FAILURE_FALLBACK } from "../router";
import { makeRouterResult } from "./testHelpers";
import type { ChatMessage } from "../../../shared/types";

const baseInput = { userMessage: "질문입니다", recentMessages: [], hasImage: false, hasFile: false };

describe("routeMessage — success path", () => {
  it("returns exactly what the Router call resolves to", async () => {
    const expected = makeRouterResult({ route: "luna", reasonCode: "HIGH_STAKES_MEDICAL" });
    const callRouter = vi.fn().mockResolvedValue(expected);

    const result = await routeMessage(baseInput, callRouter);

    expect(result).toEqual(expected);
    expect(callRouter).toHaveBeenCalledWith(baseInput);
  });
});

describe("routeMessage — always falls back to Luna on failure, never Nano", () => {
  const failureModes: Array<[string, () => Promise<never>]> = [
    ["timeout", () => Promise.reject(new Error("Request timed out"))],
    ["API error", () => Promise.reject(new Error("500 Internal Server Error"))],
    [
      "malformed JSON",
      () =>
        Promise.reject(
          new SyntaxError("Unexpected token o in JSON at position 0")
        ),
    ],
    [
      "schema validation failure",
      () => Promise.reject(new Error("ZodError: invalid enum value for route")),
    ],
    ["empty response", () => Promise.reject(new Error("Router returned an empty response"))],
    [
      "unexpected exception",
      () => {
        throw new TypeError("something went very wrong");
      },
    ],
  ];

  it.each(failureModes)("falls back to luna on: %s", async (_label, rejector) => {
    const callRouter = vi.fn().mockImplementation(rejector);

    const result = await routeMessage(baseInput, callRouter);

    expect(result).toEqual(ROUTER_FAILURE_FALLBACK);
    expect(result.route).toBe("luna");
  });
});

describe("trimRecentMessages", () => {
  const makeMessages = (n: number): ChatMessage[] =>
    Array.from({ length: n }, (_, i) => ({ role: "user", content: `msg-${i}` }));

  it("keeps everything when under the limit", () => {
    const messages = makeMessages(3);
    expect(trimRecentMessages(messages, 8)).toEqual(messages);
  });

  it("keeps only the most recent messages when over the limit", () => {
    const messages = makeMessages(20);
    const trimmed = trimRecentMessages(messages, 8);
    expect(trimmed).toHaveLength(8);
    expect(trimmed[0].content).toBe("msg-12");
    expect(trimmed[7].content).toBe("msg-19");
  });

  it("defaults to a bounded window without needing an explicit limit", () => {
    const messages = makeMessages(50);
    const trimmed = trimRecentMessages(messages);
    expect(trimmed.length).toBeLessThan(50);
    expect(trimmed.length).toBeGreaterThan(0);
  });
});
