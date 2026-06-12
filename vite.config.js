// ============================================================
// vite.config.js
//
// POURQUOI CES HEADERS ?
//
// Edge (et Chrome strict mode) applique la "Permissions Policy"
// sur chaque réponse HTTP. Sans header explicite, Edge suppose
// des restrictions par défaut et affiche des warnings dans la
// console même si ton code ne fait rien de problématique.
//
// Les deux headers ajoutés :
//
// 1. Permissions-Policy
//    Déclare explicitement ce que ton site utilise ou n'utilise pas.
//    "lazyload=()" → désactive le lazy loading natif du navigateur
//    (on gère le nôtre via IntersectionObserver dans LazyImage.jsx)
//    "unload=()"   → désactive l'event "unload" (déprécié, Edge le signale)
//
// 2. Content-Security-Policy
//    Autorise Google Fonts (utilisé dans main.scss pour Syne, DM Sans,
//    JetBrains Mono) et les sources locales.
// ============================================================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    // Headers injectés par le serveur de dev Vite (localhost:5173)
    headers: {
      // Permissions Policy — supprime les warnings Edge/Chrome
      "Permissions-Policy": [
        "lazyload=()", // Désactive le lazy loading natif navigateur
        "unload=()", // Désactive l'event unload déprécié
        "camera=()", // Non utilisé
        "microphone=()", // Non utilisé
        "geolocation=()", // Non utilisé
      ].join(", "),

      // Autorise Google Fonts + sources locales
      "Content-Security-Policy": [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Vite HMR en dev
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob:",
        "connect-src 'self' ws://localhost:* http://localhost:* https://formspree.io", // HMR websocket
      ].join("; "),
    },
    open: true,
  },

  preview: {
    // Mêmes headers pour `npm run preview` (build de production local)
    headers: {
      "Permissions-Policy": [
        "lazyload=()",
        "unload=()",
        "camera=()",
        "microphone=()",
        "geolocation=()",
      ].join(", "),

      "Content-Security-Policy": [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob:",
        "connect-src 'self' https://formspree.io",
      ].join("; "),
    },
  },

  build: {
    // Optimisations build production
    target: "es2015",
    rollupOptions: {
      output: {
        // Sépare les vendors (React, Framer Motion) du code app
        // → meilleur cache navigateur
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
