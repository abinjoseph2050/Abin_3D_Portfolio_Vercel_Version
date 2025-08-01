import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
      react(),
    tailwindcss(),
  ],
    base: process.env.VITE_BASE_PATH || "/Abin_3D_Portfolio_Vercel_Version"
})