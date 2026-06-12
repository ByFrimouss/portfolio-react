// ============================================================
// About.jsx — Parcours de Stéphanie COUPAMA "Fri'MouSs"
//
// Timeline complète de reconversion :
//   2014-2016 → Cuisine (diplômée)
//   2018      → CTRIV (transport de voyageurs)
//   2021-2026 → Formations digitales & développement web
// ============================================================

import { motion } from "framer-motion";
import ParallaxSection, { ParallaxImage } from "../components/ParallaxSection";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

// Timeline complète — du plus récent au plus ancien
const TIMELINE = [
  {
    period: "Mars 2025 – Mars 2026",
    title: "Développeuse d'Applications Logiciel — React JavaScript",
    org: "Formation 12 mois — Diplôme obtenu niveau 6 ✓",
    desc: "14 projets validés. Stack complet : React, Redux Toolkit, React Router, Framer Motion, SCSS, Vite, Axios.",
    color: "#7c6bff",
    badge: "✓ Diplômée",
  },
  {
    period: "Septembre 2024",
    title: "Acaced chien & chat",
    org: "Formation sur 3 jours — Diplôme obtenu ✓",
    desc: "8 modules pour les catégories de chien et chat finalisés par un quizz décisif.",
    color: "#ff6b6b",
    badge: "✓ Diplômée",
  },
  {
    period: "2024 – 2025",
    title: "Développeuse Logiciel — WordPress",
    org: "Formation 9 mois 100% en ligne — Diplôme obtenu ✓",
    desc: "13 projets validés. WordPress, WooCommerce, PHP, Elementor, SEO, optimisation des performances.",
    color: "#00f5d4",
    badge: "✓ Diplômée",
  },
  {
    period: "2023 – 2024",
    title: "Développeuse Web & Applications Mobiles",
    org: "Formation 9 mois",
    desc: "Formation technique intensive. Malgré les difficultés rencontrées, cette étape a posé les bases de ma compréhension du code.",
    color: "#ff6b6b",
    badge: null,
  },
  {
    period: "2023",
    title: "E-Commerce",
    org: "Formation 2 mois ½, formation d'adaptation",
    desc: "Création et gestion de boutiques en ligne, stratégie de vente digitale, logistique e-commerce.",
    color: "#7c6bff",
    badge: null,
  },
  {
    period: "2022 – 2023",
    title: "Graphiste Internet",
    org: "Formation 3 mois ½, formation d'adaptation",
    desc: "Design graphique web, identité visuelle, maîtrise des outils créatifs, charte graphique, maquettage.",
    color: "#00f5d4",
    badge: null,
  },
  {
    period: "2022",
    title: "Community Manager",
    org: "Formation 3 mois ½, formation d'adaptation",
    desc: "Gestion des réseaux sociaux, stratégie de contenu, création de publications, analyse d'audience.",
    color: "#ff6b6b",
    badge: null,
  },
  {
    period: "2021",
    title: "Création d'Entreprise",
    org: "Formation 4 mois",
    desc: "Business plan, statuts juridiques, comptabilité de base, stratégie commerciale et marketing.",
    color: "#7c6bff",
    badge: "🚀 Démarrage du virage digital",
  },
  {
    period: "2016 – 2018",
    title: "CTRIV — Conductrice Transport Routier Interurbain de Voyageurs",
    org: "Diplôme obtenu en 2018 ✓",
    desc: "Préparé avec l'accompagnement d'un psychologue du travail après un bilan de compétences. Suite à une inaptitude professionnelle dans la restauration, cette reconversion a été le tournant de ma vie.",
    color: "#00f5d4",
    badge: "✓ Diplômée",
  },
  {
    period: "Juil. 2014 – Jan. 2016",
    title: "Cuisinière",
    org: "diplôme obtenu ✓",
    desc: "Diplômée en cuisine. Déclarée inapte professionnellement en janvier 2016 — début d'un long chemin de reconversion porté par la volonté et le soutien d'un psychologue du travail.",
    color: "#ff6b6b",
    badge: "✓ Diplômée",
  },
];

