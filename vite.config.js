import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root path for Vercel and most platforms
  // For GitHub Pages, manually change this to '/Portfolio/'
  base: '/',
})
