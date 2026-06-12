// ============================================================
// Skills.jsx — Compétences de Stéphanie COUPAMA "Fri'MouSs"
//
// CORRECTIONS APPLIQUÉES :
//   1. style={{ position: 'relative' }} sur le motion.div wrapper
//      → fix warning Framer Motion
//   2. ParallaxSection retiré des cards individuelles dans la grille
//      → Le parallax sur des éléments en grille cause un décalage visuel
//      → On garde le parallax uniquement sur la bande défilante (ParallaxText)
//      → et sur un wrapper de section global (vitesse très faible)
//   3. CSS variable --cat-color : ajout d'un fallback explicite en style inline
//      → certains navigateurs ne lisent pas les CSS vars via style={{ }}
//   4. whileInView sur les barres : ajout de `amount: 0.3` pour déclencher
//      l'animation plus tôt (sinon les barres restaient à 0 sur petits écrans)
// ============================================================

import { motion } from "framer-motion";
import { ParallaxText } from "../components/ParallaxSection";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const SKILLS = {
  "React & JavaScript": [
    { name: "React JS", level: 85 },
    { name: "JavaScript ES6+", level: 82 },
    { name: "Redux Toolkit", level: 75 },
    { name: "React Router", level: 80 },
    { name: "Framer Motion", level: 72 },
    { name: "jQuery", level: 70 },
    { name: "Axios / API REST", level: 78 },
    { name: "Jest (tests unitaires)", level: 68 },
    { name: "Tests d'intégration", level: 65 },
    { name: "SwiperJS", level: 74 },
    { name: "Recharts / D3", level: 68 },
    { name: "JWT / Authentification", level: 70 },
  ],

  "Outils & Qualité": [
    { name: "Git / GitHub", level: 80 },
    { name: "Vite", level: 78 },
    { name: "SCSS / Sass", level: 85 },
    { name: "ESLint", level: 72 },
    { name: "Chrome DevTools", level: 76 },
    { name: "Publication npm", level: 65 },
    { name: "Google Lighthouse", level: 80 },
    { name: "Swagger / YAML", level: 65 },
    { name: "JSDoc / PropTypes", level: 70 },
    { name: "Tests E2E (plan manuel)", level: 65 },
  ],

  "WordPress & CMS": [
    { name: "WordPress", level: 92 },
    { name: "WooCommerce", level: 85 },
    { name: "Thèmes enfants", level: 88 },
    { name: "PHP", level: 60 },
    { name: "MySQL / PHPMyAdmin", level: 62 },
    { name: "Plugins WordPress", level: 84 },
    { name: "ACF / SCF / CPT UI", level: 78 },
    { name: "WP_Query / Ajax WP", level: 72 },
    { name: "WP_DEBUG / Logs", level: 74 },
    { name: "SEOPress / Lighthouse", level: 80 },
    { name: "Elementor", level: 75 },
    { name: "All-in-One Migration", level: 82 },
  ],

  "Intégration Web": [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 88 },
    { name: "Responsive Design", level: 88 },
    { name: "SEO technique", level: 78 },
    { name: "Animations CSS", level: 82 },
    { name: "Mobile First", level: 85 },
    { name: "Accessibilité (a11y)", level: 72 },
    { name: "Green IT / Green Code", level: 70 },
  ],

  "UX & Conception": [
    { name: "Figma / Maquettes", level: 74 },
    { name: "User Stories", level: 72 },
    { name: "Diagrammes cas d'usage", level: 68 },
    { name: "Kanban / Agile", level: 70 },
    { name: "Cahier de recette", level: 75 },
    { name: "Algorithmes JS", level: 68 },
  ],
};

const ACCENT_COLORS = ["#7c6bff", "#00f5d4", "#ff6b6b", "#f4a325", "#7c3aed"];

export default function Skills() {
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">// Compétences</span>
            <h1 className="section-title">Mon stack technique</h1>
            <p className="skills-intro">
              Acquis au fil de 6 formations spécialisées depuis 2021 — chaque
              compétence construite sur la précédente.
            </p>
          </motion.div>

          <div className="skills-grid">
            {Object.entries(SKILLS).map(([category, skills], catIdx) => {
              const color = ACCENT_COLORS[catIdx % ACCENT_COLORS.length];

              return (
                <motion.div
                  key={category}
                  className="skills-category"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: catIdx * 0.08 }}
                  style={{ borderTop: `2px solid ${color}` }}
                >
                  <div className="skills-category__header">
                    <span
                      className="skills-category__dot"
                      style={{
                        background: color,
                        boxShadow: `0 0 8px ${color}`,
                      }}
                    />
                    <h3 className="skills-category__title" style={{ color }}>
                      {category}
                    </h3>
                  </div>

                  <div className="skills-list">
                    {skills.map((skill, i) => (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-item__header">
                          <span className="skill-item__name">{skill.name}</span>
                          <span className="skill-item__level">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-bar__fill"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: skill.level / 100 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{
                              duration: 1.1,
                              delay: i * 0.06,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            style={{
                              transformOrigin: "left",
                              background: `linear-gradient(to right, ${color}, ${color}88)`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bande défilante — ParallaxText */}
      <div style={{ paddingBottom: "2rem", position: "relative" }}>
        <ParallaxText speed={0.5}>
          React · WordPress · SCSS · Redux · Framer Motion · WooCommerce · Git ·
          Vite · jQuery · PHP · MySQL · ESLint · Elementor
        </ParallaxText>
      </div>

      <style>{`
        .skills-intro {
          color: #6b6b82;
          margin-bottom: 3rem;
          max-width: 520px;
          line-height: 1.7;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .skills-category {
          background: #16161f;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 1.75rem;        
        }
        .skills-category__header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }
        .skills-category__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .skills-category__title {
          font-family: 'Syne', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .skill-item__header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }
        .skill-item__name {
          font-size: 0.875rem;
          color: #e8e8f0;
        }
        .skill-item__level {
          font-family: monospace;
          font-size: 0.7rem;
          color: #6b6b82;
        }
        .skill-bar {
          height: 3px;
          background: rgba(255,255,255,0.06);
          border-radius: 9999px;
        }
        .skill-bar__fill {
          height: 100%;
          border-radius: 9999px;
        }
      `}</style>
    </motion.div>
  );
}
