import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// 0826 추가 
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/

//export default ({ mode }) => { // 프로젝트 환경변수 설정용
//process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
export default defineConfig({
  plugins: [
    vue({template: { transformAssetUrls },}),
    quasar(),
    ElementPlus(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      //'@': path.resolve(__dirname, './src'),
    },
  },
});
