import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/259c074a-8e47-4589-be0e-f4808c4837d9/preview',
  plugins: [react()],
  server: {
    port: 5208,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5208,
    },
  },
})
