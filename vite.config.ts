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
      iconDirs: [path.resolve(__dirname, 'src/shared/assets/icons')],
      symbolId: 'icon-[name]'
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@app': resolve(__dirname, 'src/app'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@widgets': resolve(__dirname, 'src/widgets'),
      '@features': resolve(__dirname, 'src/features'),
      '@entities': resolve(__dirname, 'src/entities'),
      '@shared': resolve(__dirname, 'src/shared'),
    },
  },
})
