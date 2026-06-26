// ============================================================
// Footer.jsx — Stéphanie COUPAMA "By Fri'MouSs"
// ============================================================

import { Link } from "react-router-dom";
import "./Footer.scss";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/ByFrimouss" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/st%C3%A9phanie-coupama/",
  },
];

const NAV_LINKS = [
  { label: "Projets", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Parcours", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <span className="footer__logo">Gr@ph'Web</span>
            <span className="footer__pseudo">By Fri'MouSs</span>
            <p className="footer__tagline">
              Développeuse React & WordPress · La Réunion 🌴
            </p>
          </div>

          {/* Nav */}
          <nav className="footer__nav">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className="footer__nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="footer__social">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Stéphanie COUPAMA — By Fri'MouSs
          </p>
          <Link to="/mentions-legales" className="footer__legal">
            Mentions légales
          </Link>
          <Link to="/privacy-policy" className="footer__legal">
            Politique de confidentialité
          </Link>
          <p className="footer__made">Fait avec ❤️</p>
        </div>
      </div>
    </footer>
  );
}
