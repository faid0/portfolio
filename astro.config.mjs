// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://h2faid.me",
  trailingSlash: "always",

  vite: {
    plugins: [tailwindcss()],
  },
});