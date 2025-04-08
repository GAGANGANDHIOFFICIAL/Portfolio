import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This is required for deployment
    allowedHosts: ['portfolio-pd2j.onrender.com'], // 👈 This is the key part
  },
});
