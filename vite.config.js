import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // The existing codebase keeps JSX in .js files, so include those files in
  // the React transform while the project is migrated incrementally.
  plugins: [react({ include: /\.jsx?$/ })],
  esbuild: {
    loader: "jsx",
    include: /src[\\/].*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    entries: ["index.html"],
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
