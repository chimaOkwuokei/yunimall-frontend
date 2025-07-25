import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true, // Enable PWA in development mode
      },
      strategies: 'injectManifest',
      srcDir: 'src/custom-sw',
      filename: 'sw.ts',
      manifest: {
        name: "Yunimall",
        short_name: "YMA",
        description: "Your description here",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          // {
          //   src: "/icons/icon-512x512.png",
          //   sizes: "512x512",
          //   type: "image/png",
          // },
        ],
      },
      // workbox: {
      //   globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      // },
    }),
  ],
  // server: {
  //   proxy: {
  //     // proxy's serve as temporary solutions for cors errors
  //     "/api": {
  //       target: "https://yunimall-backend.onrender.com",
  //       // target: "https://sunfish-saving-killdeer.ngrok-free.app",
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   }
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});