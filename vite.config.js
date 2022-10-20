import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Preview from "vite-plugin-vue-component-preview";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Preview()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "node-fetch": "isomorphic-fetch",
    },
  },
});
