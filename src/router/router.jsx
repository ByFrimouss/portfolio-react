// ============================================================
// router.jsx
// Configuration des routes avec React Router v7.
//
// <Routes> : conteneur de toutes les routes
// <Route>  : association path ↔ composant
// AnimatePresence : permet les transitions entre pages (Framer Motion)
// useLocation     : nécessaire pour détecter le changement de route
// ============================================================

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import MentionsLegales from "../pages/MentionsLegales";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function Router() {
  // useLocation() retourne l'objet location actuel.
  // On l'utilise comme `key` pour AnimatePresence afin de
  // déclencher l'animation de sortie/entrée à chaque changement de route.
  const location = useLocation();

  return (
    // AnimatePresence mode="wait" : attend que la page sortante
    // ait terminé son animation avant d'afficher la suivante.
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Route principale */}
        <Route path="/" element={<Home />} />

        {/* Pages secondaires */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

        {/* Liens légaux */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* 404 — redirige vers Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}
