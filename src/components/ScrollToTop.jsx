// ============================================================
// ScrollToTop.jsx
//
// POURQUOI CE COMPOSANT ?
// React Router change l'URL et affiche le nouveau composant
// MAIS il ne touche pas à la position du scroll — le navigateur
// reste exactement où tu étais sur la page précédente.
//
// Ce composant écoute chaque changement de pathname via
// useLocation() et remonte en haut de page instantanément.
//
// UTILISATION : placé une seule fois dans App.jsx, AVANT le Router.
// Il n'affiche rien visuellement (return null).
// ============================================================

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remonte en haut à chaque changement de route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 'instant' et pas 'smooth' pour éviter
      // un scroll visible entre les pages
    });
  }, [pathname]); // Se déclenche uniquement quand l'URL change

  return null; // Ce composant ne rend rien dans le DOM
}
