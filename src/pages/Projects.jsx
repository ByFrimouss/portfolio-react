// ============================================================
// Projects.jsx — Page liste de tous les projets
// ============================================================

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

import "./Projects.scss";

const FILTERS = [
  { id: "all", label: "Tous", match: () => true },
  {
    id: "react",
    label: "React",
    match: (project) =>
      project.tags.some((tag) =>
        [
          "React",
          "React Router",
          "Redux",
          "Redux Toolkit",
          "Framer Motion",
          "Recharts",
          "SwiperJS",
        ].includes(tag),
      ),
  },
  {
    id: "wordpress",
    label: "WordPress",
    match: (project) =>
      project.tags.some((tag) =>
        [
          "WordPress",
          "PHP",
          "Elementor",
          "ACF",
          "SCF",
          "CPT",
          "SEOPress",
          "PHPMyAdmin",
        ].includes(tag),
      ),
  },
  {
    id: "javascript",
    label: "JavaScript",
    match: (project) =>
      project.tags.some((tag) =>
        [
          "JavaScript",
          "jQuery",
          "Ajax",
          "Jest",
          "API REST",
          "Axios",
          "Node.js",
          "JWT",
          "Tests unitaires",
          "Tests E2E",
        ].includes(tag),
      ),
  },
  {
    id: "design",
    label: "UX / Design",
    match: (project) =>
      project.tags.some((tag) =>
        [
          "Figma",
          "UX Design",
          "User Stories",
          "Kanban",
          "Agile",
          "Graphisme",
          "Design",
        ].includes(tag),
      ),
  },
];

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// ============================================================
// Hook permettant de détecter la largeur de l’écran
// ============================================================

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 680px)");

  const sortedProjects = useMemo(
    () =>
      [...projects].sort(
        (firstProject, secondProject) =>
          secondProject.year - firstProject.year ||
          secondProject.id - firstProject.id,
      ),
    [],
  );

  const filterCounts = useMemo(
    () =>
      Object.fromEntries(
        FILTERS.map((filter) => [
          filter.id,
          sortedProjects.filter(filter.match).length,
        ]),
      ),
    [sortedProjects],
  );

  const visibleProjects = useMemo(() => {
    const selectedFilter =
      FILTERS.find((filter) => filter.id === activeFilter) ?? FILTERS[0];

    return sortedProjects.filter(selectedFilter.match);
  }, [activeFilter, sortedProjects]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  const years = sortedProjects.map((project) => project.year);
  const firstYear = Math.min(...years);
  const lastYear = Math.max(...years);

  const displayedProjects = isMobile
    ? visibleProjects.slice(0, visibleCount)
    : visibleProjects;

  const hasMoreProjects =
    isMobile && displayedProjects.length < visibleProjects.length;

  const remainingProjects = visibleProjects.length - displayedProjects.length;

  const nextBatchSize = Math.min(6, remainingProjects);

  return (
    <motion.main
      className="projects-page"
      variants={pageVariants}
      initial={reduceMotion ? false : "initial"}
      animate="animate"
      exit="exit"
    >
      <section
        className="projects-page__section"
        aria-labelledby="projects-title"
      >
        <div className="container">
          <header className="projects-header">
            <motion.div
              className="projects-header__content"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">// Portfolio</span>

              <h1 id="projects-title" className="projects-header__title">
                Des projets conçus pour
                <span> résoudre de vrais problèmes.</span>
              </h1>

              <p className="projects-header__intro">
                React, WordPress, JavaScript et UX&nbsp;: une sélection de
                réalisations qui présente ma méthode, mes choix techniques et
                les résultats obtenus.
              </p>
            </motion.div>

            <motion.dl
              className="projects-header__stats"
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <div>
                <dt>Projets</dt>
                <dd>{sortedProjects.length}</dd>
              </div>
              <div>
                <dt>Période</dt>
                <dd>
                  {firstYear}—{lastYear}
                </dd>
              </div>
              <div>
                <dt>Expertises</dt>
                <dd>{FILTERS.length - 1}</dd>
              </div>
            </motion.dl>
          </header>

          <div className="projects-toolbar">
            <div
              className="projects-filters"
              role="group"
              aria-label="Filtrer les projets par expertise"
            >
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    className={`projects-filter-btn ${
                      isActive ? "is-active" : ""
                    }`}
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    <span>{filter.label}</span>
                    <span
                      className="projects-filter-btn__count"
                      aria-hidden="true"
                    >
                      {filterCounts[filter.id]}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="projects-toolbar__status" aria-live="polite">
              {visibleProjects.length}{" "}
              {visibleProjects.length > 1
                ? "projets affichés"
                : "projet affiché"}
            </p>
          </div>

          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  featured={activeFilter === "all" && index === 0}
                  headingLevel="h2"
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {hasMoreProjects && (
            <button
              type="button"
              className="projects-load-more"
              onClick={() =>
                setVisibleCount((currentCount) => currentCount + 6)
              }
            >
              <span className="projects-load-more__content">
                <span className="projects-load-more__eyebrow">
                  Continuer l’exploration
                </span>

                <span className="projects-load-more__label">
                  Afficher {nextBatchSize}{" "}
                  {nextBatchSize > 1
                    ? "projets supplémentaires"
                    : "projet supplémentaire"}
                </span>
              </span>

              <span className="projects-load-more__icon" aria-hidden="true">
                ↓
              </span>
            </button>
          )}
        </div>
      </section>
    </motion.main>
  );
}