// Formations courtes résumées
const SKILLS_OVERVIEW = [
  { label: "React JS", level: 85, color: "#7c6bff" },
  { label: "WordPress", level: 90, color: "#00f5d4" },
  { label: "SCSS / CSS", level: 82, color: "#7c6bff" },
  { label: "Redux", level: 75, color: "#00f5d4" },
  { label: "Graphisme Web", level: 78, color: "#ff6b6b" },
  { label: "Community Mgmt", level: 72, color: "#ff6b6b" },
];

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* === SECTION INTRO === */}
      <section
        className="section"
        style={{ paddingTop: "calc(var(--navbar-height) + 4rem)" }}
      >
        <div className="container">
          <div className="about-intro">
            {/* Texte */}
            <motion.div
              className="about-intro__text"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">// À propos</span>
              <h1 className="section-title">
                Stéphanie COUPAMA
                <br />
                <span
                  style={{
                    color: "#7c6bff",
                    fontSize: "0.6em",
                    fontWeight: 400,
                  }}
                >
                  By Fri'MouSs
                </span>
              </h1>

              <p className="about-intro__lead">
                De la cuisine au code, en passant par le volant d'un car de
                voyageurs — mon parcours n'est pas linéaire, il est{" "}
                <em>humain</em>.
              </p>

              <p className="about-intro__body">
                Depuis 2021, j'ai enchaîné 6 formations dans le digital avec une
                détermination sans faille : création d'entreprise, community
                management, graphisme, e-commerce, développement WordPress et
                enfin React JavaScript. Chaque étape posée, brique après brique.
              </p>

              <p className="about-intro__body">
                Basée à La Réunion 🌴, je suis disponible pour des missions
                freelance, du remote ou des opportunités locales. Je crée des
                interfaces web modernes, accessibles et soignées.
              </p>

              {/* Stats */}
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat__number">27</span>
                  <span className="about-stat__label">Projets validés</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat__number">6</span>
                  <span className="about-stat__label">
                    Formations digitales
                  </span>
                </div>
                <div className="about-stat">
                  <span className="about-stat__number">5</span>
                  <span className="about-stat__label">
                    Années de reconversion
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              className="about-intro__image"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <ParallaxImage
                src="/images/profil.jpg"
                alt="Stéphanie COUPAMA — Fri'MouSs"
                speed={0.25}
              />
              {/* Badge flottant */}
              <motion.div
                className="about-intro__image-badge"
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span>🌴 La Réunion</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === TIMELINE PARCOURS === */}
      <ParallaxSection
        speed={0.08}
        as="section"
        className="section about-timeline-section"
      >
        <div className="container">
          <span className="section-label">// Parcours</span>
          <h2 className="section-title">Une reconversion, une histoire</h2>

          <div className="about-timeline">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
              >
                {/* Ligne + point */}
                <div className="timeline-item__marker">
                  <div
                    className="timeline-item__dot"
                    style={{
                      background: item.color,
                      boxShadow: `0 0 12px ${item.color}60`,
                    }}
                  />
                  {i < TIMELINE.length - 1 && (
                    <div className="timeline-item__line" />
                  )}
                </div>

                {/* Contenu */}
                <div className="timeline-item__content">
                  <div className="timeline-item__header">
                    <span
                      className="timeline-item__period"
                      style={{ color: item.color }}
                    >
                      {item.period}
                    </span>
                    {item.badge && (
                      <span
                        className="timeline-item__badge"
                        style={{ borderColor: item.color, color: item.color }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="timeline-item__title">{item.title}</h3>
                  <p className="timeline-item__org">{item.org}</p>
                  <p className="timeline-item__desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Styles de la page */}
      <style>{`
        /* --- Intro --- */
        .about-intro {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-intro { grid-template-columns: 1fr; }
        }
        .about-intro__text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .about-intro__lead {
          font-size: 1.2rem;
          color: #e8e8f0;
          line-height: 1.7;
          font-style: italic;
        }
        .about-intro__body {
          color: #a0a0b8;
          line-height: 1.8;
        }
        .about-intro__image {
          border-radius: 16px;
          overflow: visible;
          aspect-ratio: 4/5;
          background: #16161f;
          position: relative;
        }
        .about-intro__image > div:first-child {
          border-radius: 16px;
          overflow: hidden;
          height: 100%;
        }
        .about-intro__image-badge {
          position: absolute;
          bottom: -16px;
          right: -16px;
          background: #16161f;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 0.6rem 1rem;
          font-family: monospace;
          font-size: 0.85rem;
          color: #e8e8f0;
          white-space: nowrap;
          z-index: 2;
        }

        /* --- Stats --- */
        .about-stats {
          display: flex;
          gap: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }
        .about-stat__number {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 900;
          color: #7c6bff;
          line-height: 1;
        }
        .about-stat__label {
          display: block;
          font-family: monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6b6b82;
          margin-top: 0.25rem;
        }

        /* --- Timeline section --- */
        .about-timeline-section {
          background: #111118;
        }
        .about-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-top: 3rem;
          padding-left: 1rem;
        }

        /* --- Timeline item --- */
        .timeline-item {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 1.5rem;
          position: relative;
        }
        .timeline-item__marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .timeline-item__dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
          transition: transform 0.3s;
        }
        .timeline-item:hover .timeline-item__dot {
          transform: scale(1.4);
        }
        .timeline-item__line {
          width: 1px;
          flex: 1;
          background: rgba(255,255,255,0.06);
          margin-top: 8px;
        }
        .timeline-item__content {
          padding-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .timeline-item__header {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .timeline-item__period {
          font-family: monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .timeline-item__badge {
          font-family: monospace;
          font-size: 0.65rem;
          padding: 2px 8px;
          border: 1px solid;
          border-radius: 9999px;
          opacity: 0.9;
        }
        .timeline-item__title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #e8e8f0;
          line-height: 1.3;
        }
        .timeline-item__org {
          font-family: monospace;
          font-size: 0.8rem;
          color: #6b6b82;
        }
        .timeline-item__desc {
          color: #a0a0b8;
          font-size: 0.9rem;
          line-height: 1.7;
          max-width: 640px;
        }
      `}</style>
    </motion.div>
  );
}
