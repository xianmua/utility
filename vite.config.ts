import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
    ],
  },
});
