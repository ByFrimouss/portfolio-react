// ============================================================
// ProjectCard.jsx
// Carte de projet réutilisable.
//
// Props :
//   project  → objet projet (voir data/projects.js)
//   index    → index dans la liste (pour le délai de stagger)
//   featured → booléen (carte plus grande sur la home)
// ============================================================

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LazyImage from "./LazyImage";
import "./ProjectCard.scss";

// Variante d'entrée avec délai basé sur l'index
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1, // Stagger : chaque card décalée de 100ms
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ProjectCard({ project, index = 0, featured = false }) {
  const {
    slug,
    title,
    subtitle,
    description,
    tags,
    image,
    github,
    live,
    color,
  } = project;

  return (
    // motion.article pour l'animation à l'entrée dans le viewport
    // whileInView : déclenche l'animation quand la card entre dans le viewport
    // viewport.once : ne se déclenche qu'une seule fois
    <motion.article
      className={`project-card ${featured ? "project-card--featured" : ""}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={index}
      // Effet de lift au survol
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      // Bordure colorée via variable CSS inline
      style={{ "--card-color": color }}
    >
      {/* Image de couverture */}
      <Link to={`/projects/${slug}`} className="project-card__image-link">
        <div className="project-card__image">
          {image ? (
            // LazyImage : IntersectionObserver custom, pas d'avertissement WebView
            <LazyImage src={image} alt={title} aspectRatio="16/9" />
          ) : (
            <div className="project-card__placeholder">
              <span>{title[0]}</span>
            </div>
          )}

          {/* Overlay au hover */}
          <div className="project-card__overlay">
            <span className="project-card__view-btn">Voir le projet →</span>
          </div>
        </div>
      </Link>

      {/* Contenu texte */}
      <div className="project-card__body">
        {/* Tags techniques */}
        <ul className="project-card__tags">
          {tags.slice(0, 3).map((tag) => (
            <li key={tag} className="project-card__tag">
              {tag}
            </li>
          ))}
        </ul>

        {/* Titre */}
        <Link to={`/projects/${slug}`} className="project-card__title-link">
          <h3 className="project-card__title">{title}</h3>
        </Link>

        {/* Sous-titre */}
        <p className="project-card__subtitle">{subtitle}</p>

        {/* Description */}
        <p className="project-card__desc">{description}</p>

        {/* Liens */}
        <div className="project-card__links">
          <Link
            to={`/projects/${slug}`}
            className="project-card__link project-card__link--primary"
          >
            Détails
          </Link>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="GitHub"
            >
              GitHub ↗
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="Demo live"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    github: PropTypes.string,
    live: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
  featured: PropTypes.bool,
};
