// ============================================================
// ScrollToTop.jsx
// Remonte en haut avant l'affichage de chaque nouvelle route.
// ============================================================

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // On ignore les liens vers une ancre éventuelle.
    if (location.hash) {
      return undefined;
    }

    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    // Empêche le scroll smooth global de ralentir la remise à zéro.
    html.style.scrollBehavior = "auto";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    // Sécurité supplémentaire selon les navigateurs.
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    const animationFrame = window.requestAnimationFrame(() => {
      html.style.scrollBehavior = previousScrollBehavior;
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, [location.pathname, location.search, location.key, location.hash]);

  return null;
}
