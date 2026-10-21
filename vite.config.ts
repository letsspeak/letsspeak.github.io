import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite の入口は src/index.html にしている。
// デプロイ用 Action がビルド済みの index.html をリポジトリ直下に置くため、
// 直下の index.html を入口にすると次回ビルドが古いバンドルを再利用してしまう。
export default defineConfig({
  plugins: [react()],
  root: 'src',
  publicDir: '../public',
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    fs: {
      strict: false
    }
  }
})
