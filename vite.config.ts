import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/ots-email-builder'],
      outDir: 'dist',
      staticImport: true,
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      src: path.resolve(__dirname, './src'),
      documents: path.resolve(__dirname, './src/documents'),
      getConfiguration: path.resolve(__dirname, './src/getConfiguration'),
    },
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'EmailBuilder',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: true,
  },
});
