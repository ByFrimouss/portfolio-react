// ============================================================
// useImageLazy.js — Hook custom pour le lazy loading d'images
//
// POURQUOI CE HOOK ?
//   L'attribut natif loading="lazy" est bloqué dans certains
//   environnements (VS Code WebView, certains navigateurs anciens,
//   iframes sandboxées). Ce hook utilise l'IntersectionObserver
//   API directement — plus fiable et compatible partout.
//
// COMMENT ÇA MARCHE :
//   1. L'image est rendue avec src="" (pas de requête réseau)
//   2. IntersectionObserver surveille quand l'élément entre
//      dans le viewport (avec une marge de 200px anticipée)
//   3. Quand visible → on assigne le vrai `src` → chargement
//   4. Une fois chargée, on ajoute la classe CSS pour le fade-in
//
// USAGE :
//   const { imgRef, isLoaded } = useImageLazy(src);
//   <img ref={imgRef} alt="..." className={isLoaded ? 'loaded' : ''} />
// ============================================================

import { useRef, useState, useEffect } from "react";

export default function useImageLazy(src) {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el || !src) return;

    // Vérifie si IntersectionObserver est disponible
    // (tous les navigateurs modernes → oui)
    if (!("IntersectionObserver" in window)) {
      // Fallback : charge directement si IO non supporté
      el.src = src;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // L'image entre dans le viewport → on assigne le src
          el.src = src;

          // Écoute la fin du chargement pour le fade-in
          el.onload = () => setIsLoaded(true);
          el.onerror = () => setIsLoaded(true); // Évite de rester bloqué

          // Désinscrit l'observer (une seule fois suffit)
          observer.unobserve(el);
        }
      },
      {
        // rootMargin : commence à charger 200px AVANT que l'image
        // soit visible → pas de "flash" de chargement pour l'utilisateur
        rootMargin: "200px 0px",
        threshold: 0,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [src]);

  return { imgRef, isLoaded };
}
