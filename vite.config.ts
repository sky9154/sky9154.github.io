import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { viteStaticCopy } from "vite-plugin-static-copy";


export default defineConfig({
  base: "/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "CNAME",
          dest: "./"
        }
      ]
    }),
    {
      name: "copy-404",
      closeBundle() {
        const distPath = path.resolve(__dirname, "dist");
        const indexHtml = path.join(distPath, "index.html");
        const fourOhFourHtml = path.join(distPath, "404.html");

        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, fourOhFourHtml);
          console.log("\n✨ [Vite] 404.html generated successfully for GitHub Pages!\n");
        }
      }
    }
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@provider": path.resolve(__dirname, "./src/provider"),
      "@locales": path.resolve(__dirname, "./src/locales"),
      "@assets": path.resolve(__dirname, "./src/assets")
    },
  },
})