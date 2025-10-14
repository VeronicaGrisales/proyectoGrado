import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Puerto
  },
  base: "/", //  muy importante para rutas
})
