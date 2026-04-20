import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

/* redirigir url de: 
  /api/characters/?api_key=  
  a:
  https://comicvine.gamespot.com/characters/?api_key=
*/
export default defineConfig({

  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://comicvine.gamespot.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});