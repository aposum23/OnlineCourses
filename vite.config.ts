import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import vue from '@vitejs/plugin-vue';
import mkcert from 'vite-plugin-mkcert';
import svgLoader from 'vite-svg-loader';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      mkcert(),
      svgLoader({ defaultImport: 'url' }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  },
  server: {
    hmr: {
      overlay: false
    },
    host: '0.0.0.0',
    port: 8080,
  },
})