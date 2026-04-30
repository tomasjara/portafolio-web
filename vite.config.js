import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/portafolio-web/',
  server: {
    host: '0.0.0.0',  
  },
  preview: {
    host: '0.0.0.0',
  },
  plugins: [react()],
})
