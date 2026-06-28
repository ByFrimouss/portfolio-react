// ============================================================
// ProjectDetail.jsx
// ============================================================

import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import { ParallaxImage } from "../components/ParallaxSection";
import { getProjectBySlug } from "../data/projects";
import Section from "../components/sectionDetailProject";

import "../pages/ProjectDetail.scss";
import BackToTopProgress from "../components/BackToTopProgress";

/**
 * Animation globale
 */
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

/**
 * Emoji stack
 */
const getEmoji = (tag) => {
  const map = {
    // React ecosystem
    React: "⚛️",
    "React Router": "🧭",
    "Redux Toolkit": "🔄",
    Redux: "🔄",
    "Framer Motion": "🎬",
    SwiperJS: "🎠",
    Recharts: "📊",
    "prop-types": "📋",
    JSDoc: "📖",

    // JavaScript
    JavaScript: "🟨",
    jQuery: "🟡",
    Ajax: "⚡",
    JWT: "🔐",
    Jest: "🧪",
    "Tests unitaires": "🧪",
    "Tests E2E": "🔗",
    "Chrome Debugger": "🔍",
    "API REST": "🌐",
    Axios: "🔌",

    // CSS / styles
    CSS: "🎨",
    SASS: "🖌️",
    "Mobile First": "📱",
    "GitHub Pages": "🌍",

    // HTML
    HTML: "🧱",

    // PHP / WordPress
    PHP: "🐘",
    WordPress: "📝",
    Elementor: "🧩",
    PHPMyAdmin: "🗄️",
    SEOPress: "🔍",
    Lighthouse: "📊",

    // Build tools
    Vite: "⚡",
    npm: "📦",

    // Data / API
    "Node.js": "🟢",
    API: "🔌",
    REST: "🌐",
    JSON: "📄",
    Swagger: "📄",

    // UX / Design
    Figma: "🎨",
    "UX Design": "✏️",
    Agile: "🔁",
    Kanban: "📋",
    "User Stories": "📝",

    // Other
    Git: "🌿",
    GitHub: "🐙",
    "Green Code": "🌱",
    Tailwind: "💨",
    "ACF/SCF": "🗂️",
  };
  return map[tag] || "⚙️";
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  const [selectedIndex, setSelectedIndex] = useState(null);
  // State zoom
  const [isZoomed, setIsZoomed] = useState(false);

  const images = project?.details?.images || [];

  // Fonction qui ferme la lightbox ET reset le zoom
  const closeLightbox = () => {
    setSelectedIndex(null);
    setIsZoomed(false);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      // Utilise closeLightbox au lieu de setSelectedIndex(null)
      if (e.key === "Escape") closeLightbox();

      if (e.key === "ArrowRight") {
        setIsZoomed(false); // reset zoom au changement d'image
        setSelectedIndex((prev) => (prev + 1) % images.length);
      }

      if (e.key === "ArrowLeft") {
        setIsZoomed(false); // reset zoom au changement d'image
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, images.length]);

  if (!project) return <Navigate to="/projects" replace />;

  const {
    title,
    subtitle,
    details,
    tags,
    image,
    github,
    npm,
    live,
    color,
    year,
  } = project;

  return (
    <>
      {" "}
      {/* On ouvre le Fragment ici */}
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* HERO */}
        <div className="project-detail-hero" style={{ "--accent": color }}>
          <div className="project-detail-hero__image">
            <ParallaxImage src={image} alt={title} speed={0.3} />
            <div className="project-detail-hero__overlay" />
          </div>

          <div className="container project-detail-hero__content">
            <Link to="/projects" className="project-detail__back">
              ← Retour aux projets
            </Link>

            <div className="project-detail__tags">
              {tags.map((tag) => (
                <span key={tag} className="project-detail__tag">
                  {tag}
                </span>
              ))}
            </div>

            <h1>{title}</h1>
            <p>
              {subtitle} · {year}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <section className="section">
          <div className="container project-detail__content">
            {/* CONTEXTE */}
            <Section title="Contexte">
              <p>{details.context}</p>
            </Section>

            {/* OBJECTIFS + STACK */}
            <div className="project-grid">
              <Section title="Objectifs">
                <ul>
                  {details.objectives.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Stack technique">
                <div className="stack-grid">
                  {tags.map((tag, i) => (
                    <span key={i} className="stack-chip">
                      {getEmoji(tag)} {tag}
                    </span>
                  ))}
                </div>
              </Section>
            </div>

            {/* PROBLEMES / SOLUTIONS / RESULTAT */}
            <div className="project-compare">
              <div className="compare-card problems">
                <h3>⚠️ Problèmes</h3>
                <ul>
                  {details.problems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="compare-card solutions">
                <h3>🛠️ Solutions</h3>
                <ul>
                  {details.solutions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="compare-card result">
                <h3>🎯 Résultat</h3>
                <p>{details.result}</p>
              </div>
            </div>

            {/* TIMELINE */}
            <Section title="Réalisation">
              <div className="timeline">
                {details.work.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <span className="timeline-dot" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* LEARNINGS */}
            <Section title="Compétences acquises">
              <ul>
                {details.learnings.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>

            {/* CONSEIL */}
            <Section title="Conseil">
              <p>{details.advice}</p>
            </Section>

            {/* OUTILS */}
            {details.tools && details.tools.length > 0 && (
              <Section title="Ce qu'on peut faire avec ces outils">
                <div className="tools-grid">
                  {details.tools.map((tool, i) => (
                    <div key={i} className="tool-card">
                      <div className="tool-card__header">
                        <span className="tool-card__icon">{tool.icon}</span>
                        <h3 className="tool-card__name">{tool.name}</h3>
                      </div>
                      <ul className="tool-card__list">
                        {tool.what.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* GALERIE */}
            <Section title="Galerie du projet">
              {/* VIDEO */}
              {details.video && (
                <div className="project-video">
                  {details.video.includes("youtube") ||
                  details.video.includes("vimeo") ? (
                    <iframe
                      src={details.video}
                      title={`Démo ${title}`}
                      allowFullScreen
                      className="project-video__iframe"
                    />
                  ) : (
                    <video
                      src={details.video}
                      controls
                      preload="metadata"
                      poster={details.videoPoster}
                      className="project-video__player"
                    />
                  )}
                </div>
              )}
              <div className="project-gallery">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsZoomed(false); // reset zoom à l'ouverture
                    }}
                  >
                    <img src={img} alt={`project-${index}`} />
                  </div>
                ))}
              </div>
            </Section>

            {/* ACTIONS */}
            <div className="project-detail__actions">
              {github && (
                <a href={github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              )}
              {npm && (
                <a href={npm} target="_blank" rel="noreferrer">
                  npm ↗
                </a>
              )}
              {live && (
                <a href={live} target="_blank" rel="noreferrer">
                  Voir en ligne ↗
                </a>
              )}
            </div>
          </div>
        </section>

        {/* LIGHTBOX */}
        {selectedIndex !== null && (
          // 👇 MODIFIÉ — utilise closeLightbox
          <div className="lightbox" onClick={closeLightbox}>
            {/* CROIX DE FERMETURE */}
            <button
              className="lightbox-close"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Fermer"
            >
              ✕
            </button>

            <button
              className="nav prev"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false); // reset zoom au changement d'image
                setSelectedIndex(
                  selectedIndex === 0 ? images.length - 1 : selectedIndex - 1,
                );
              }}
            >
              ←
            </button>

            {/* 👇 MODIFIÉ — zoom au clic sur l'image */}
            <img
              src={images[selectedIndex]}
              alt="preview"
              className={isZoomed ? "zoomed" : ""}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            />

            <button
              className="nav next"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false); // reset zoom au changement d'image
                setSelectedIndex((selectedIndex + 1) % images.length);
              }}
            >
              →
            </button>

            <div className="dots">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === selectedIndex ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(false); // reset zoom au changement de dot
                    setSelectedIndex(i);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
      {/* 🟢 Maintenant ce composant est bien englobé et à sa place */}
      <BackToTopProgress />
    </>
  );
}
