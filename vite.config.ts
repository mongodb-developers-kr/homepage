import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { contentValidation } from "./scripts/validate-content";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contentValidation()],
  base: "/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      // GitHub Pages 는 SPA 경로를 모르므로 /links/ 를 별도 HTML 로 만듭니다.
      input: {
        main: path.resolve(__dirname, "index.html"),
        links: path.resolve(__dirname, "links/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@content": path.resolve(__dirname, "./content"),
    },
  },
});
