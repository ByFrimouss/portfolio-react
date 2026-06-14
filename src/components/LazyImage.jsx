// ============================================================
// LazyImage.jsx — Composant image avec lazy loading custom
//
// Remplace <img loading="lazy"> partout dans le projet.
// Affiche un skeleton animé pendant le chargement,
// puis fait apparaître l'image en fondu.
//
// USAGE :
//   <LazyImage src="/images/projet.webp" alt="Mon projet" />
//   <LazyImage src={url} alt="Photo" className="my-class" aspectRatio="16/9" />
// ============================================================

import PropTypes from "prop-types";
import useImageLazy from "./UseImageLazy";

export default function LazyImage({
  src,
  alt = "",
  className = "",
  aspectRatio = "16/9",
  style = {},
}) {
  const { imgRef, isLoaded } = useImageLazy(src);

  return (
    // Wrapper qui maintient le ratio pendant le chargement
    <div
      className={`lazy-image-wrapper ${className}`}
      style={{
        position: "relative",
        aspectRatio,
        overflow: "hidden",
        background: "var(--color-surface, #0d1628)",
        ...style,
      }}
    >
      {/* Skeleton animé visible pendant le chargement */}
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, var(--color-surface) 25%, rgba(106,92,255,0.08) 50%, var(--color-surface) 75%)",
            backgroundSize: "200% 100%",
            animation: "skeletonShimmer 1.5s infinite linear",
          }}
        />
      )}

      {/* L'image réelle — src assigné par useImageLazy */}
      <img
        ref={imgRef}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          // Fade-in quand chargée
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Animation skeleton dans le style global */}
      <style>{`
        @keyframes skeletonShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  aspectRatio: PropTypes.string,
  style: PropTypes.object,
};
