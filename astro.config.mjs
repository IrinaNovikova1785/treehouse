import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import FullReload from "vite-plugin-full-reload";

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks()],
  trailingSlash: "never",
  devToolbar: { enabled: false },
  outDir: "build",
  build: {
    format: "file",
    inlineStylesheets: "never",
    assets: "js/bundle",
  },
  compressHTML: false,
  scopedStyleStrategy: "class",
  vite: {
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      minify: false,
      rollupOptions: {
        output: {
          hashCharacters: "hex",
          assetFileNames: ({ name }) => {
            if (name.includes("css")) return "css/[name].css";
            if (name.includes("js")) return "js/name-[hash].js";
            return "other/[name]-[hash][extname]";
          },
          entryFileNames: "js/entry/[name]-[hash].js",
        },
      },
    },
    css: {
      devSourcemap: true,
      modules: false,
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/style/mixins.scss";',
        },
      },
    },
    plugins: [FullReload(["public/js/**/*.js"])],
  },
});
