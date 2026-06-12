// ============================================================
// Contact.jsx — Page de contact avec formulaire
//
//   1. style={{ position: 'relative' }} sur le motion.div wrapper
//      → fix du warning Framer Motion useScroll/whileInView
//   2. motion.form remplacé par un form natif + motion.div wrapper
//      → motion.form peut causer des conflits avec onSubmit en React 19
//   3. Le bouton disabled utilise aria-disabled pour l'accessibilité
//   4. Cleanup : styles déplacés dans un bloc <style> organisé
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

// Champs générés dynamiquement pour éviter la répétition
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
    placeholder: "Projet web, collab...",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
      setForm({ name: "", email: "", subject: "", message: "" });
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
              Disponible pour des missions freelance et collaborations. Réponse
              sous 24h.
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

                {/* Textarea */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins..."
                    required
                    rows={6}
                    className="form-input form-textarea"
                    disabled={status === "sending"}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className={`btn btn--primary contact-submit ${status === "sending" ? "is-loading" : ""}`}
                  disabled={status === "sending"}
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
                    ✓ Message envoyé avec succès !
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

      <style>{`
        /* --- Wrapper --- */
        .contact-wrapper {
          max-width: 640px;
          margin: 0 auto;
        }
        .contact-intro {
          color: #6b6b82;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        /* --- Formulaire --- */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-label {
          font-family: monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6b6b82;
        }
        .form-input {
          background: #16161f;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: #e8e8f0;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s, opacity 0.2s;
          outline: none;
          width: 100%;
        }
        .form-input:focus {
          border-color: #7c6bff;
          box-shadow: 0 0 0 3px rgba(124,107,255,0.1);
        }
        .form-input::placeholder { color: #3a3a50; }
        /* ✅ FIX : style visuel quand les champs sont désactivés */
        .form-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .form-textarea {
          resize: vertical;
          min-height: 140px;
        }

        /* --- Bouton submit --- */
        .contact-submit {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .contact-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Spinner CSS (pas de lib externe) */
        .contact-submit__spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* --- Feedback messages --- */
        .contact-feedback {
          font-family: monospace;
          font-size: 0.875rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-top: 0.25rem;
        }
        .contact-feedback--success {
          color: #00f5d4;
          background: rgba(0,245,212,0.08);
          border: 1px solid rgba(0,245,212,0.2);
        }
        .contact-feedback--error {
          color: #ff6b6b;
          background: rgba(255,107,107,0.08);
          border: 1px solid rgba(255,107,107,0.2);
        }
      `}</style>
    </motion.div>
  );
}
