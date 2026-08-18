import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const backendPort = process.env.BACKEND_PORT ?? "8787";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      // Manifest/SW work in dev too so installability can be checked without
      // a production build.
      devOptions: { enabled: true },
      manifest: {
        name: "무엇이든 물어보세요",
        short_name: "무엇이든 물어보세요",
        description: "궁금한 것을 편하게 물어보세요. 짧게 말씀하셔도 알아서 도와드립니다.",
        lang: "ko",
        start_url: "/",
        display: "standalone",
        background_color: "#faf8f4",
        theme_color: "#0f6d5c",
        icons: [
          { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
          { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
        ],
      },
      workbox: {
        // Precache the built app shell (JS/CSS/HTML/fonts) so it loads fast
        // and works even on a flaky connection.
        globPatterns: ["**/*.{js,css,html,woff2,png,svg}"],
        // The chat/transcribe API is always live data — never let the SW
        // serve a cached or stale answer.
        navigateFallbackDenylist: [/^\/api\//],
        runtimeCaching: [
          {
            urlPattern: /^\/api\//,
            handler: "NetworkOnly",
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${backendPort}`,
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: "node",
    include: ["server/**/*.test.ts"],
  },
});
