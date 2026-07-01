// ============================================================
// Navbar.jsx
// Barre de navigation fixe en haut.
//
// Fonctionnalités :
//   - Scroll detection → ajoute classe .scrolled (fond opaque)
//   - Menu burger mobile
//   - Toggle thème dark/light (Redux)
//   - Lien actif surligné avec NavLink
// ============================================================

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectTheme } from "../store/themeSlice";
import "./Navbar.scss";

// Définition des liens de navigation
const NAV_LINKS = [
  { label: "Accueil", path: "/" },
  { label: "Projets", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "À propos", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  // État du menu mobile (ouvert/fermé)
  const [menuOpen, setMenuOpen] = useState(false);

  // État du scroll (pour changer l'apparence de la navbar)
  const [scrolled, setScrolled] = useState(false);

  // Effect : écoute le scroll de la fenêtre
  useEffect(() => {
    const handleScroll = () => {
      // Ajoute .scrolled si on a scrollé plus de 20px
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup : retire l'écouteur quand le composant est démonté
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu mobile à chaque clic sur un lien
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* Logo / Nom */}
        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          <img
            src="/images/graphweb_rose-transparent.webp"
            alt="Gr@ph'Web"
            className="navbar__logo-img"
          />
          <span className="navbar__logo-text">Gr@ph'Web</span>
          <span className="navbar__logo-dot" />
        </NavLink>
        {/* Navigation desktop */}
        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          <ul className="navbar__list">
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="navbar__item">
                {/*
                  NavLink ajoute automatiquement la classe "active"
                  sur le lien correspondant à l'URL actuelle.
                  end sur "/" évite qu'il soit actif sur toutes les routes.
                */}
                <NavLink
                  to={link.path}
                  className="navbar__link"
                  end={link.path === "/"}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {menuOpen && (
            <button
              className="navbar__theme-btn"
              onClick={() => dispatch(toggleTheme())}
              aria-label="Changer le thème"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
        </nav>

        {/* Bouton thème desktop (hors menu) */}
        <button
          className="navbar__theme-btn navbar__theme-btn--desktop"
          onClick={() => dispatch(toggleTheme())}
          aria-label="Changer le thème"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Bouton burger (mobile uniquement) */}
        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
