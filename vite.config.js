import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import {resolve} from 'path'

const pages = {
  index: resolve(__dirname, 'index.html'),
  accommodation: resolve(__dirname, 'accommodation.html'),
  poster: resolve(__dirname, 'poster.html'),
}

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
    base: './',
    build: {
      outDir: './dist',
      rollupOptions: {
        input: {
          ...pages,
        }
      }
    }

})