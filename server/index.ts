import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { app } from "./app.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || process.env.BACKEND_PORT || 8787);

// Self-hosted production mode (outside Vercel) still serves the built SPA
// straight from this process, since there's no separate static host there.
if (process.env.NODE_ENV === "production") {
  const distDir = path.resolve(__dirname, "..", "dist");
  app.use(express.static(distDir));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
