// ============================================================
// MentionsLegales.jsx
// ============================================================

import { motion } from "framer-motion";
import "../pages/MentionsLegales.scss";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function MentionsLegales() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="mentions">
        <div className="container mentions__content">
          <h1 className="mentions__title">Mentions légales</h1>

          {/* ÉDITEUR */}
          <div className="mentions__block">
            <h2>Éditeur du site</h2>
            <p>Le présent site est édité par :</p>
            <ul>
              <li>
                <strong>Nom :</strong> COUPAMA Stéphanie
              </li>
              <li>
                <strong>Adresse :</strong> 17, rue Calteau — 97427 Étang-Salé
              </li>
              <li>
                <strong>Email :</strong>{" "}
                <a href="mailto:frimouss.graphweb@gmail.com">
                  frimouss.graphweb@gmail.com
                </a>
              </li>
              <li>
                <strong>Statut :</strong> Particulier — activité en cours de
                création
              </li>
            </ul>
          </div>

          {/* HÉBERGEUR */}
          <div className="mentions__block">
            <h2>Hébergeur</h2>
            <ul>
              <li>
                <strong>Société :</strong> Vercel Inc.
              </li>
              <li>
                <strong>Adresse :</strong> 340 Pine Street, Suite 701 — San
                Francisco, CA 94104, États-Unis
              </li>
              <li>
                <strong>Site web :</strong>{" "}
                <a href="https://vercel.com" target="_blank" rel="noreferrer">
                  vercel.com
                </a>
              </li>
            </ul>
          </div>

          {/* PROPRIÉTÉ INTELLECTUELLE */}
          <div className="mentions__block">
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, animations, code
              source) est la propriété exclusive de Stéphanie COUPAMA, sauf
              mention contraire. Toute reproduction, distribution ou utilisation
              sans autorisation préalable est strictement interdite.
            </p>
          </div>

          {/* DONNÉES PERSONNELLES */}
          <div className="mentions__block">
            <h2>Données personnelles & RGPD</h2>
            <p>
              Ce site ne collecte aucune donnée personnelle à des fins
              commerciales. Le formulaire de contact permet uniquement de me
              contacter directement. Les informations transmises (nom, email,
              message) sont utilisées exclusivement pour répondre à votre
              demande et ne sont pas conservées ni transmises à des tiers.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d'un droit d'accès, de rectification et de
              suppression de vos données. Pour exercer ces droits, contactez-moi
              à{" "}
              <a href="mailto:frimouss.graphweb@gmail.com">
                frimouss.graphweb@gmail.com
              </a>
              .
            </p>
          </div>

          {/* COOKIES */}
          <div className="mentions__block">
            <h2>Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies à des fins publicitaires ou de
              tracking. Un cookie technique peut être utilisé pour mémoriser
              votre préférence de thème (mode clair/sombre). Ce cookie ne
              contient aucune donnée personnelle.
            </p>
          </div>

          {/* RESPONSABILITÉ */}
          <div className="mentions__block">
            <h2>Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont fournies à titre
              indicatif. Stéphanie COUPAMA ne saurait être tenue responsable des
              erreurs ou omissions, ni des dommages directs ou indirects
              résultant de l'utilisation de ce site.
            </p>
          </div>

          {/* DATE */}
          <p className="mentions__date">Dernière mise à jour : juin 2026</p>
        </div>
      </section>
    </motion.div>
  );
}
