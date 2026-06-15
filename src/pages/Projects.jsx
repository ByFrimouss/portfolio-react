// ============================================================
// Projects.jsx — Page liste de tous les projets
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

// Tous les tags uniques extraits des projets
const ALL_TAGS = ["Tous", ...new Set(projects.flatMap((p) => p.tags))];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function Projects() {
  // Filtre actif (tag sélectionné)
  const [activeTag, setActiveTag] = useState("Tous");

  // Projets filtrés selon le tag sélectionné
  const filtered =
    activeTag === "Tous"
      ? [...projects].sort((a, b) => b.year - a.year)
      : projects
          .filter((p) => p.tags.includes(activeTag))
          .sort((a, b) => b.year - a.year);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: "relative" }}
    >
      <section
        className="section"
        style={{ paddingTop: "calc(var(--navbar-height) + 4rem)" }}
      >
        <div className="container">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">// Portfolio</span>
            <h1 className="section-title">Tous mes projets</h1>
          </motion.div>

          {/* Filtres par tag */}
          <motion.div
            className="projects-filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                className={`projects-filter-btn ${activeTag === tag ? "active" : ""}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Grille */}
          <motion.div
            className="projects-grid"
            layout // Framer Motion anime le repositionnement lors du filtre
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Styles inline pour cette page */}
      <style>{`
        .projects-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
        }
        .projects-filter-btn {
          font-family: var(--font-mono, monospace);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.07);
          background: transparent;
          color: #6b6b82;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .projects-filter-btn:hover,
        .projects-filter-btn.active {
          background: rgba(124,107,255,0.15);
          border-color: #4d82ff;
          color: #4d82ff;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
      `}</style>
    </motion.div>
  );
}
