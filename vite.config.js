// ============================================================
// vite.config.js
// ============================================================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    // Headers uniquement pour le serveur de dev local (localhost:5173)
    // Les headers de production sont gérés dans vercel.json
    headers: {
      "Permissions-Policy": [
        "unload=()",
        "camera=()",
        "microphone=()",
        "geolocation=()",
      ].join(", "),

      "Content-Security-Policy": [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Vite HMR en dev
        "style-src 'self' 'unsafe-inline'",
        "font-src 'self'",
        "img-src 'self' data: blob:",
        "connect-src 'self' ws://localhost:* http://localhost:* https://formspree.io",
      ].join("; "),
    },
    open: true,
  },

  // preview supprimé — géré par vercel.json en production

  build: {
    target: "es2015",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          redux: ["@reduxjs/toolkit", "react-redux"],
        },
      },
    },
  },
});
