import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteVSCode from 'vite-vscode';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteVSCode()],
});
