import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Local dev: forward relative /api calls to the Express backend,
      // matching the /api rewrite used in production (vercel.json)
      '/api': 'http://localhost:5000',
    },
  },
})
