import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/service/api/api': {
        target: 'https://sycret.ru',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
