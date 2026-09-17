import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "@constants": fileURLToPath(new URL("./src/constants", import.meta.url)),
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      "@layout": fileURLToPath(
        new URL("./src/components/layout", import.meta.url),
      ),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@sections": fileURLToPath(
        new URL("./src/components/sections", import.meta.url),
      ),
    },
  },
});
