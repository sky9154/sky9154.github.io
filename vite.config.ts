import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@content': '/src/content',
      '@context': '/src/context',
      '@pages': '/src/pages'
    }
  }
})