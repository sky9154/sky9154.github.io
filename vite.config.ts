import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';


export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME',
          dest: './'
        }
      ]
    })
  ],
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