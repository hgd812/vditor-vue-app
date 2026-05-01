import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [vue(), viteStaticCopy({
    targets: [
      {
        src: 'node_modules/vditor/dist/**/*',
        dest: 'vditor/dist'
      }
    ]
  }), cloudflare()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})