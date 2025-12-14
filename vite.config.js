import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  build: {
    rollupOptions: {
      input: 'src/main.jsx',
      output: {
        entryFileNames: 'bundle/[name].js',
        chunkFileNames: 'bundle/[name]-[hash].js',
        assetFileNames: 'bundle/[name]-[extname]'
      },
      external: ['react', 'react-dom']
    }
  }
})
