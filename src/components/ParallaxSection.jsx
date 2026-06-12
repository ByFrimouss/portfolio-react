// ============================================================
// ParallaxSection.jsx — Composant Parallax AU SCROLL
//
// SOLUTION FINALE pour les warnings Framer Motion :
//
// ❌ container: { current: window }  → window n'est pas un Element,
//    ResizeObserver plante avec "parameter 1 is not of type Element"
//
// ❌ container: windowRef global     → même problème
//
// ✅ Pas de `container` du tout      → Framer Motion utilise le scroll
//    de la page automatiquement, c'est son comportement par défaut.
//    Le seul vrai fix pour le warning "non-static position" est de
//    s'assurer que les ancêtres dans App.jsx ont position: relative.
// ============================================================

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import PropTypes from "prop-types";
import "./ParallaxSection.scss";

// ============================================================
// ParallaxSection — section dont le contenu se déplace au scroll
// ============================================================
export default function ParallaxSection({
  children,
  speed = 0.3,
  direction = "up",
  className = "",
  as = "section",
}) {
  const ref = useRef(null);

  // useScroll SANS container → utilise window.scrollY par défaut.
  // target: ref → mesure la progression quand cet élément traverse le viewport.
  // offset: start/end → 0 quand l'élément entre, 1 quand il sort.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const amplitude = speed * 100;
  const outputRange =
    direction === "up"
      ? [`${amplitude * 0.5}%`, `-${amplitude * 0.5}%`]
      : [`-${amplitude * 0.5}%`, `${amplitude * 0.5}%`];

  const rawY = useTransform(scrollYProgress, [0, 1], outputRange);
  // useSpring lisse le déplacement — sans lui l'effet est saccadé
  const y = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const MotionTag = motion[as] || motion.section;

  return (
    <MotionTag
      ref={ref}
      className={`parallax-section ${className}`}
      style={{ y, position: "relative" }}
    >
      {children}
    </MotionTag>
  );
}

ParallaxSection.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down"]),
  className: PropTypes.string,
  as: PropTypes.string,
};

// ============================================================
// ParallaxImage — image qui défile plus vite que son conteneur
// ============================================================
export function ParallaxImage({ src, alt = "", speed = 0.4, className = "" }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const amplitude = speed * 100;
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    [`${amplitude * 0.5}%`, `-${amplitude * 0.5}%`],
  );
  const y = useSpring(rawY, { stiffness: 80, damping: 25 });

  return (
    // overflow: hidden obligatoire — l'image est scale(1.2)
    // donc elle dépasse du cadre, on masque ce dépassement.
    <div
      ref={ref}
      className={`parallax-image-wrapper ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="parallax-image"
        style={{ y, scale: 1.2 }}
        loading="lazy"
        decoding="async"
        width="800"
        height="600"
      />
    </div>
  );
}

ParallaxImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  speed: PropTypes.number,
  className: PropTypes.string,
};

// ============================================================
// ParallaxText — texte défilant horizontalement au scroll
// ============================================================
export function ParallaxText({ children, speed = 0.5 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${-speed * 100}%`],
  );
  const x = useSpring(rawX, { stiffness: 60, damping: 20 });

  return (
    <div
      ref={ref}
      className="parallax-text-wrapper"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.div className="parallax-text-inner" style={{ x }}>
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
        <span aria-hidden="true">{children}</span>
      </motion.div>
    </div>
  );
}

ParallaxText.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
};
