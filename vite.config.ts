import { defineConfig, type ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => ({
  base: command === 'build' ? '/damclub-boost/' : '/',
  server: {
    host: "::",
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
