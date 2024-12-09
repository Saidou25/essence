import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    assetsInlineLimit: 0, // Ensures assets like images are not inlined
  },
});
