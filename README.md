---- FRANÇAIS -----

# Portfolio — Stéphanie COUPAMA · By Fri'MouSs

> Portfolio personnel développé from scratch avec React 19, Framer Motion et SASS.  
> Déployé sur Vercel · Score Lighthouse 100/100/100/100 · Score sécurité A

**[Voir le portfolio en ligne](https://portfolio-graphweb.vercel.app)**

---

## Fonctionnalités

- Animations avancées avec Framer Motion (transitions de routes, parallaxe, scroll)
- Curseur personnalisé avec états hover
- Mode clair/sombre persistant via Redux Toolkit
- Design responsive mobile-first
- Images optimisées en WebP avec Sharp (-80% de poids)
- Fonts hébergées en local (Variable Fonts — zéro dépendance Google Fonts)
- Headers de sécurité HTTP configurés via Vercel (score A sur securityheaders.com)
- Formulaire de contact avec Formspree, honeypot anti-spam et conformité RGPD
- Sitemap.xml et robots.txt
- Bouton retour vers le haut hexagonal animé avec progression SVG et effet néon
- Pages mentions légales et politique de confidentialité

---

## Stack technique

| Catégorie           | Technologies             |
| ------------------- | ------------------------ |
| Framework           | React 19                 |
| Build tool          | Vite 7                   |
| Animations          | Framer Motion            |
| State management    | Redux Toolkit            |
| Style               | SASS (fichiers partiels) |
| Routing             | React Router DOM v7      |
| Carrousel           | SwiperJS                 |
| Formulaire          | Formspree                |
| Optimisation images | Sharp (script Node.js)   |
| Déploiement         | Vercel                   |

---

## Performances

| Métrique                       | Score   |
| ------------------------------ | ------- |
| Performance                    | 100/100 |
| Accessibilité                  | 100/100 |
| Bonnes pratiques               | 100/100 |
| SEO                            | 100/100 |
| Sécurité (securityheaders.com) | A       |

---

## Installation et démarrage

```bash
# Cloner le repository
git clone https://github.com/ByFrimouss/portfolio-react.git

# Accéder au dossier
cd portfolio-react

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles

```bash
npm run dev        # Serveur de développement (localhost:5173)
npm run build      # Build de production
npm run preview    # Prévisualiser le build
npm run lint       # Vérifier le code avec ESLint
npm run optimize   # Optimiser les images en WebP avec Sharp
```

---

## Structure du projet

portfolio-react/
├── public/
│ ├── fonts/ # Variable Fonts locales (Syne, DM Sans, JetBrains Mono)
│ ├── images/ # Images optimisées en WebP
│ ├── videos/ # Vidéos de présentation des projets
│ ├── robots.txt
│ └── sitemap.xml
├── scripts/
│ └── optimize-images.mjs # Script Sharp d'optimisation des images
├── src/
│ ├── components/ # Composants réutilisables
│ ├── data/ # projects.js — données de tous les projets
│ ├── pages/ # Pages du portfolio
│ ├── router/ # Configuration React Router
│ ├── store/ # Redux store et slices
│ └── styles/ # Variables SASS globales
├── vercel.json # Routes et headers de sécurité
└── vite.config.js

---

## Pages

| Page                         | Route               | Description                              |
| ---------------------------- | ------------------- | ---------------------------------------- |
| Accueil                      | `/`                 | Hero animé, présentation, aperçu projets |
| Projets                      | `/projects`         | Galerie de tous les projets              |
| Détail projet                | `/projects/:slug`   | Page détaillée par projet                |
| Skills                       | `/skills`           | Compétences techniques                   |
| À propos                     | `/about`            | Parcours et expériences                  |
| Contact                      | `/contact`          | Formulaire de contact                    |
| Mentions légales             | `/mentions-legales` | Informations légales                     |
| Politique de confidentialité | `/privacy-policy`   | Conformité RGPD                          |

---

## Optimisation des images

Le projet inclut un script Node.js pour optimiser automatiquement les images :

```bash
npm run optimize
```

Le script convertit automatiquement les `.jpg`, `.jpeg` et `.png` en `.webp`,
redimensionne à 1200px maximum et corrige l'orientation EXIF.

---

## Sécurité

Les headers de sécurité sont configurés dans `vercel.json` :

- `Content-Security-Policy` — sources autorisées pour scripts, styles, fonts
- `X-Frame-Options: DENY` — protection contre le clickjacking
- `X-Content-Type-Options: nosniff` — protection contre le MIME sniffing
- `Strict-Transport-Security` — forçage HTTPS (HSTS)
- `Referrer-Policy` — contrôle des informations de navigation
- `Permissions-Policy` — désactivation caméra, micro, géolocalisation

---

## Auteure

**Stéphanie COUPAMA**  
Développeuse React & WordPress · La Réunion  
By Fri'MouSs · Gr@ph'Web

[![GitHub](https://img.shields.io/badge/GitHub-ByFrimouss-181717?style=flat&logo=github)](https://github.com/ByFrimouss)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Stéphanie_COUPAMA-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/st%C3%A9phanie-coupama/)
[![Portfolio](https://img.shields.io/badge/Portfolio-portfolio--graphweb.vercel.app-4d82ff?style=flat)](https://portfolio-graphweb.vercel.app)

---

## Licence

MIT — Stéphanie COUPAMA 2026

---

---

---- ENGLISH -----

# Portfolio — Stéphanie COUPAMA · By Fri'MouSs

> Personal portfolio built from scratch with React 19, Framer Motion and SASS.  
> Deployed on Vercel · Lighthouse score 100/100/100/100 · Security score A

**[View portfolio online](https://portfolio-graphweb.vercel.app)**

---

## Features

- Advanced animations with Framer Motion (route transitions, parallax, scroll)
- Custom cursor with hover states
- Persistent dark/light mode via Redux Toolkit
- Responsive mobile-first design
- Images optimized to WebP with Sharp (-80% file size)
- Locally hosted fonts (Variable Fonts — zero Google Fonts dependency)
- HTTP security headers configured via Vercel (grade A on securityheaders.com)
- Contact form with Formspree, honeypot anti-spam and GDPR compliance
- Sitemap.xml and robots.txt
- Animated hexagonal back-to-top button with SVG progress and neon effect
- Legal notice and privacy policy pages

---

## Tech Stack

| Category           | Technologies           |
| ------------------ | ---------------------- |
| Framework          | React 19               |
| Build tool         | Vite 7                 |
| Animations         | Framer Motion          |
| State management   | Redux Toolkit          |
| Styling            | SASS (partial files)   |
| Routing            | React Router DOM v7    |
| Carousel           | SwiperJS               |
| Contact form       | Formspree              |
| Image optimization | Sharp (Node.js script) |
| Deployment         | Vercel                 |

---

## Performance

| Metric                         | Score   |
| ------------------------------ | ------- |
| Performance                    | 100/100 |
| Accessibility                  | 100/100 |
| Best Practices                 | 100/100 |
| SEO                            | 100/100 |
| Security (securityheaders.com) | A       |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ByFrimouss/portfolio-react.git

# Navigate to the folder
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev        # Development server (localhost:5173)
npm run build      # Production build
npm run preview    # Preview the build
npm run lint       # Lint code with ESLint
npm run optimize   # Optimize images to WebP with Sharp
```

---

## Project Structure

portfolio-react/
├── public/
│ ├── fonts/ # Local Variable Fonts (Syne, DM Sans, JetBrains Mono)
│ ├── images/ # WebP optimized images
│ ├── videos/ # Project demo videos
│ ├── robots.txt
│ └── sitemap.xml
├── scripts/
│ └── optimize-images.mjs # Sharp image optimization script
├── src/
│ ├── components/ # Reusable components
│ ├── data/ # projects.js — all project data
│ ├── pages/ # Portfolio pages
│ ├── router/ # React Router configuration
│ ├── store/ # Redux store and slices
│ └── styles/ # Global SASS variables
├── vercel.json # Routes and security headers
└── vite.config.js

---

## Pages

| Page           | Route               | Description                                  |
| -------------- | ------------------- | -------------------------------------------- |
| Home           | `/`                 | Animated hero, introduction, project preview |
| Projects       | `/projects`         | All projects gallery                         |
| Project detail | `/projects/:slug`   | Detailed project page                        |
| Skills         | `/skills`           | Technical skills                             |
| About          | `/about`            | Background and experience                    |
| Contact        | `/contact`          | Contact form                                 |
| Legal notice   | `/mentions-legales` | Legal information                            |
| Privacy policy | `/privacy-policy`   | GDPR compliance                              |

---

## Image Optimization

The project includes a Node.js script to automatically optimize images:

```bash
npm run optimize
```

The script automatically converts `.jpg`, `.jpeg` and `.png` files to `.webp`,
resizes to 1200px maximum width and fixes EXIF orientation.

---

## Security

Security headers are configured in `vercel.json`:

- `Content-Security-Policy` — allowed sources for scripts, styles, fonts
- `X-Frame-Options: DENY` — clickjacking protection
- `X-Content-Type-Options: nosniff` — MIME sniffing protection
- `Strict-Transport-Security` — HTTPS enforcement (HSTS)
- `Referrer-Policy` — navigation information control
- `Permissions-Policy` — camera, microphone, geolocation disabled

---

## Author

**Stéphanie COUPAMA**  
React & WordPress Developer · La Réunion  
By Fri'MouSs · Gr@ph'Web

[![GitHub](https://img.shields.io/badge/GitHub-ByFrimouss-181717?style=flat&logo=github)](https://github.com/ByFrimouss)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Stéphanie_COUPAMA-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/st%C3%A9phanie-coupama/)
[![Portfolio](https://img.shields.io/badge/Portfolio-portfolio--graphweb.vercel.app-4d82ff?style=flat)](https://portfolio-graphweb.vercel.app)

---

## License

MIT — Stéphanie COUPAMA 2026
