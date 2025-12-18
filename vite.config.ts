import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/terra_axis/",
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["global-builtin", "color-functions", "import"],
      },
    },
  },
});
