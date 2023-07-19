import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  // build: {
  //   ssr: true,
  //   rollupOptions: {
  //     input: {
  //       main: './src/main.jsx', // Ваш вхідний файл для серверного рендерингу (SSR)
  //     },
  //   },
  // },
})
