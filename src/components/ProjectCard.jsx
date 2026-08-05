// ============================================================
// ProjectCard.jsx — Carte projet réutilisable
// ============================================================

import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LazyImage from "./LazyImage";
import "./ProjectCard.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: Math.min(index * 0.06, 0.36),
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ProjectCard({
  project,
  index = 0,
  featured = false,
  headingLevel = "h3",
}) {
  const reduceMotion = useReducedMotion();
  const Heading = headingLevel;

  const {
    slug,
    title,
    subtitle,
    description,
    tags = [],
    image,
    imageAlt,
    github,
    live,
    npm,
    color,
    year,
    type,
    highlight,
  } = project;

  const visibleTags = tags.slice(0, featured ? 4 : 3);
  const hiddenTagCount = Math.max(tags.length - visibleTags.length, 0);
  const titleId = `project-card-title-${slug}`;

  return (
    <motion.article
      layout
      className={`project-card ${featured ? "project-card--featured" : ""}`}
      variants={cardVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
      exit={
        reduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              scale: 0.97,
              transition: { duration: 0.2 },
            }
      }
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ layout: { duration: reduceMotion ? 0 : 0.4 } }}
      style={{ "--card-color": color || "var(--color-primary)" }}
      aria-labelledby={titleId}
    >
      <Link
        to={`/projects/${slug}`}
        className="project-card__image-link"
        aria-label={`Découvrir l’étude de cas ${title}`}
      >
        <div className="project-card__image">
          {image ? (
            <LazyImage
              src={image}
              alt={imageAlt || `Aperçu du projet ${title}`}
              aspectRatio="16/10"
            />
          ) : (
            <div className="project-card__placeholder" aria-hidden="true">
              <span>{title.charAt(0)}</span>
            </div>
          )}

          <div className="project-card__overlay" aria-hidden="true">
            <span className="project-card__view-btn">
              Voir l’étude de cas <span>↗</span>
            </span>
          </div>

          <span className="project-card__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </Link>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{year}</span>
          <span aria-hidden="true">•</span>
          <span>
            {type || (featured ? "Projet sélectionné" : "Étude de cas")}
          </span>
        </div>

        <ul className="project-card__tags" aria-label="Technologies utilisées">
          {visibleTags.map((tag) => (
            <li key={tag} className="project-card__tag">
              {tag}
            </li>
          ))}

          {hiddenTagCount > 0 && (
            <li
              className="project-card__tag project-card__tag--more"
              aria-label={`${hiddenTagCount} technologies supplémentaires`}
            >
              +{hiddenTagCount}
            </li>
          )}
        </ul>

        <Link to={`/projects/${slug}`} className="project-card__title-link">
          <Heading id={titleId} className="project-card__title">
            {title}
          </Heading>
        </Link>

        {subtitle && <p className="project-card__subtitle">{subtitle}</p>}

        <p className="project-card__desc">{description}</p>

        {highlight && (
          <p className="project-card__highlight">
            <span aria-hidden="true">↗</span>
            {highlight}
          </p>
        )}

        <div className="project-card__links">
          <Link
            to={`/projects/${slug}`}
            className="project-card__link project-card__link--primary"
            aria-label={`Voir les détails du projet ${title}`}
          >
            Étude de cas <span aria-hidden="true">→</span>
          </Link>

          <div className="project-card__external-links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label={`Voir le dépôt GitHub du projet ${title}`}
              >
                GitHub ↗
              </a>
            )}

            {npm && (
              <a
                href={npm}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label={`Voir le package npm du projet ${title}`}
              >
                npm ↗
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label={`Voir la démonstration en ligne du projet ${title}`}
              >
                Démo ↗
              </a>
            )}
          </div>
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
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    github: PropTypes.string,
    live: PropTypes.string,
    npm: PropTypes.string,
    color: PropTypes.string,
    year: PropTypes.number,
    type: PropTypes.string,
    highlight: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
  featured: PropTypes.bool,
  headingLevel: PropTypes.oneOf(["h2", "h3", "h4"]),
};
