import { motion } from "framer-motion";
import "../pages/PrivacyPolicy.scss";

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

export default function PrivacyPolicy() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: "relative" }}
    >
      <section
        className="section privacy"
        style={{
          paddingTop: "calc(var(--navbar-height) + 4rem)",
        }}
      >
        <div className="container">
          <div className="privacy__wrapper">
            <div className="privacy__wrapper">
              <span className="section-label">// Légal</span>
              <h1 className="section-title">Politique de confidentialité</h1>
              <p className="privacy__date">Dernière mise à jour : juin 2026</p>

              <div className="privacy__block">
                <h2>1. Responsable du traitement</h2>
                <p>
                  Stéphanie COUPAMA — By Fri'MouSs
                  <br />
                  La Réunion, France
                  <br />
                  Contact : via le formulaire de contact du site
                </p>
              </div>

              <div className="privacy__block">
                <h2>2. Données collectées</h2>
                <p>
                  Via le formulaire de contact, les données suivantes sont
                  collectées :
                </p>
                <ul>
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Sujet du message</li>
                  <li>Contenu du message</li>
                </ul>
                <p>
                  Aucune autre donnée n'est collectée. Le site n'utilise pas de
                  cookies de tracking ni d'outils d'analyse comportementale.
                </p>
              </div>

              <div className="privacy__block">
                <h2>3. Finalité du traitement</h2>
                <p>
                  Les données collectées sont utilisées uniquement pour répondre
                  à votre demande de contact. Elles ne sont ni vendues, ni
                  cédées à des tiers.
                </p>
              </div>

              <div className="privacy__block">
                <h2>4. Sous-traitant — Formspree</h2>
                <p>
                  Le formulaire de contact utilise le service{" "}
                  <strong>Formspree</strong> (formspree.io) pour l'acheminement
                  des messages. Formspree est soumis à sa propre politique de
                  confidentialité disponible sur{" "}
                  <a
                    href="https://formspree.io/legal/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    formspree.io
                  </a>
                  .
                </p>
              </div>

              <div className="privacy__block">
                <h2>5. Durée de conservation</h2>
                <p>
                  Les données sont conservées le temps nécessaire pour traiter
                  votre demande, et supprimées dans un délai maximum de 12 mois.
                </p>
              </div>

              <div className="privacy__block">
                <h2>6. Vos droits</h2>
                <p>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul>
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement (droit à l'oubli)</li>
                  <li>Droit d'opposition au traitement</li>
                  <li>Droit à la portabilité des données</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-moi via le formulaire de
                  contact du site.
                </p>
              </div>

              <div className="privacy__block">
                <h2>7. Réclamation</h2>
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous
                  pouvez introduire une réclamation auprès de la{" "}
                  <strong>CNIL</strong> :{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
