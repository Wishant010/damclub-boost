import { defineConfig, type ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => ({
  base: command === 'build' && mode === 'production' ? '/damclub-boost/' : '/',
  server: {
    host: "0.0.0.0", // Listen on all interfaces for better local development
    port: 8080,
    strictPort: true, // Fail if port is in use
    open: false, // Don't auto-open browser
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
  build: {
    minify: 'terser' as const,
    cssMinify: 'esbuild' as const,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@tanstack/react-query', 'react-hook-form'],
          animations: ['gsap'],
          three: ['three', '@react-three/fiber']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    reportCompressedSize: true
  }
}));
