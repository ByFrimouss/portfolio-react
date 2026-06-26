// ============================================================
// Contact.jsx — Page de contact avec formulaire
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Contact.scss";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const FIELDS = [
  { id: "name", label: "Nom", type: "text", placeholder: "Jean Dupont" },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "jean@exemple.com",
  },
  {
    id: "subject",
    label: "Sujet",
    type: "text",
    placeholder: "Projet web, collaboration, recrutement...",
  },
];

const REQUEST_TYPES = [
  "Création de site WordPress",
  "Développement React",
  "Refonte de site",
  "Recrutement / Opportunité",
  "Collaboration",
  "Autre",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    subject: "",
    message: "",
    consent: false,
    _gotcha: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xredjgrr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Formspree error");

      setStatus("success");
      setForm({
        name: "",
        email: "",
        type: "",
        subject: "",
        message: "",
        consent: false,
        _gotcha: "",
      });
    } catch {
      setStatus("error");
    }
  };

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
          <div className="contact-wrapper">
            <span className="section-label">// Contact</span>
            <h1 className="section-title">Parlons de votre projet</h1>
            <p className="contact-intro">
              Disponible pour des missions freelance et opportunités CDI/CDD.
              Réponse sous 24h.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Champs dynamiques */}
                {FIELDS.map((field) => (
                  <div key={field.id} className="form-group">
                    <label htmlFor={field.id} className="form-label">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      value={form[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="form-input"
                      disabled={status === "sending"}
                    />
                  </div>
                ))}

                {/* Type de demande */}
                <div className="form-group">
                  <label htmlFor="type" className="form-label">
                    Type de demande
                  </label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="form-input form-select"
                    disabled={status === "sending"}
                  >
                    <option value="">Sélectionnez une option...</option>
                    {REQUEST_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins, ou votre opportunité..."
                    required
                    rows={6}
                    className="form-input form-textarea"
                    disabled={status === "sending"}
                  />
                </div>

                {/* RGPD */}
                <p className="form-rgpd">
                  Les informations recueillies via ce formulaire sont utilisées
                  uniquement pour répondre à votre demande de contact.
                </p>

                {/* Consentement */}
                <div className="form-group form-consent">
                  <label className="form-consent-label">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                      disabled={status === "sending"}
                    />
                    <span>
                      J'accepte que mes données soient utilisées conformément à
                      la politique de confidentialité.
                    </span>
                  </label>
                </div>

                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  id="_gotcha"
                  value={form._gotcha}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  className={`btn btn--primary contact-submit ${status === "sending" ? "is-loading" : ""}`}
                  disabled={status === "sending" || !form.consent}
                  aria-disabled={status === "sending"}
                  whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                  whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                >
                  {status === "sending" ? (
                    <>
                      <span className="contact-submit__spinner" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message →"
                  )}
                </motion.button>

                {/* Feedback */}
                {status === "success" && (
                  <motion.p
                    className="contact-feedback contact-feedback--success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                  >
                    ✓ Message envoyé avec succès ! Je vous réponds sous 24h.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    className="contact-feedback contact-feedback--error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                  >
                    ✗ Erreur lors de l'envoi. Réessaie ou contacte-moi
                    directement.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
