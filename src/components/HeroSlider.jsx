// ============================================================
// HeroSlider.jsx — Hero de Stéphanie COUPAMA "Fri'MouSs"
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./HeroSlider.scss";

// Compétences qui tournent en boucle — ton vrai stack
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
    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSlider() {
  const [wordIndex, setWordIndex] = useState(0);

  const smoothY = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const line1 = "Salut ! Moi c'est ";
  const line2 = "Stéphanie";

  return (
    <section className="hero">
      {/* Fond décoratif */}
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid" />
        <motion.div
          className="hero__orb hero__orb--1"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container hero__container">
        {/* Badge pseudo */}
        <motion.div
          className="hero__badge"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <span className="hero__badge-dot" />
          By Fri'MouSs · La Réunion 🌴
        </motion.div>

        {/* Titre : prénom + nom animés lettre par lettre */}
        <div className="hero__title-wrapper">
          {/* Prénom */}
          <motion.h1
            className="hero__greeting"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: 1000 }}
          >
            {line1.split("").map((char, i) => (
              <motion.span
                key={i}
                className="hero__letter"
                variants={letterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Nom de famille — dégradé */}
          <motion.h2
            className="hero__name"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: 1000 }}
          >
            {line2.split("").map((char, i) => (
              <motion.span
                key={i}
                className="hero__letter hero__letter--name"
                variants={letterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Rôle rotatif */}
        <div className="hero__role-wrapper">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              className="hero__role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
          <motion.span
            className="hero__cursor"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            _
          </motion.span>
        </div>

        {/* Description courte */}
        <motion.p
          className="hero__desc"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.9}
        >
          De la cuisine au code, en passant par le transport et le graphisme —
          j'ai construit mon chemin avec détermination. Aujourd'hui je crée des
          expériences web modernes et mémorables.
        </motion.p>

        {/* CTA */}
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

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1.4}
        >
          <motion.div
            className="hero__scroll-line"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span>Scroll</span>
        </motion.div>
      </div>

      {/* PHOTO PARALLAX */}
      <div className="hero__visual">
        <motion.img
          src="/images/cover_2-removebg-preview.webp"
          alt="Stéphanie Coupama"
          className="hero__photo"
          fetchPriority="high"
          decoding="async"
          style={{ y: smoothY }}
          animate={{ x: [0, 5, 0, -5, 0], rotateZ: [-1, 1, -1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
