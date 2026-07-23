// ============================================================
// HeroSlider.jsx — Hero de Stéphanie COUPAMA "Fri'MouSs"
// ============================================================

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import "./HeroSlider.scss";

const HERO_IMAGE = "/images/cover_2-removebg-preview.webp";

const ROTATING_WORDS = [
  "Développeuse React JS",
  "Développeuse WordPress",
  "Graphiste Web",
  "E.Commerce",
  "Créatrice d'expériences web",
  "Développeuse Augmentée IA",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function HeroSlider() {
  const [wordIndex, setWordIndex] = useState(0);
  const scrollSectionRef = useRef(null);
  const visualRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Position normalisée du curseur : entre -0,5 et 0,5.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouvement amorti afin d'éviter une parallaxe trop nerveuse.
  const springX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  const photoX = useTransform(springX, (value) => value * 14);
  const photoY = useTransform(springY, (value) => value * 8);
  const glowX = useTransform(springX, (value) => value * 26);
  const glowY = useTransform(springY, (value) => value * 20);

  // ----------------------------------------------------------
  // Apparition du portrait pilotée par le scroll
  // ----------------------------------------------------------

  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start start", "end end"],
  });

  // Lissage pour éviter une animation trop sèche avec la molette.
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    mass: 0.25,
    restDelta: 0.001,
  });

  // L'image est absente au début, puis grandit jusqu'à 100 %.
  // Elle atteint sa taille finale avant la fin du sticky afin
  // de rester entièrement visible pendant un court instant.
  const portraitScale = useTransform(
    smoothScrollProgress,
    [0, 0.08, 0.82, 1],
    [0.08, 0.08, 1, 1],
  );

  const portraitOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.05, 0.18, 1],
    [0, 0, 1, 1],
  );

  const portraitY = useTransform(
    smoothScrollProgress,
    [0, 0.08, 0.82, 1],
    [150, 150, 0, 0],
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setWordIndex((previousIndex) => {
        return (previousIndex + 1) % ROTATING_WORDS.length;
      });
    }, 2800);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleVisualMouseMove = (event) => {
    if (prefersReducedMotion || !visualRef.current) {
      return;
    }

    const bounds = visualRef.current.getBoundingClientRect();

    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handleVisualMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const line1 = "Salut ! Moi c'est ";
  const line2 = "Stéphanie";

  return (
    <div className="hero-scroll" ref={scrollSectionRef}>
      <section className="hero">
        {/* Fond décoratif */}
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__gradient" />
          <div className="hero__grid" />

          <motion.div
            className="hero__orb hero__orb--1"
            animate={
              prefersReducedMotion
                ? { x: 0, y: 0 }
                : { y: [-20, 20, -20], x: [-10, 10, -10] }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />

          <motion.div
            className="hero__orb hero__orb--2"
            animate={
              prefersReducedMotion
                ? { x: 0, y: 0 }
                : { y: [20, -20, 20], x: [10, -10, 10] }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        </div>

        <div className="container hero__container">
          {/* Badge */}
          <motion.div
            className="hero__badge"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <span className="hero__badge-dot" />
            By Fri'MouSs · La Réunion
          </motion.div>

          {/* Titre */}
          <div className="hero__title-wrapper">
            <motion.h1
              className="hero__greeting"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ perspective: 1000 }}
            >
              {line1.split("").map((character, index) => (
                <motion.span
                  key={`${character}-${index}`}
                  className="hero__letter"
                  variants={letterVariants}
                >
                  {character === " " ? "\u00A0" : character}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h2
              className="hero__name"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ perspective: 1000 }}
            >
              {line2.split("").map((character, index) => (
                <motion.span
                  key={`${character}-${index}`}
                  className="hero__letter hero__letter--name"
                  variants={letterVariants}
                >
                  {character === " " ? "\u00A0" : character}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* Métier rotatif */}
          <div className="hero__role-wrapper">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                className="hero__role"
                initial={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }
                }
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                }}
              >
                {ROTATING_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>

            <motion.span
              className="hero__cursor"
              animate={
                prefersReducedMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 1, repeat: Infinity }
              }
              aria-hidden="true"
            >
              _
            </motion.span>
          </div>

          {/* Description */}
          <motion.p
            className="hero__desc"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.9}
          >
            De la cuisine au code, en passant par le transport et le graphisme —
            j'ai construit mon chemin avec détermination. Aujourd'hui je crée
            des expériences web modernes et mémorables.
          </motion.p>

          {/* Boutons */}
          <motion.div
            className="hero__cta"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={1.1}
          >
            <Link to="/projects" className="btn btn--primary">
              Voir mes projets <span className="btn__arrow">→</span>
            </Link>

            <Link to="/about" className="btn btn--ghost">
              Mon parcours
            </Link>
          </motion.div>

          {/* Indicateur de scroll */}
          <motion.div
            className="hero__scroll"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={1.4}
          >
            <motion.div
              className="hero__scroll-line"
              animate={
                prefersReducedMotion ? { scaleY: 1 } : { scaleY: [0, 1, 0] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            />
            <span>Scroll</span>
          </motion.div>
        </div>

        {/* Portrait graphique piloté par le scroll */}
        <div
          className="hero__visual"
          ref={visualRef}
          onMouseMove={handleVisualMouseMove}
          onMouseLeave={handleVisualMouseLeave}
          style={{
            "--hero-image": `url("${HERO_IMAGE}")`,
          }}
        >
          {/* Ce wrapper reçoit l'animation liée au scroll. */}
          <motion.div
            className="hero__visual-reveal"
            style={
              prefersReducedMotion
                ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }
                : {
                    opacity: portraitOpacity,
                    scale: portraitScale,
                    y: portraitY,
                  }
            }
          >
            {/* Copie floutée de la silhouette derrière le portrait */}
            <motion.div
              className="hero__ambient-glow"
              style={
                prefersReducedMotion
                  ? {
                      backgroundImage: `url("${HERO_IMAGE}")`,
                      scale: 1.04,
                    }
                  : {
                      backgroundImage: `url("${HERO_IMAGE}")`,
                      x: glowX,
                      y: glowY,
                      scale: 1.04,
                    }
              }
              aria-hidden="true"
            />

            {/* Anneau orbital */}
            <div className="hero__ring" aria-hidden="true" />

            {/* Masque visuel permanent */}
            <div className="hero__photo-mask">
              {/* La parallaxe souris reste indépendante du scroll. */}
              <motion.div
                className="hero__photo-stage"
                style={
                  prefersReducedMotion
                    ? {
                        x: 0,
                        y: 0,
                      }
                    : {
                        x: photoX,
                        y: photoY,
                      }
                }
              >
                {/* Copie visible uniquement pendant le glitch */}
                <img
                  src={HERO_IMAGE}
                  alt=""
                  className="hero__photo hero__photo--glitch"
                  aria-hidden="true"
                  draggable={false}
                />

                {/* Portrait principal */}
                <img
                  src={HERO_IMAGE}
                  alt="Portrait de Stéphanie Coupama"
                  className="hero__photo hero__photo--main"
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                />

                {/* Effets contenus dans la silhouette */}
                <span className="hero__photo-scan" aria-hidden="true" />
                <span className="hero__photo-grain" aria-hidden="true" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
