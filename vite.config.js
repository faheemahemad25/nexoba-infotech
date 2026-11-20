import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //  base: '/nexoba-infotech/',
   base: process.env.GITHUB_ACTIONS ? '/nexoba-infotech/' : '/',
});
