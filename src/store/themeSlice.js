// ============================================================
// themeSlice.js — Redux slice pour le thème dark/light
//
// CORRECTION : on initialise aussi data-theme sur <html>
// au chargement de la page (avant même le premier render React).
// ============================================================

import { createSlice } from "@reduxjs/toolkit";

// Thème sauvegardé en localStorage (persiste entre sessions)
// Par défaut : 'dark'
const savedTheme = localStorage.getItem("theme") || "dark";

// Applique immédiatement au chargement (évite le flash blanc)
document.documentElement.setAttribute("data-theme", savedTheme);

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: savedTheme,
  },
  reducers: {
    // Bascule dark ↔ light
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
      // Applique immédiatement sur le DOM (le useEffect dans App.jsx
      // fait pareil, mais ceci évite tout délai)
      document.documentElement.setAttribute("data-theme", state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
      document.documentElement.setAttribute("data-theme", action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme.mode;
export default themeSlice.reducer;
