import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: [
    { find: "/components", replacement: `${process.cwd()}/src/components` },
  ],
});
