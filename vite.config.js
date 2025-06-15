// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Remove the invalid plugin import and usage
export default defineConfig({
  plugins: [react()],
})
