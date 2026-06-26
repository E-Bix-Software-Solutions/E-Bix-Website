import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
})

export const config = {
  theme: {
    extend: {
      colors: {
        ebixBlue: "#1877F2",
      },
      keyframes: {
        subtleSwing: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        'subtle-swing': 'subtleSwing 4s ease-in-out infinite',
      },
    },
  }, 
}