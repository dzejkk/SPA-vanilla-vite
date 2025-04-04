// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    // This is important for SPA routing to work correctly
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  // Important to handle client-side routing
  preview: {
    port: 8080,
    strictPort: true
  }
});