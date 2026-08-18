import { app } from "../server/app.js";

// Chat requests can chain a router call plus up to 3 answer-model attempts
// (each with its own 30s timeout, see REQUEST_TIMEOUT_MS in openaiClient.ts),
// so the default Vercel duration isn't enough headroom in the worst case.
export const config = {
  maxDuration: 120,
};

export default app;
