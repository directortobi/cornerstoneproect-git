import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    hmr: {
      port: 5173
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['framer-motion', 'gsap'],
    force: true
  },
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    target: 'esnext',
    minify: false
  },
  esbuild: {
    target: 'esnext'
  }
})
