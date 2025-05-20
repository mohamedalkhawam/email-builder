import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      src: path.resolve(__dirname, './src'),
      documents: path.resolve(__dirname, './src/documents'),
      getConfiguration: path.resolve(__dirname, './src/getConfiguration'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'EmailBuilder',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@emotion/react', '@emotion/styled', '@mui/material', '@mui/icons-material'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
          '@mui/material': 'muiMaterial',
          '@mui/icons-material': 'muiIconsMaterial',
        },
        preserveModules: false,
        inlineDynamicImports: true,
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: true,
  },
});
