import { defineConfig } from 'vite'

export default defineConfig({
  // Base public path when served in production
  base: './',
  
  // Development server settings
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Build settings
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['gsap', 'bootstrap']
  }
}) 