import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'

import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/5_shared/assets/icons')],
      symbolId: 'icon-[name]'
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@app': resolve(__dirname, 'src/0_app'),
      '@pages': resolve(__dirname, 'src/1_pages'),
      '@widgets': resolve(__dirname, 'src/2_widgets'),
      '@features': resolve(__dirname, 'src/3_features'),
      '@entities': resolve(__dirname, 'src/4_entities'),
      '@shared': resolve(__dirname, 'src/5_shared'),
    },
  },
})
