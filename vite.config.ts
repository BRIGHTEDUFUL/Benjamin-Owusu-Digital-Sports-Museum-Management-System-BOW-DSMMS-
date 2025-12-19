import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync, existsSync, mkdirSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Benjamin-Owusu-Digital-Sports-Museum-Management-System-BOW-DSMMS-/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Plugin to copy 404.html and .nojekyll to dist after build
    {
      name: 'copy-spa-files',
      closeBundle() {
        const distPath = path.resolve(__dirname, 'dist');
        if (!existsSync(distPath)) {
          mkdirSync(distPath, { recursive: true });
        }
        
        // Copy 404.html from public to dist
        const source404 = path.resolve(__dirname, 'public', '404.html');
        const dest404 = path.resolve(distPath, '404.html');
        if (existsSync(source404)) {
          copyFileSync(source404, dest404);
          console.log('✓ Copied 404.html to dist/');
        }
        
        // Copy .nojekyll to dist
        const sourceNojekyll = path.resolve(__dirname, '.nojekyll');
        const destNojekyll = path.resolve(distPath, '.nojekyll');
        if (existsSync(sourceNojekyll)) {
          copyFileSync(sourceNojekyll, destNojekyll);
          console.log('✓ Copied .nojekyll to dist/');
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
