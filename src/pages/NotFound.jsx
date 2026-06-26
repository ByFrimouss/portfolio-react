// ============================================================
// NotFound.jsx — Page 404 personnalisée
// ============================================================

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function NotFound() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: "relative" }}
    >
      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "var(--navbar-height)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/images/graphweb_rose-transparent.png"
              alt="Gr@ph'Web"
              style={{ width: "120px", opacity: 0.6 }}
            />
          </motion.div>

          <motion.p
            style={{
              fontFamily: "monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              color: "var(--color-primary)",
              textTransform: "uppercase",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Erreur 404
          </motion.p>

          <motion.h1
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "var(--color-text)",
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Page introuvable
          </motion.h1>

          <motion.p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "400px",
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Cette page n'existe pas ou a été déplacée. Retournez à l'accueil
            pour continuer votre navigation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link to="/" className="btn btn--primary">
              ← Retour à l'accueil
            </Link>
            <Link to="/projects" className="btn btn--ghost">
              Voir mes projets
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
