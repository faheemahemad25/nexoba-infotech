import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //  base: '/nexoba-infotech/',
  //  base: '/',
  base: process.env.VITE_BASE_PATH || "/nexoba-infotech/",
});
