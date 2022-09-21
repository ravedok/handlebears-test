import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/global.scss';"
      }
    }
  }
});
