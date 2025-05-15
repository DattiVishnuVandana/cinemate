import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

 /** @type {import('tailwindcss').Config} */
// https://vite.dev/config/
export default defineConfig({
  
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },plugins: [react()],
  server: {
    port: 3000,
    open: true,  // Open this file in development
  },
})