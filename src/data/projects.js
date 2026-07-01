// ============================================================
// projects.js — Projets de Stéphanie COUPAMA "Fri'MouSs"
// 14 projets React validés + 13 projets WordPress validés
// ============================================================

export const projects = [
  {
    id: 12,
    slug: "portfolio-react",
    title: "Portfolio — FriMouSs",
    subtitle: "React 19 · Framer Motion · Redux · Vite · SASS",
    description:
      "Portfolio personnel développé from scratch avec React 19 : animations avancées avec Framer Motion, curseur personnalisé, parallaxe, transitions de routes, mode clair/sombre, score Lighthouse 100/100/100/100, headers de sécurité A sur securityheaders.com.",
    image: "/images/project-portfolio.webp",
    tags: [
      "React",
      "Framer Motion",
      "Redux Toolkit",
      "SASS",
      "Vite",
      "SwiperJS",
    ],
    github: "https://github.com/ByFrimouss/portfolio-react",
    live: null,
    featured: true,
    year: 2026,
    color: "#2682e2",

    details: {
      context:
        "Projet personnel de fin de formation pour présenter mon parcours, mes compétences et mes réalisations. L'objectif était de créer un portfolio moderne, animé et performant from scratch avec React, sans template ni Page Builder, en mettant en valeur mes compétences front-end à travers le site lui-même. Le site a été déployé sur Vercel, optimisé pour atteindre un score Lighthouse de 100/100/100/100 et sécurisé avec un score A sur securityheaders.com.",

      objectives: [
        "Créer un portfolio 100% React avec une expérience utilisateur soignée",
        "Implémenter des animations avancées avec Framer Motion",
        "Mettre en place un curseur personnalisé et des effets de parallaxe",
        "Gérer le mode clair/sombre avec persistance via Redux",
        "Présenter chaque projet avec une page de détail complète et dynamique",
        "Atteindre un score Lighthouse 100/100/100/100 en navigation privée",
        "Obtenir un score A sur securityheaders.com avec des headers de sécurité avancés",
        "Respecter le RGPD avec politique de confidentialité et formulaire conforme",
      ],

      work: [
        "Mise en place du projet avec Vite et configuration SASS",
        "Architecture des routes avec React Router DOM v7",
        "Développement des pages : Accueil, Projets, À propos, Skills, Contact",
        "Animations de transition entre les routes avec Framer Motion",
        "Curseur personnalisé avec effet de suivi et états hover",
        "Effets de parallaxe sur les sections hero et images de projets",
        "Animations au scroll avec apparition progressive des sections",
        "Barre de défilement personnalisée animée",
        "Effet de bond sur les éléments interactifs",
        "Carrousel de compétences avec SwiperJS",
        "Système de mode clair/sombre géré avec Redux Toolkit",
        "Pages de détail projet dynamiques avec lightbox, zoom et galerie",
        "Section outils par projet avec ce qu'on peut faire avec chaque outil",
        "Déploiement sur Vercel avec configuration des routes et vrais codes HTTP 404",
        "Hébergement des Google Fonts en local (Syne, DM Sans, JetBrains Mono) en Variable Fonts",
        "Optimisation des images avec Sharp : conversion en WebP et redimensionnement à 1200px",
        "Correction du contraste texte/fond dans le footer pour l'accessibilité",
        "Script d'optimisation automatique des images npm run optimize",
        "Configuration des headers de sécurité dans vercel.json (CSP, X-Frame-Options, HSTS...)",
        "Mise en place du sitemap.xml et robots.txt",
        "Page 404 personnalisée avec logo et boutons de retour",
        "Logo Gr@ph'Web intégré dans la navbar",
        "Formulaire de contact avec Formspree, honeypot anti-spam et champ type de demande",
        "Page mentions légales et politique de confidentialité RGPD",
        "Bouton retour vers le haut hexagonal avec progression SVG, néon et animation de traîne",
        "Image Open Graph 1200x630px pour le partage sur les réseaux sociaux",
      ],

      problems: [
        "Coordonner plusieurs couches d'animations sans impacter les performances",
        "Curseur personnalisé à synchroniser avec les états hover de tous les éléments interactifs",
        "Transitions de routes fluides sans flash ni saut de scroll",
        "Mode clair/sombre à appliquer globalement sans re-render excessif",
        "Pages de détail projet riches en contenu à rendre dynamiques depuis un seul composant",
        "Google Fonts bloquant le rendu initial avec 430ms de latence",
        "Images très lourdes (profil.jpg à 8,4 MB) impactant le LCP",
        "Contraste insuffisant sur le footer (ratio 3.2:1 au lieu de 4.5:1 minimum)",
        "Fichier useImageLazy.js non pushé sur GitHub causant un échec de build Vercel",
        "Conflit entre rewrites et headers dans vercel.json empêchant les headers de s'appliquer",
        "Casse de fichier UseImageLazy.js vs useImageLazy.js causant une erreur sur Linux/Vercel",
        "Score D sur securityheaders.com avant configuration des headers",
        "Vrais codes HTTP 404 impossibles avec rewrites globaux — routes explicites nécessaires",
      ],

      solutions: [
        "Framer Motion avec AnimatePresence pour les transitions de routes et animations au scroll",
        "Curseur custom en position fixed avec détection des éléments hoverable via classes CSS",
        "Gestion du thème dans Redux Toolkit avec persistance dans le localStorage",
        "Composant ProjectDetail unique et dynamique alimenté par le fichier projects.js",
        "SASS structuré en fichiers partiels pour garder un code maintenable",
        "Hébergement des Variable Fonts en local pour supprimer la dépendance Google Fonts",
        "Script Sharp pour convertir toutes les images en WebP avec correction EXIF automatique",
        "Correction des couleurs du footer pour atteindre un ratio de contraste 4.6:1",
        "Headers de sécurité intégrés directement dans les routes vercel.json",
        "Routes explicites dans vercel.json avec status 404 pour les URLs inconnues",
        "Honeypot anti-spam _gotcha + validation côté Formspree pour le formulaire de contact",
      ],

      result:
        "Portfolio moderne, fluide et performant déployé sur Vercel avec un score Lighthouse parfait de 100/100/100/100 en navigation privée, un score A sur securityheaders.com, une page 404 personnalisée, un formulaire de contact conforme RGPD et un bouton retour vers le haut hexagonal animé unique.",

      learnings: [
        "Maîtrise de Framer Motion : variants, AnimatePresence, useScroll, useTransform",
        "Création d'un curseur personnalisé en React avec gestion des états hover",
        "Effets de parallaxe avec Framer Motion et CSS",
        "Architecture Redux Toolkit pour la gestion du thème global",
        "Structuration d'un projet React complexe avec SASS et composants réutilisables",
        "Conception d'un système de données projets extensible (projects.js)",
        "Déploiement et configuration avancée d'une application React sur Vercel",
        "Optimisation Lighthouse : fonts locales, images WebP, contraste accessibilité",
        "Script Node.js avec Sharp pour automatiser l'optimisation des images",
        "Configuration des headers de sécurité HTTP (CSP, HSTS, X-Frame-Options...)",
        "Débogage de problèmes de build Vercel (casse de fichiers, modules manquants, conflits de config)",
        "Mise en conformité RGPD : politique de confidentialité, consentement formulaire",
        "Animation SVG hexagonale avec progression et effet néon en React",
      ],

      advice:
        "Un portfolio est le projet où tu as le plus de liberté — profites-en pour pousser les animations et l'UX au maximum. C'est souvent la première chose qu'un recruteur voit, et le site lui-même est déjà une démonstration de tes compétences. Mesure les performances avec Lighthouse dès le début, et pense à la sécurité dès le déploiement — deux aspects souvent négligés qui font vraiment la différence.",

      tools: [
        {
          name: "React 19 + Vite",
          icon: "⚛️",
          what: [
            "Construire l'interface en composants réutilisables et maintenables",
            "Profiter du hot reload ultra-rapide de Vite en développement",
            "Générer un build de production optimisé pour le déploiement",
          ],
        },
        {
          name: "Framer Motion",
          icon: "🎬",
          what: [
            "Animer les transitions entre les pages avec AnimatePresence",
            "Déclencher des animations au scroll avec useScroll et useTransform",
            "Créer des effets de parallaxe fluides sur les images et sections hero",
            "Gérer les animations d'apparition des sections avec des variants réutilisables",
            "Animer un bouton retour vers le haut hexagonal avec traîne lumineuse",
          ],
        },
        {
          name: "Curseur personnalisé",
          icon: "🖱️",
          what: [
            "Remplacer le curseur natif par un curseur animé cohérent avec le design",
            "Changer l'apparence du curseur au survol des éléments interactifs",
            "Renforcer l'identité visuelle du portfolio avec un détail d'UX distinctif",
          ],
        },
        {
          name: "Redux Toolkit",
          icon: "🔄",
          what: [
            "Gérer le mode clair/sombre globalement sans prop drilling",
            "Persister la préférence de thème dans le localStorage",
            "Maintenir un état cohérent sur toutes les pages du portfolio",
          ],
        },
        {
          name: "SASS",
          icon: "🎨",
          what: [
            "Structurer le CSS en fichiers partiels par composant et page",
            "Utiliser les variables SASS pour les couleurs, typographies et espacements",
            "Gérer le mode clair/sombre via des classes CSS globales",
          ],
        },
        {
          name: "SwiperJS",
          icon: "🎠",
          what: [
            "Créer un carrousel de compétences interactif sur la page Skills",
            "Gérer la navigation tactile pour une expérience mobile optimale",
          ],
        },
        {
          name: "React Router DOM v7",
          icon: "🧭",
          what: [
            "Gérer la navigation entre les 5 pages du portfolio",
            "Combiner avec Framer Motion pour des transitions de routes animées",
            "Générer les pages de détail projet dynamiquement depuis le slug",
            "Configurer des vrais codes HTTP 404 via routes explicites dans vercel.json",
          ],
        },
        {
          name: "Sharp + script WebP",
          icon: "🖼️",
          what: [
            "Convertir automatiquement toutes les images en WebP",
            "Redimensionner à 1200px max et corriger l'orientation EXIF automatiquement",
            "Réduire le poids des images jusqu'à -80% sans perte de qualité visible",
          ],
        },
        {
          name: "Variable Fonts locales",
          icon: "🔤",
          what: [
            "Héberger Syne, DM Sans et JetBrains Mono directement dans le projet",
            "Supprimer la dépendance Google Fonts et gagner 230ms sur le LCP",
            "Utiliser un seul fichier par famille pour tous les weights grâce aux Variable Fonts",
          ],
        },
        {
          name: "Vercel + vercel.json",
          icon: "🚀",
          what: [
            "Déployer automatiquement le portfolio à chaque push sur GitHub",
            "Configurer les headers de sécurité HTTP directement dans les routes",
            "Gérer les vrais codes 404 avec routes explicites",
            "Optimiser le cache des assets, fonts et images avec Cache-Control",
          ],
        },
        {
          name: "Headers de sécurité",
          icon: "🔒",
          what: [
            "Protéger contre le clickjacking avec X-Frame-Options: DENY",
            "Contrôler les sources autorisées avec Content-Security-Policy",
            "Forcer HTTPS avec Strict-Transport-Security (HSTS)",
            "Désactiver caméra, micro et géolocalisation avec Permissions-Policy",
            "Passer de D à A sur securityheaders.com",
          ],
        },
        {
          name: "Formspree + RGPD",
          icon: "📬",
          what: [
            "Recevoir les messages du formulaire de contact sans back-end",
            "Protéger contre le spam avec un champ honeypot _gotcha",
            "Qualifier les demandes avec un champ type (freelance, recrutement...)",
            "Respecter le RGPD avec politique de confidentialité et case de consentement",
          ],
        },
      ],

      images: ["/images/audit-lighthouse-100.webp"],
    },
  },
  {
    id: 11,
    slug: "hrnet-jquery-vers-react",
    title: "Migration jQuery → React — HRnet",
    subtitle: "React · Redux Toolkit · Vite · npm · Lighthouse",
    description:
      "Migration complète de l'application RH HRnet de jQuery vers React : conversion d'un plugin jQuery en composant React publié sur npm, remplacement des plugins restants, audit de performance Lighthouse avant/après.",
    image: "/images/hero-banner-hrnet.webp",
    tags: ["React", "Redux Toolkit", "Vite", "SASS", "npm", "JavaScript"],
    github: "https://github.com/ByFrimouss/hrnet-react",
    npm: "https://www.npmjs.com/package/@byfrimouss/hrnet-modal-react",
    live: null,
    featured: true,
    year: 2026,
    color: "#f0a500",

    details: {
      context:
        "Mission chez WealthHealth pour moderniser HRnet, leur application RH interne utilisée pour gérer les dossiers employés. L'application souffrait de bugs importants causés par des plugins jQuery obsolètes. L'objectif était de migrer l'ensemble vers React en convertissant un plugin jQuery en composant React publié sur npm, et en remplaçant les autres plugins par des librairies React modernes.",

      objectives: [
        "Convertir l'application HRnet de jQuery vers React 100% sans jQuery résiduel",
        "Convertir le plugin jQuery modal en composant React et le publier sur npm",
        "Remplacer les 3 plugins restants par des librairies React modernes",
        "Mesurer les gains de performance avec des audits Lighthouse avant/après",
        "Documenter le composant React publié avec un Readme complet",
      ],

      work: [
        "Analyse du code jQuery existant et identification des 4 plugins à remplacer",
        "Conversion du plugin modal jQuery en composant React fonctionnel",
        "Publication du composant @byfrimouss/hrnet-modal-react sur npm",
        "Rédaction du Readme avec description, props et exemples d'utilisation",
        "Mise en place du projet React avec Vite et configuration Redux Toolkit",
        "Intégration de react-datepicker pour remplacer le sélecteur de date jQuery",
        "Intégration de react-select pour remplacer les menus déroulants jQuery",
        "Intégration de TanStack Table pour remplacer le plugin de tableau jQuery",
        "Développement de la page Create Employee avec formulaire complet",
        "Développement de la page Employee List avec recherche, tri et pagination",
        "Audit Lighthouse sur l'application jQuery originale (avant)",
        "Build de production et audit Lighthouse sur l'application React (après)",
      ],

      problems: [
        "Plugins jQuery causant des bugs, lenteurs et manipulation DOM excessive",
        "Application entière à migrer sans laisser cohabiter jQuery et React",
        "Composant modal à concevoir de zéro en paradigme fonctionnel React",
        "Publication npm avec documentation claire pour que l'équipe puisse l'utiliser",
        "Gestion de l'état global (remplaçant le localStorage jQuery) avec Redux Toolkit",
      ],

      solutions: [
        "Migration 100% React avec Vite — zéro jQuery résiduel dans le code final",
        "Composant modal en fonctions pures React, documenté et publié sur npm",
        "react-datepicker, react-select et TanStack Table pour les 3 plugins restants",
        "Redux Toolkit pour centraliser l'état des employés en remplacement du localStorage",
        "Build de production avant les audits Lighthouse pour des mesures représentatives",
      ],

      result:
        "Application HRnet entièrement migrée vers React avec des performances significativement améliorées mesurées par Lighthouse. Composant modal React publié sur npm (@byfrimouss/hrnet-modal-react) et documenté pour une réutilisation par l'équipe.",

      learnings: [
        "Migration d'une application jQuery vers React sans dette technique résiduelle",
        "Création et publication d'un package React sur npm avec documentation",
        "Architecture Redux Toolkit pour la gestion d'état global",
        "Utilisation de TanStack Table pour des tableaux avec tri, recherche et pagination",
        "Mesure et comparaison des performances avec Google Lighthouse avant/après migration",
        "Paradigme fonctionnel React : composants fonctions, hooks, pas de classes",
      ],

      advice:
        "Avant de migrer, auditer les performances de l'application existante. Sans mesure avant/après, impossible de prouver la valeur du travail réalisé — et les gains sont souvent bien plus importants qu'attendu.",

      tools: [
        {
          name: "React 18 + Vite",
          icon: "⚛️",
          what: [
            "Reconstruire l'application HRnet entièrement en composants fonctionnels React",
            "Profiter du démarrage ultra-rapide de Vite en développement",
            "Générer un build de production optimisé pour les audits Lighthouse",
          ],
        },
        {
          name: "Redux Toolkit",
          icon: "🔄",
          what: [
            "Remplacer le localStorage jQuery par un store centralisé et maintenable",
            "Gérer la liste des employés avec des actions et reducers simplifiés",
            "Maintenir un état cohérent entre les pages Create Employee et Employee List",
          ],
        },
        {
          name: "@byfrimouss/hrnet-modal-react",
          icon: "📦",
          what: [
            "Remplacer le plugin jQuery.modal.js par un composant React fonctionnel",
            "Publier le composant sur npm pour le rendre réutilisable par toute l'équipe",
            "Documenter les props et l'utilisation dans un Readme complet",
          ],
        },
        {
          name: "TanStack Table",
          icon: "📋",
          what: [
            "Remplacer le plugin jQuery DataTables par une solution React native",
            "Implémenter la recherche, le tri par colonne et la pagination côté client",
            "Garder un code maintenable et performant sans manipulation DOM jQuery",
          ],
        },
        {
          name: "react-datepicker & react-select",
          icon: "🗓️",
          what: [
            "Remplacer le sélecteur de date jQuery par un composant React accessible",
            "Remplacer les menus déroulants jQuery par react-select personnalisable",
            "Éliminer les appels réseau et manipulations DOM superflus des plugins jQuery",
          ],
        },
        {
          name: "Google Lighthouse",
          icon: "📊",
          what: [
            "Auditer les performances de l'application jQuery originale comme baseline",
            "Mesurer les gains réels après migration sur le build de production React",
            "Produire des rapports comparatifs quantifiables pour justifier la migration",
          ],
        },
        {
          name: "npm (publication de package)",
          icon: "🚀",
          what: [
            "Publier le composant modal sous le scope @byfrimouss sur npm",
            "Permettre à l'équipe d'installer le composant via npm install",
            "Versionner le package pour pouvoir itérer sans casser les projets existants",
          ],
        },
      ],

      images: [
        "/images/hero-banner-hrnet.webp",
        "/images/creation-employee-hrnet.webp",
        "/images/liste-employee-hrnet.webp",
        "/images/publication-npm-hrnet.webp",
        "/images/doc-npm-hrnet.webp",
      ],
    },
  },

  {
    id: 10,
    slug: "argent-bank-react-redux",
    title: "Application Bancaire — Argent Bank",
    subtitle: "React · Redux · API REST · JWT · Swagger",
    description:
      "Développement front-end d'une application bancaire avec React et Redux : authentification JWT, gestion du profil utilisateur et modélisation des endpoints API transactions avec Swagger.",
    image: "/images/hero-banner-argentbank.webp",
    tags: [
      "React",
      "Redux",
      "JavaScript",
      "JWT",
      "Swagger",
      "API REST",
      "Node.js",
    ],
    github: "https://github.com/ByFrimouss/Argent-bank",
    live: null,
    featured: true,
    year: 2026,
    color: "#27b981",

    details: {
      context:
        "Mission chez Remede Agency pour Argent Bank, une nouvelle banque cherchant à se lancer avec une application web moderne. Le projet se décomposait en deux phases : développer l'authentification utilisateur et la gestion du profil en Phase 1, puis modéliser les endpoints API pour les transactions en Phase 2.",

      objectives: [
        "Développer l'application web complète et responsive avec React",
        "Gérer l'état global de l'application avec Redux",
        "Intégrer l'authentification JWT via les appels à l'API REST",
        "Permettre la consultation et la modification du profil utilisateur",
        "Modéliser les endpoints API des transactions avec Swagger (Phase 2)",
      ],

      work: [
        "Fork du repo existant et prise en main des issues GitHub",
        "Mise en place du store Redux avec actions et reducers",
        "Intégration de la page d'accueil avec les données du mockup",
        "Développement de la page de connexion avec appel API et gestion du token JWT",
        "Gestion de la persistance du token et protection des routes privées",
        "Développement de la page profil avec affichage des données utilisateur",
        "Implémentation de la modification du prénom et nom via appel API",
        "Déconnexion avec suppression du token et redirection vers l'accueil",
        "Modélisation des endpoints API transactions en Phase 2 avec Swagger",
        "Export du fichier YAML de la documentation Swagger",
      ],

      problems: [
        "Gestion du token JWT entre les pages sans perte de session au rechargement",
        "Protection des routes privées — page profil inaccessible sans connexion",
        "État global à maintenir de manière cohérente sur toute l'application avec Redux",
        "Modélisation des endpoints transactions sans implémenter la page (Phase 2)",
        "Synchronisation des modifications de profil entre l'API et le store Redux",
      ],

      solutions: [
        "Persistance du token JWT dans le localStorage et rehydratation du store Redux",
        "Routes privées avec redirection automatique vers /login si non authentifié",
        "Store Redux centralisé avec actions et reducers séparés par fonctionnalité",
        "Documentation Swagger rédigée en YAML en s'appuyant sur les maquettes transactions",
        "Mise à jour du store Redux après confirmation de l'API pour garder l'état cohérent",
      ],

      result:
        "Application bancaire responsive et fonctionnelle avec authentification JWT, gestion du profil et déconnexion. Documentation Swagger des endpoints transactions livrée en YAML pour la Phase 2. Code revu avec l'équipe technique d'Argent Bank.",

      learnings: [
        "Authentification JWT : connexion, persistance du token et sécurisation des routes",
        "Architecture Redux : store, actions, reducers et intégration avec les appels API",
        "Protection des routes privées dans une application React",
        "Modélisation d'une API REST avec Swagger et export YAML",
        "Intégration front-end / back-end via une API documentée (Node.js)",
      ],

      advice:
        "Bien séparer les responsabilités dès le départ : les appels API dans des services dédiés, la logique métier dans Redux, et les composants React uniquement pour l'affichage. Ça rend le code infiniment plus facile à maintenir et à tester.",

      tools: [
        {
          name: "React",
          icon: "⚛️",
          what: [
            "Construire les pages (accueil, connexion, profil) en composants réutilisables",
            "Gérer la navigation entre les pages avec React Router",
            "Protéger les routes privées et rediriger les utilisateurs non authentifiés",
          ],
        },
        {
          name: "Redux",
          icon: "🔄",
          what: [
            "Centraliser l'état global de l'application (utilisateur connecté, token, profil)",
            "Gérer les actions de connexion, déconnexion et mise à jour du profil",
            "Maintenir un état cohérent entre toutes les pages sans prop drilling",
          ],
        },
        {
          name: "JWT (JSON Web Token)",
          icon: "🔐",
          what: [
            "Authentifier l'utilisateur auprès de l'API back-end à la connexion",
            "Persister le token dans le localStorage pour maintenir la session au rechargement",
            "Sécuriser les appels API nécessitant une authentification via le header Authorization",
          ],
        },
        {
          name: "API REST & Axios/Fetch",
          icon: "🔌",
          what: [
            "Appeler les endpoints back-end pour la connexion, le profil et la mise à jour",
            "Isoler les appels API dans des services dédiés hors composants React",
            "Gérer les réponses et erreurs API pour informer l'utilisateur en temps réel",
          ],
        },
        {
          name: "Swagger & YAML",
          icon: "📄",
          what: [
            "Modéliser les endpoints API des transactions pour la Phase 2",
            "Décrire les méthodes HTTP, routes, paramètres et codes de réponse",
            "Exporter la documentation en fichier YAML prêt à intégrer dans le back-end",
          ],
        },
      ],

      video: "/videos/prise-en-main-de-lapp-argentbank.mp4",
      videoPoster: "/images/hero-banner-argentbank.webp",
      images: [
        "/images/hero-banner-argentbank.webp",
        "/images/connexion-argentbank.webp",
        "/images/tableau-bord-argentbank.webp",
        "/images/editname-argentbank.webp",
        "/images/page-transaction-argentbank.webp",
        "/images/transaction-seule-argentbank.webp",
      ],
    },
  },

  {
    id: 9,
    slug: "dashboard-analytics-sportsee",
    title: "Dashboard Analytics — SportSee",
    subtitle: "React · Recharts · Axios · JSDoc · Node.js",
    description:
      "Développement d'un tableau de bord d'analytics de coaching sportif avec React : intégration de graphiques avancés (BarChart, LineChart, RadarChart, RadialBarChart), appels API via un service dédié et documentation complète.",
    image: "/images/hero-banner-sportsee.webp",
    tags: ["React", "Recharts", "Axios", "JavaScript", "JSDoc", "Node.js"],
    github: "https://github.com/ByFrimouss/Sportsee-dashboard",
    live: null,
    featured: true,
    year: 2025,
    color: "#d3070a",

    details: {
      context:
        "Mission chez SportSee, une startup de coaching sportif, pour développer la nouvelle page profil utilisateur. L'objectif était d'afficher les données d'activité sportive sous forme de graphiques interactifs en récupérant les données depuis un back-end Node.js, avec une documentation complète pour faciliter le travail en équipe.",

      objectives: [
        "Développer la page profil utilisateur en React selon la maquette Figma",
        "Intégrer 4 types de graphiques avec Recharts (BarChart, LineChart, RadarChart, RadialBarChart)",
        "Récupérer les données depuis l'API via un service dédié hors composants React",
        "Standardiser les données de l'API pour gérer les différences entre utilisateurs",
        "Documenter le projet avec un Readme, JSDoc et PropTypes",
      ],

      work: [
        "Analyse de la maquette Figma et des User Stories du kanban",
        "Mise en place du projet React et configuration de l'environnement",
        "Création du mock des données API pour démarrer le développement sans back-end",
        "Développement du service d'appels HTTP avec Axios hors composants React",
        "Standardisation des données API pour uniformiser les schémas entre utilisateurs",
        "Intégration du BarChart — activité quotidienne (poids et calories) avec tooltip",
        "Intégration du LineChart — durée moyenne des sessions avec tooltip",
        "Intégration du RadarChart — types d'activité sportive",
        "Intégration du RadialBarChart — score de complétion de l'objectif journalier",
        "Intégration des cards chiffres clés (calories, protéines, glucides, lipides)",
        "Affichage dynamique du prénom utilisateur depuis l'API",
        "Rédaction du Readme, JSDoc et PropTypes pour la documentation",
      ],

      problems: [
        "Schéma de données légèrement différent selon les utilisateurs, nécessitant une standardisation",
        "Appels HTTP à isoler dans un service dédié pour ne pas polluer les composants React",
        "Démarrage du développement sans back-end disponible (mock nécessaire)",
        "4 types de graphiques différents à intégrer et personnaliser selon la maquette",
        "Documentation à produire en parallèle du développement pour faciliter la collaboration",
      ],

      solutions: [
        "Création d'une couche de normalisation des données entre l'API et les composants",
        "Service HTTP dédié avec Axios gérant tous les appels API hors composants",
        "Mock des données API dès le départ pour développer en autonomie",
        "Recharts choisi pour sa compatibilité native avec React et sa personnalisation",
        "JSDoc sur chaque composant et fonction, PropTypes sur tous les composants React",
      ],

      result:
        "Page profil utilisateur fonctionnelle avec 4 graphiques interactifs, données réelles depuis l'API Node.js, affichage responsive à partir de 1024x780px. Projet documenté avec Readme, JSDoc et PropTypes, prêt pour une reprise en équipe.",

      learnings: [
        "Intégration de graphiques avancés avec Recharts dans une app React",
        "Architecture React avec séparation des responsabilités (composants / service API)",
        "Normalisation des données d'une API pour gérer les variations de schéma",
        "Mock de données API pour développer en parallèle du back-end",
        "Documentation de code avec JSDoc et PropTypes pour le travail en équipe",
      ],

      advice:
        "Toujours commencer par mocker les données avant de brancher l'API réelle. Ça permet de développer vite, de tester les composants indépendamment, et d'éviter d'être bloqué par le back-end.",

      tools: [
        {
          name: "React",
          icon: "⚛️",
          what: [
            "Construire l'interface en composants réutilisables et maintenables",
            "Gérer l'état des données utilisateur et l'affichage conditionnel",
            "Structurer le projet avec une séparation claire composants / services",
          ],
        },
        {
          name: "Recharts",
          icon: "📊",
          what: [
            "Intégrer un BarChart pour l'activité quotidienne (poids et calories brûlées)",
            "Intégrer un LineChart pour la durée moyenne des sessions",
            "Intégrer un RadarChart pour les types d'activité sportive",
            "Intégrer un RadialBarChart pour le score de complétion de l'objectif journalier",
          ],
        },
        {
          name: "Axios & service HTTP",
          icon: "🔌",
          what: [
            "Centraliser tous les appels API dans un service dédié hors composants React",
            "Récupérer les données utilisateur depuis les routes /user/:id et ses sous-routes",
            "Gérer proprement les erreurs de requête sans polluer les composants",
          ],
        },
        {
          name: "Mock de données API",
          icon: "🎭",
          what: [
            "Simuler les réponses de l'API pour démarrer le développement sans back-end",
            "Tester les composants graphiques avec des données contrôlées",
            "Basculer facilement entre données mockées et API réelle sans modifier les composants",
          ],
        },
        {
          name: "Normalisation des données",
          icon: "🔄",
          what: [
            "Uniformiser les schémas de données différents selon les utilisateurs",
            "Garantir que les composants reçoivent toujours le même format de données",
            "Isoler la logique de transformation dans la couche service pour garder les composants propres",
          ],
        },
        {
          name: "JSDoc & PropTypes",
          icon: "📖",
          what: [
            "Documenter chaque composant et fonction pour faciliter la reprise du code en équipe",
            "Typer les props de chaque composant React pour détecter les erreurs à l'exécution",
            "Générer une documentation lisible directement depuis les commentaires du code",
          ],
        },
      ],

      video: "/videos/prise-en-main-de-lapp-sportsee.mp4",
      videoPoster: "/images/prise-en-main-sportsee-poster.webp",
      images: [
        "/images/hero-banner-sportsee.webp",
        "/images/recharts-sportsee.webp",
        "/images/organisation-fichier-sportsee.webp",
        "/images/jsdocs-import-sportsee.webp",
        "/images/tooltips-sportsee.webp",
      ],
    },
  },

  {
    id: 8,
    slug: "cadrage-learn-at-home",
    title: "Cadrage projet — Learn@Home",
    subtitle: "UX · Figma · User Stories · Kanban · Cas d'usage",
    description:
      "Cadrage complet d'une application de soutien scolaire : diagrammes de cas d'usage, user stories, maquettes Figma desktop et mobile, et tableau Kanban pour une association mettant en relation élèves et tuteurs bénévoles.",
    image: "/images/hero-banner-learn@home.webp",
    tags: ["Figma", "UX Design", "Agile", "Kanban", "User Stories"],
    github: null,
    live: null,
    featured: true,
    year: 2025,
    color: "#d93a50",

    details: {
      context:
        "Mission de cadrage chez Dev4U pour Learn@Home, une association mettant en relation des élèves en difficulté scolaire avec des tuteurs bénévoles. L'association fonctionnait jusqu'alors par bouche à oreille et SMS. L'objectif était de définir précisément les besoins avant tout développement, en produisant les livrables de cadrage nécessaires à la présentation client.",

      objectives: [
        "Créer les diagrammes de cas d'usage pour les 5 fonctionnalités majeures",
        "Rédiger les user stories avec critères d'acceptation pour chaque fonctionnalité",
        "Concevoir les maquettes desktop et mobile sur Figma",
        "Compléter le tableau Kanban en blocs de fonctionnalités et sous-fonctionnalités",
        "Préparer la présentation de navigation entre les pages pour le meeting client",
      ],

      work: [
        "Analyse des notes de réunion et des croquis fournis par le client",
        "Création des diagrammes de cas d'usage pour : connexion, chat, calendrier, gestion des tâches, tableau de bord",
        "Rédaction des user stories avec critères d'acceptation au format DOCX/XLSX",
        "Conception des maquettes desktop et mobile sur Figma (au moins une par page)",
        "Définition de la navigation entre les pages dans le prototype Figma",
        "Complétion de la colonne ANALYZE du Kanban Notion en blocs macro",
      ],

      problems: [
        "Besoins client exprimés sous forme de notes et croquis informels à formaliser",
        "Deux profils utilisateurs distincts (élève et bénévole) avec des droits différents sur les tâches",
        "5 pages interconnectées dont le tableau de bord agrège les données des autres",
        "Maquettes à produire en double (desktop et mobile) pour chaque page",
        "Kanban à structurer de manière macro sans entrer dans les détails techniques",
      ],

      solutions: [
        "Transformation des notes de réunion en diagrammes de cas d'usage structurés par page",
        "User stories séparées par profil (élève / bénévole) avec critères d'acceptation précis",
        "Maquettes Figma avec prototype de navigation pour illustrer les enchaînements entre pages",
        "Kanban découpé en blocs fonctionnels réutilisables pour guider l'équipe de développement",
      ],

      result:
        "Livrables de cadrage complets présentés au client : diagrammes de cas d'usage, user stories documentées, maquettes Figma desktop et mobile avec navigation prototypée, et Kanban structuré prêt pour le démarrage du développement.",

      learnings: [
        "Formalisation des besoins client à partir de notes informelles",
        "Rédaction de user stories avec critères d'acceptation actionnables",
        "Conception UX/UI sur Figma avec gestion du responsive desktop et mobile",
        "Structuration d'un backlog Kanban en méthodologie agile",
        "Prise en compte de plusieurs profils utilisateurs avec des droits distincts",
      ],

      advice:
        "Cadrer avant de coder est un investissement, pas une perte de temps. Une user story mal définie en amont coûte dix fois plus cher à corriger une fois le développement commencé.",

      tools: [
        {
          name: "Diagrammes de cas d'usage",
          icon: "📐",
          what: [
            "Visualiser les interactions entre les utilisateurs et chaque fonctionnalité du site",
            "Distinguer les actions disponibles selon le profil (élève vs bénévole)",
            "Communiquer simplement les fonctionnalités au client sans langage technique",
          ],
        },
        {
          name: "User Stories",
          icon: "📝",
          what: [
            "Exprimer les besoins utilisateurs du point de vue de l'élève ou du bénévole",
            "Définir des critères d'acceptation mesurables pour chaque fonctionnalité",
            "Servir de référence partagée entre le client et l'équipe de développement",
          ],
        },
        {
          name: "Figma",
          icon: "🎨",
          what: [
            "Concevoir les maquettes desktop et mobile de chacune des 5 pages",
            "Prototyper la navigation entre les pages pour la présentation client",
            "Visualiser le design final avant tout développement pour valider avec le client",
          ],
        },
        {
          name: "Kanban (Notion / Trello)",
          icon: "📋",
          what: [
            "Découper le projet en blocs de fonctionnalités et sous-fonctionnalités",
            "Structurer le backlog de développement de manière macro sans détails techniques",
            "Faciliter le suivi d'avancement du projet en équipe agile",
          ],
        },
      ],

      video: "/videos/prise-en-main-de-lapp-learn@home.mp4",
      videoPoster: "/images/prise-en-main-learn@home-poster.webp",
      images: [
        "/images/hero-banner-learn@home.webp",
        "/images/creation-compte-learn@home.webp",
        "/images/chat-learn@home.webp",
        "/images/maquette-learn@home.webp",
        "/images/prototypage-learn@home.webp",
        "/images/version-mobile-learn@home.webp",
      ],
    },
  },

  {
    id: 7,
    slug: "debug-tests-billed",
    title: "Débogage & Tests — Billed",
    subtitle: "JavaScript · Jest · Chrome Debugger · Tests E2E",
    description:
      "Débogage et mise en place de tests unitaires, d'intégration et E2E sur une application SaaS RH de gestion de notes de frais, avec un objectif de couverture de code à 80%.",
    image: "/images/hero-banner-billed.webp",
    tags: [
      "JavaScript",
      "Jest",
      "Chrome Debugger",
      "Tests unitaires",
      "Tests E2E",
    ],
    github: "https://github.com/FriMouSs",
    live: null,
    featured: true,
    year: 2025,
    color: "#0c5ae4",

    details: {
      context:
        "Mission de renfort en urgence chez Billed, entreprise SaaS RH, pour fiabiliser la fonctionnalité 'notes de frais' avant son lancement officiel dans deux semaines. Une collègue avait quitté l'entreprise en laissant le parcours employé non testé et non débugué. Le parcours administrateur, déjà testé, nécessitait également des corrections.",

      objectives: [
        "Corriger les bugs identifiés dans le rapport Jest sur le parcours administrateur",
        "Identifier et corriger les bugs du parcours employé via Chrome Debugger",
        "Écrire des tests unitaires et d'intégration pour les fichiers Bills et NewBill",
        "Atteindre un taux de couverture global des fonctions de 80% minimum",
        "Rédiger un plan de test End-to-End manuel pour le parcours employé",
      ],

      work: [
        "Installation et configuration du back-end et du front-end depuis les repos fournis",
        "Lecture du kanban Notion pour identifier les bugs connus sur les deux parcours",
        "Débogage du parcours administrateur avec Chrome Debugger (bugs rapport Jest)",
        "Identification et correction des bugs du parcours employé (bug hunt)",
        "Rédaction des tests unitaires pour les fichiers Bills.js et NewBill.js",
        "Rédaction des tests d'intégration en s'appuyant sur le mock de l'API",
        "Vérification du taux de couverture via le rapport Jest (lcov-report)",
        "Test des erreurs 404 et 500 dans les tests d'intégration",
        "Rédaction du plan de test End-to-End manuel pour le parcours employé",
      ],

      problems: [
        "Codebase partiellement testée reprise en urgence sans passation de la développeuse précédente",
        "Bugs silencieux sur le parcours employé sans rapport de test existant",
        "Taux de couverture insuffisant sur les fichiers Bills et NewBill",
        "Tests d'intégration nécessitant un mock de l'API pour simuler les appels serveur",
        "Plan E2E inexistant pour le parcours employé, bloquant les tests manuels de la QA",
      ],

      solutions: [
        "Utilisation de Chrome Debugger pour tracer précisément l'origine des bugs",
        "Exploitation du rapport de couverture Jest pour identifier les fonctions non couvertes",
        "Rédaction de tests unitaires avec des matchers pertinents pour tester le comportement réel",
        "Mock de l'API dans les tests d'intégration en s'inspirant des fichiers Dashboard.js existants",
        "Rédaction d'un plan E2E structuré en s'inspirant du plan administrateur de Garance",
      ],

      result:
        "Parcours employé et administrateur débugués et fonctionnels. Taux de couverture Jest porté à 80% minimum sur l'ensemble des fonctions. Plan de test E2E livré à Leïla pour les tests manuels. Application prête pour la démo en entreprise dans les délais impartis.",

      learnings: [
        "Débogage JavaScript méthodique avec Chrome Debugger (breakpoints, call stack, watch)",
        "Rédaction de tests unitaires Jest avec des matchers adaptés au comportement testé",
        "Rédaction de tests d'intégration avec mock de l'API pour simuler les appels serveur",
        "Lecture et interprétation d'un rapport de couverture Jest (lcov-report)",
        "Rédaction d'un plan de test End-to-End structuré pour des tests manuels",
        "Reprendre une codebase existante sans documentation ni passation",
      ],

      advice:
        "Un bon test ne cherche pas à gonfler le taux de couverture — il cherche à vérifier un comportement précis. Utiliser des matchers pertinents plutôt que de multiplier les assertions creuses.",

      tools: [
        {
          name: "Chrome Debugger",
          icon: "🔍",
          what: [
            "Poser des breakpoints pour stopper l'exécution et inspecter l'état des variables",
            "Parcourir la call stack pour identifier la source exacte d'un bug",
            "Tracer les requêtes réseau pour détecter les appels API en échec",
          ],
        },
        {
          name: "Jest — tests unitaires",
          icon: "🧪",
          what: [
            "Tester chaque fonction de Bills.js et NewBill.js de manière isolée",
            "Vérifier les comportements attendus avec des matchers précis et pertinents",
            "Tester les cas limites comme les erreurs 404 et 500",
          ],
        },
        {
          name: "Jest — tests d'intégration",
          icon: "🔗",
          what: [
            "Vérifier l'interaction entre les différentes parties de l'application",
            "Mocker l'API pour simuler les appels serveur sans dépendre du back-end",
            "S'assurer qu'une modification sur un composant ne casse pas les autres",
          ],
        },
        {
          name: "Rapport de couverture Jest (lcov)",
          icon: "📊",
          what: [
            "Identifier visuellement les fonctions et branches non couvertes par les tests",
            "Piloter la rédaction des tests manquants pour atteindre 80% de couverture",
            "Vérifier que la couverture globale est maintenue après chaque ajout de test",
          ],
        },
        {
          name: "Plan de test End-to-End",
          icon: "📋",
          what: [
            "Décrire les scénarios de test manuels du parcours employé étape par étape",
            "Permettre à la QA (Leïla) d'exécuter les tests sans connaître le code",
            "Couvrir tous les cas d'usage critiques avant le lancement de la fonctionnalité",
          ],
        },
        {
          name: "Mock API (Jest)",
          icon: "🎭",
          what: [
            "Simuler les réponses de l'API sans appel réseau réel dans les tests",
            "Tester les comportements en cas de succès, d'erreur 404 et d'erreur 500",
            "Garantir des tests reproductibles et indépendants de l'état du back-end",
          ],
        },
      ],

      images: [
        "/images/hero-banner-billed.webp",
        "/images/tableau-bord-admin-billed.webp",
        "/images/ticket-attente-admin-billed.webp",
        "/images/justificatif-admin-billed.webp",
        "/images/tableau-bord-employee-billed.webp",
        "/images/note-de-frais-employee-billed.webp",
        "/images/choisir-fichier-employee-billed.webp",
        "/images/erreur-jsbench-billed.webp",
        "/images/resolution-probleme-jsbench-billed.webp",
        "/images/chrome-debugger-employee-billed.webp",
      ],
    },
  },

  {
    id: 6,
    slug: "algorithme-recherche-les-petits-plats",
    title: "Algorithme de recherche — Les Petits Plats",
    subtitle: "JavaScript · Bootstrap · Git · Green Code",
    description:
      "Développement d'un moteur de recherche performant pour un site de recettes de cuisine : deux algorithmes comparés (boucles natives vs programmation fonctionnelle), fiche d'investigation et analyse des performances.",
    image: "/images/hero-banner-lespetitsplats.webp",
    tags: [
      "JavaScript",
      "Tailwind",
      "Git",
      "JSON",
      "Green Code",
      "HTML",
      "CSS",
    ],
    live: "https://byfrimouss.github.io/Les-petits-plats/",
    featured: true,
    year: 2025,
    color: "#f8e344",

    details: {
      context:
        "Mission freelance de 3 mois pour Les Petits Plats, une entreprise éditrice de livres de cuisine se lançant dans un site de recettes en ligne. L'équipe back-end n'étant pas encore constituée, le travail portait uniquement sur le front-end avec un fichier JSON de 50 recettes. La priorité absolue était la fluidité et la rapidité du moteur de recherche.",

      objectives: [
        "Intégrer l'interface de recherche en respectant la maquette Figma",
        "Développer deux versions de l'algorithme de recherche principal",
        "Comparer les performances des deux algorithmes avec Jsben.ch",
        "Documenter le travail dans une fiche d'investigation de fonctionnalité",
        "Respecter les principes du Green Code et la sécurité contre les injections HTML",
      ],

      work: [
        "Intégration de l'interface avec Bootstrap (CSS uniquement, JS maison)",
        "Mise en place de la barre de recherche principale (déclenchement à 3 caractères)",
        "Développement de l'algorithme v1 avec boucles natives (while, for)",
        "Développement de l'algorithme v2 en programmation fonctionnelle (filter, map, reduce)",
        "Implémentation sur 2 branches Git séparées pour conserver le code isolé",
        "Recherche avancée par tags (ingrédients, ustensiles, appareils) commune aux 2 versions",
        "Mise à jour dynamique des listes de tags selon les recettes affichées",
        "Affichage du message d'erreur si aucune recette ne correspond à la recherche",
        "Sécurisation des formulaires contre les injections de balises HTML",
        "Tests de performance sur Jsben.ch et rédaction de la fiche d'investigation",
        "Validation W3C HTML et CSS",
      ],

      problems: [
        "Deux algorithmes différents à développer et maintenir en parallèle sur des branches séparées",
        "Les listes de tags devaient se mettre à jour en temps réel selon les recettes restantes",
        "La recherche devait combiner barre principale ET tags en intersection (pas en union)",
        "Risque d'injection HTML via les champs de recherche à sécuriser",
        "Aucune librairie JavaScript autorisée — tout le code devait être écrit from scratch",
      ],

      solutions: [
        "Deux branches Git dédiées (feature/algo-native et feature/algo-functional) pour isoler les implémentations",
        "Recalcul des listes de tags à chaque mise à jour des résultats de recherche",
        "Logique d'intersection : chaque tag ajouté filtre les résultats déjà filtrés",
        "Échappement des entrées utilisateur avant tout affichage dans le DOM",
        "Code découpé en fonctions réutilisables (rendu carte, génération tags) selon les principes Green Code",
      ],

      result:
        "Moteur de recherche fluide et quasi-instantané livré avec les deux implémentations comparées. Fiche d'investigation complète remise à l'équipe back-end avec algorigrammes, résultats Jsben.ch et recommandation d'algorithme argumentée.",

      learnings: [
        "Analyse et comparaison de performances d'algorithmes JavaScript",
        "Différences concrètes entre boucles natives et programmation fonctionnelle (Array methods)",
        "Gestion de branches Git pour des implémentations parallèles",
        "Sécurisation des inputs utilisateur contre les injections HTML",
        "Rédaction d'une fiche d'investigation technique lisible par une équipe back-end",
      ],

      advice:
        "Avant d'optimiser, mesurer. Sans Jsben.ch, impossible de savoir laquelle des deux versions est réellement plus rapide — l'intuition trompe souvent sur les performances JavaScript. Toujours benchmarker avant de trancher.",

      tools: [
        {
          name: "JavaScript natif (boucles)",
          icon: "🔁",
          what: [
            "Parcourir le tableau JSON de 50 recettes avec while et for pour la version v1",
            "Contrôler précisément chaque itération pour optimiser les performances brutes",
            "Comparer la vitesse d'exécution avec la version fonctionnelle sur Jsben.ch",
          ],
        },
        {
          name: "JavaScript fonctionnel (Array methods)",
          icon: "🧮",
          what: [
            "Filtrer les recettes avec filter, map et reduce pour la version v2",
            "Écrire un code plus lisible et maintenable pour l'équipe back-end",
            "Chaîner les méthodes pour combiner barre de recherche et tags en une seule passe",
          ],
        },
        {
          name: "Jsben.ch",
          icon: "⚡",
          what: [
            "Mesurer le nombre d'opérations par seconde de chaque algorithme",
            "Comparer objectivement les deux implémentations dans les mêmes conditions",
            "Alimenter la fiche d'investigation avec des données de performance concrètes",
          ],
        },
        {
          name: "Tailwind (CSS uniquement)",
          icon: "🎨",
          what: [
            "Intégrer rapidement l'interface responsive en respectant la maquette Figma",
            "Utiliser uniquement les classes CSS de Tailwind sans son JavaScript",
            "Garder le contrôle total sur le comportement JavaScript sans dépendance externe",
          ],
        },
        {
          name: "Git (branches)",
          icon: "🌿",
          what: [
            "Isoler les deux implémentations sur des branches séparées (algo-native / algo-functional)",
            "Permettre à l'équipe de comparer le code des deux versions côte à côte",
            "Fusionner uniquement la version retenue après l'analyse des performances",
          ],
        },
        {
          name: "Green Code",
          icon: "🌱",
          what: [
            "Découper le code en fonctions réutilisables (rendu carte, génération tags) pour éviter la duplication",
            "Choisir l'algorithme le plus performant pour réduire les cycles CPU consommés",
            "Ne déclencher la recherche qu'à partir de 3 caractères pour limiter les calculs inutiles",
          ],
        },
        {
          name: "Sécurité (anti-injection HTML)",
          icon: "🔒",
          what: [
            "Échapper les entrées utilisateur avant tout affichage dans le DOM",
            "Éviter toute injection de balises HTML ou JavaScript via les champs de recherche",
            "Transmettre un code sécurisé à l'équipe back-end comme base de travail saine",
          ],
        },
        {
          name: "Fiche d'investigation",
          icon: "📄",
          what: [
            "Décrire les deux implémentations avec leurs algorigrammes avant de coder",
            "Documenter les résultats de performance pour justifier le choix final",
            "Fournir à l'équipe back-end une référence claire pour adapter le code côté serveur",
          ],
        },
      ],

      images: [
        "/images/hero-banner-lespetitsplats.webp",
        "/images/recherche-3-caractere-lespetitsplats.webp",
        "/images/carte-recette-lespetitsplats.webp",
        "/images/algorigramme-barre-recherche-lespetitsplats.drawio.webp",
      ],
    },
  },

  {
    id: 5,
    slug: "ohmyfood-animations-css",
    title: "Animations CSS — OhMyFood",
    subtitle: "HTML · CSS · Sass · Git · GitHub Pages",
    description:
      "Intégration mobile-first d'un site de restauration gastronomique parisien avec animations CSS avancées, loader, effets hover et approche Sass structurée.",
    image: "/images/hero-banner-ohmyfood.webp",
    tags: ["HTML", "CSS", "Sass", "Git", "GitHub Pages", "Mobile First"],
    live: "https://byfrimouss.github.io/ohmyfood/",
    featured: true,
    year: 2025,
    color: "#9356DC",

    details: {
      context:
        "Mission de développeur junior chez OhMyFood, une startup parisienne souhaitant proposer les menus de 4 restaurants gastronomiques en ligne. Le site devait être développé en mobile-first, sans JavaScript ni framework, avec des animations CSS soignées et un code versionné sur GitHub.",

      objectives: [
        "Intégrer les maquettes mobile et desktop en approche mobile-first",
        "Implémenter des animations CSS avancées sans JavaScript ni librairie",
        "Structurer le CSS avec Sass en plusieurs fichiers partiels",
        "Versionner le projet avec Git et le publier sur GitHub Pages",
        "Valider le HTML et le CSS au W3C sans erreur",
      ],

      work: [
        "Mise en place de l'environnement Git et structure du projet Sass",
        "Intégration mobile-first de la page d'accueil (header, footer, cartes restaurants)",
        "Création du loader CSS couvrant l'écran au chargement (1 à 3 secondes)",
        "Animation des boutons J'aime (remplissage progressif du cœur au hover)",
        "Effet d'éclaircissement et ombre portée renforcée au hover des boutons principaux",
        "Apparition progressive des plats au chargement des pages restaurant (stagger CSS)",
        "Animation de la coche coulissante de droite à gauche au hover des plats",
        "Responsive tablette et desktop via media queries mobile-first",
        "Intégration des 4 pages de restaurant avec contenu dynamique",
        "Validation W3C HTML et CSS sur toutes les pages",
        "Publication du site sur GitHub Pages",
      ],

      problems: [
        "Toutes les animations devaient être réalisées en CSS pur, sans JavaScript",
        "Le loader devait couvrir l'écran entier et disparaître proprement après 1 à 3 secondes",
        "Les plats devaient apparaître avec un décalage progressif (stagger) sans JS",
        "La coche devait coulisser depuis la droite avec un effet fluide dans les deux sens",
        "Le code CSS des 4 pages restaurant devait être mutualisé sans duplication",
      ],

      solutions: [
        "Utilisation des keyframes CSS et animation-delay pour le stagger des plats",
        "Loader réalisé en CSS pur avec animation-fill-mode forwards pour la disparition",
        "Coche animée avec transform translateX et transition CSS bidirectionnelle",
        "Remplissage du cœur via clip-path ou gradient animé en CSS",
        "Structure Sass avec fichiers partiels (_variables, _mixins, _components) partagés entre pages",
      ],

      result:
        "Site OhMyFood Paris livré en mobile-first, responsive sur mobile, tablette et desktop. Toutes les animations sont fluides et cohérentes avec la charte graphique. Code validé W3C, versionné sur GitHub et publié sur GitHub Pages.",

      learnings: [
        "Maîtrise de l'approche mobile-first avec media queries progressives",
        "Animations CSS avancées : keyframes, transition, animation-delay, stagger",
        "Structuration d'un projet Sass en fichiers partiels réutilisables",
        "Workflow Git : commits réguliers, branches, publication GitHub Pages",
        "Validation W3C et débogage CSS multi-breakpoints",
      ],

      advice:
        "Sur un projet sans JavaScript, les animations CSS doivent être pensées dès la structure HTML. Un élément mal positionné dans le DOM est très difficile à animer proprement en CSS pur — contrairement à JS où on peut tout manipuler après coup.",

      tools: [
        {
          name: "HTML / CSS Mobile First",
          icon: "📱",
          what: [
            "Concevoir la version mobile comme base principale du CSS",
            "Ajouter les media queries uniquement pour les adaptations tablette et desktop",
            "Garantir une expérience optimale sur mobile sans surcharger le code",
          ],
        },
        {
          name: "Media Queries (Mobile First)",
          icon: "📐",
          what: [
            "Définir des breakpoints standards pour éviter de multiplier les règles responsive",
            "N'écrire dans les media queries que les règles qui changent par rapport au mobile, pas tout réécrire",
            "Faire évoluer la mise en page progressivement : mobile → tablette → desktop",
            "Adapter les grilles et espacements pour exploiter l'espace disponible sur grand écran",
          ],
        },
        {
          name: "Sass",
          icon: "🖌️",
          what: [
            "Organiser le CSS en fichiers partiels (_variables, _mixins, _components)",
            "Partager les styles communs entre les 4 pages restaurant sans duplication",
            "Utiliser les variables Sass pour appliquer la charte graphique de façon cohérente",
          ],
        },
        {
          name: "Animations CSS (keyframes & transitions)",
          icon: "✨",
          what: [
            "Créer un loader plein écran qui disparaît automatiquement après 1 à 3 secondes",
            "Animer l'apparition en cascade des plats avec un décalage (stagger) via animation-delay progressif",
            "Faire coulisser la coche de droite à gauche avec transform et transition bidirectionnelle",
            "Remplir progressivement le cœur J'aime au hover sans une seule ligne de JavaScript",
          ],
        },
        {
          name: "Git & GitHub",
          icon: "🐙",
          what: [
            "Versionner chaque étape du projet avec des commits explicites",
            "Garder un historique clair pour revenir en arrière en cas de régression CSS",
            "Publier le site en ligne via GitHub Pages sans configuration serveur",
          ],
        },
        {
          name: "Validation W3C",
          icon: "✅",
          what: [
            "Vérifier que le HTML est sémantiquement correct sur toutes les pages",
            "S'assurer qu'aucune propriété CSS invalide ne passe en production",
            "Garantir la compatibilité avec les dernières versions de Chrome et Firefox",
          ],
        },
      ],

      images: [
        "/images/hero-banner-ohmyfood.webp",
        "/images/accueil-mobile-ohmyfood.webp",
        "/images/accueil-tablette-ohmyfood.webp",
        "/images/accueil-desktop-ohmyfood.webp",
        "/images/animation-chargement-ohmyfood.webp",
        "/images/animation-bouton-jaime-ohmyfood.webp",
        "/images/restaurant-seul-ohmyfood.webp",
      ],
    },
  },

  {
    id: 4,
    slug: "site-wordpress-nathalie-mota",
    title: "Site WordPress sur mesure — Nathalie Mota",
    subtitle: "WordPress · PHP · Ajax · ACF · CPT · SCF · jQuery",
    description:
      "Création d'un site WordPress entièrement personnalisé pour une photographe professionnelle : thème sur mesure, custom post types, filtres Ajax, lightbox et pagination infinie.",
    image: "/images/hero-banner-mota.webp",
    tags: ["WordPress", "PHP", "JavaScript", "jQuery", "Ajax", "CSS", "GitHub"],
    github: "https://github.com/ByFrimouss/Nathalie_Mota",
    live: null,
    featured: true,
    year: 2024,
    color: "#d63730",

    details: {
      context:
        "Mission freelance pour Nathalie Mota, photographe professionnelle dans l'événementiel. Son ancien site avait été perdu suite à la fermeture de sa plateforme. Elle avait besoin d'un site WordPress sur mesure lui permettant de présenter ses séries de photos, de les partager avec ses clients et de gérer elle-même son hébergement. Le projet intégrait également des contraintes Green IT sur la gestion des images.",

      objectives: [
        "Créer un thème WordPress entièrement personnalisé sans Page Builder",
        "Mettre en place des custom post types et custom fields pour les photos",
        "Intégrer une pagination infinie et des filtres dynamiques en Ajax",
        "Développer une lightbox et une modale de contact réutilisables",
        "Optimiser les images volumineuses selon les principes du Green IT",
        "Livrer le thème versionné sur GitHub et le site exporté en ZIP",
      ],

      work: [
        "Création du thème personnalisé (style.css, functions.php, index.php) et push GitHub",
        "Intégration du header, footer et menu WordPress dynamique",
        "Création de la modale de contact avec Contact Form 7 dans un template partiel",
        "Mise en place du CPT 'photo' et des taxonomies 'catégorie' et 'format' via CPT UI",
        "Création des custom fields 'type' et 'référence' avec SCF",
        "Saisie et optimisation Green IT des photos de Nathalie",
        "Intégration du template single avec navigation entre photos et photos apparentées via WP_Query",
        "Intégration de la page d'accueil avec hero, liste de photos et bloc réutilisable",
        "Pagination infinie en Ajax via l'API WordPress",
        "Filtres et tri dynamiques en Ajax depuis les taxonomies",
        "Développement de la lightbox plein écran avec navigation prev/next",
        "Export du site en ZIP avec WP Migrate Lite et remplacement des URLs",
      ],

      problems: [
        "Images très volumineuses impactant les performances et l'empreinte carbone du site",
        "Besoin d'une structure de contenu personnalisée sans utiliser les posts standard WordPress",
        "Filtres et tri devant se mettre à jour sans rechargement de page",
        "Blocs réutilisables sur plusieurs pages (lightbox, modale, photo_block) à centraliser",
        "Menu et contenus devant rester modifiables par Nathalie depuis le back-office",
        "Champ REF. PHOTO à préremplir automatiquement dans la modale selon la photo consultée",
      ],

      solutions: [
        "Compression et redimensionnement des images pour respecter les principes du Green IT",
        "Création d'un CPT 'photo' avec CPT UI pour séparer les photos des posts blog futurs",
        "Appels Ajax à l'API WordPress pour les filtres, le tri et la pagination infinie",
        "Templates partiels dans /templates_parts/ pour lightbox, modale et photo_block réutilisables",
        "Menu WordPress natif géré depuis l'administration, jamais codé en dur",
        "Préremplissage automatique du champ REF via jQuery au clic sur le bouton Contact",
      ],

      result:
        "Site WordPress sur mesure livré à Nathalie, responsive desktop et mobile, avec galerie dynamique filtrée en Ajax, lightbox fluide et modale de contact. Thème versionné sur GitHub, archive ZIP prête à déployer sur motaphoto.com.",

      learnings: [
        "Création d'un thème WordPress from scratch sans Page Builder",
        "Maîtrise des custom post types, taxonomies et custom fields avec CPT UI et SCF",
        "Appels Ajax à l'API WordPress pour filtres, tri et pagination infinie",
        "Bonnes pratiques de réutilisabilité PHP via les templates partiels",
        "Application des principes Green IT à la gestion d'images volumineuses",
        "Workflow Git : commits réguliers, push GitHub à chaque étape clé",
      ],

      advice:
        "Penser la réutilisabilité dès le départ. Un bloc PHP intégré en dur sur une page et re-codé sur une autre devient vite un cauchemar à maintenir. Un template partiel bien nommé dans /templates_parts/ règle le problème une fois pour toutes.",

      tools: [
        {
          name: "Thème WordPress personnalisé",
          icon: "🎨",
          what: [
            "Créer un site entièrement sur mesure sans dépendre d'un Page Builder ou d'un thème tiers",
            "Contrôler précisément chaque ligne de HTML, CSS et PHP générée",
            "Garantir des performances optimales en n'embarquant que le code nécessaire",
          ],
        },
        {
          name: "CPT UI & SCF",
          icon: "🗂️",
          what: [
            "Créer un type de contenu 'photo' indépendant des posts blog standard",
            "Ajouter des taxonomies personnalisées 'catégorie' et 'format' pour filtrer les photos",
            "Définir des champs personnalisés 'type' et 'référence' exploitables dans les templates PHP",
          ],
        },
        {
          name: "WP_Query",
          icon: "🔎",
          what: [
            "Requêter les photos de la même catégorie pour la section 'photos apparentées'",
            "Filtrer et trier les photos selon les taxonomies et custom fields",
            "Contrôler précisément quels contenus sont affichés sans surcharger la base de données",
          ],
        },
        {
          name: "Ajax & API WordPress",
          icon: "⚡",
          what: [
            "Charger de nouvelles photos sans rechargement de page (pagination infinie)",
            "Appliquer les filtres et le tri en temps réel depuis les selects dynamiques",
            "N'appeler l'API que lorsque c'est nécessaire, conformément aux principes Green IT",
          ],
        },
        {
          name: "jQuery",
          icon: "🟨",
          what: [
            "Préremplir automatiquement le champ REF. PHOTO dans la modale de contact",
            "Gérer l'apparition et la disparition fluide de la modale et de la lightbox",
            "Enrichir l'interface utilisateur avec des interactions légères et ciblées",
          ],
        },
        {
          name: "Contact Form 7",
          icon: "📬",
          what: [
            "Créer et gérer le formulaire de contact depuis le back-office WordPress",
            "Intégrer le formulaire dans la modale sans code serveur supplémentaire",
            "Permettre à Nathalie de modifier les champs du formulaire de manière autonome",
          ],
        },
        {
          name: "Green IT & optimisation images",
          icon: "🌱",
          what: [
            "Réduire le poids des images volumineuses pour diminuer la bande passante consommée",
            "Limiter les appels à l'API WordPress aux seules interactions utilisateur nécessaires",
            "Réduire l'empreinte carbone du site sans dégrader l'expérience visuelle",
          ],
        },
        {
          name: "GitHub & Git",
          icon: "🐙",
          what: [
            "Versionner le thème personnalisé à chaque étape clé du développement",
            "Permettre à Nathalie d'accéder au code source du thème via un lien de repository",
            "Garder un historique des modifications pour revenir en arrière en cas de problème",
          ],
        },
        {
          name: "WP Migrate Lite",
          icon: "📦",
          what: [
            "Exporter la base de données avec remplacement automatique des URLs locales par celles du site live",
            "Préparer une archive ZIP complète prête à déployer sur motaphoto.com",
            "Simplifier la remise du livrable final au client",
          ],
        },
      ],

      images: [
        "/images/hero-banner-mota.webp",
        "/images/filtres-lightbox-mota.webp",
        "/images/page-seule-mota.webp",
        "/images/photo-apparente-mota.webp",
        "/images/lightbox-mota.webp",
      ],
    },
  },

  {
    id: 3,
    slug: "debug-wordpress-medit",
    title: "Débogage WordPress — MedIT",
    subtitle: "WordPress · PHP · JavaScript · Elementor",
    description:
      "Débogage en urgence du site d'une PME médicale : restauration de l'accès, correction de 5 bugs critiques, rédaction d'un cahier de recette et documentation sur les tests unitaires et fonctionnels.",
    image: "/images/hero-banner-medit.webp",
    tags: ["WordPress", "PHP", "JavaScript", "Elementor", "CSS", "PHPMyAdmin"],
    github: "https://github.com/ByFrimouss/Med_it",
    live: null,
    featured: true,
    year: 2024,
    color: "#2277a7",

    details: {
      context:
        "Mission freelance en urgence pour MedIT, PME spécialisée dans les systèmes informatiques pour le secteur médical. Arthur, responsable marketing, a cassé le site en tentant d'intégrer une pop-up d'annonce pour un salon professionnel. Le site était inaccessible une semaine avant l'événement.",

      objectives: [
        "Cloner le site en local et restaurer l'accès au back-office",
        "Identifier et corriger les 5 bugs signalés par le client",
        "Rédiger un cahier de recette documentant chaque bug et sa correction",
        "Expliquer à Arthur les tests unitaires et fonctionnels dans un document Word",
      ],

      work: [
        "Import du ZIP du site et du dump SQL en local via PHPMyAdmin",
        "Configuration du wp-config.php et search/replace des URLs",
        "Activation du mode WP_DEBUG et lecture des logs d'erreurs",
        "Identification du fichier PHP responsable du crash du back-office",
        "Correction du bug bloquant l'éditeur Elementor (erreur requête Ajax)",
        "Correction du bug de fermeture de la modale (JavaScript)",
        "Correction du bug d'affichage du formulaire dans la modale",
        "Correction du lien Google Maps via var_dump de la variable PHP",
        "Correction du positionnement CSS du bouton Contact dans le menu",
        "Rédaction du cahier de recette avant/après pour chaque bug",
        "Rédaction d'un document Word sur les tests unitaires et fonctionnels",
      ],

      problems: [
        "Site complètement inaccessible — back-office et front-office en erreur fatale",
        "Éditeur Elementor bloqué en chargement infini (erreur Ajax silencieuse)",
        "Modale non fermable, piégeant les visiteurs sur la page",
        "Formulaire absent de la modale malgré son existence dans le code",
        "Lien Google Maps non fonctionnel à cause d'une variable PHP mal structurée",
        "Bouton Contact mal positionné dans le menu de navigation",
      ],

      solutions: [
        "Activation de WP_DEBUG et WP_DEBUG_LOG pour identifier l'erreur PHP fatale",
        "Analyse des logs Ajax via fichier de logs dédié pour le bug Elementor",
        "Correction du gestionnaire d'événement JS sur le bouton de fermeture",
        "Débogage du rendu du formulaire en inspectant la console navigateur",
        "Utilisation de var_dump pour inspecter la structure de la variable Maps",
        "Alignement CSS du bouton Contact en s'inspirant des autres items du menu",
      ],

      result:
        "Site entièrement remis en état avant le salon. Les 5 bugs sont corrigés et documentés dans le cahier de recette validé avec le client. Document livré à Arthur sur les tests unitaires et fonctionnels pour prévenir ce type de situation à l'avenir.",

      learnings: [
        "Méthodologie de débogage WordPress : WP_DEBUG, logs, console navigateur",
        "Différence entre erreurs PHP (logs serveur) et erreurs JS (console navigateur)",
        "Utilisation de var_dump pour inspecter les variables PHP en cours d'exécution",
        "Rédaction d'un cahier de recette structuré pour la communication client",
        "Compréhension des tests unitaires et fonctionnels et de leurs cas d'usage",
      ],

      advice:
        "Face à un bug, toujours commencer par identifier la source avant de corriger. Une erreur Ajax silencieuse ne s'affiche pas dans le navigateur : penser immédiatement aux fichiers de logs serveur.",

      tools: [
        {
          name: "WP_DEBUG & logs WordPress",
          icon: "🐛",
          what: [
            "Activer l'affichage des erreurs PHP cachées pour identifier le fichier source du crash",
            "Écrire les erreurs dans un fichier debug.log pour les erreurs silencieuses",
            "Tracer les requêtes Ajax bloquant Elementor sans message visible dans le navigateur",
          ],
        },
        {
          name: "PHPMyAdmin",
          icon: "🗄️",
          what: [
            "Importer le dump SQL du client pour reconstruire la base de données en local",
            "Inspecter directement les tables WordPress pour comprendre la structure des données",
            "Modifier des valeurs en base si nécessaire sans passer par le back-office inaccessible",
          ],
        },
        {
          name: "Console navigateur (DevTools)",
          icon: "🔍",
          what: [
            "Identifier les erreurs JavaScript causant le blocage de la modale",
            "Masquer la modale via la console pour débloquer la navigation sur le site",
            "Inspecter les requêtes réseau pour comprendre les échecs Ajax d'Elementor",
          ],
        },
        {
          name: "PHP (var_dump & debug)",
          icon: "🐘",
          what: [
            "Inspecter la structure réelle d'une variable avec var_dump pour corriger le lien Maps",
            "Comprendre pourquoi une variable ne contient pas la valeur attendue",
            "Corriger les erreurs fatales PHP identifiées dans les logs WP_DEBUG",
          ],
        },
        {
          name: "JavaScript / DOM",
          icon: "🟨",
          what: [
            "Corriger le gestionnaire d'événement sur le bouton de fermeture de la modale",
            "Déboguer l'affichage conditionnel du formulaire dans la modale",
            "S'assurer que les scripts JS sont bien chargés dans le bon ordre",
          ],
        },
        {
          name: "CSS & thème enfant",
          icon: "🎨",
          what: [
            "Corriger le positionnement du bouton Contact en s'alignant sur la structure du menu existant",
            "Utiliser l'inspecteur DevTools pour tester les règles CSS en live avant de les écrire",
          ],
        },
        {
          name: "Cahier de recette",
          icon: "📋",
          what: [
            "Documenter chaque bug avec son comportement constaté et son comportement attendu",
            "Servir de base de validation avec le client pour confirmer que chaque correction est conforme",
            "Tracer l'historique des corrections pour référence future en cas de régression",
          ],
        },
      ],

      images: [
        "/images/hero-banner-medit.webp",
        "/images/modale-medit.webp",
        "/images/maps-medit.webp",
      ],
    },
  },

  {
    id: 2,
    slug: "optimisation-wordpress-chic-dressing",
    title: "Optimisation WordPress — Chic Dressing",
    subtitle: "WordPress · SEOPress · Lighthouse",
    description:
      "Optimisation des performances, du SEO et de l'accessibilité d'un site WordPress de mode luxe seconde main.",
    image: "/images/hero-banner-chic-dressing.webp",
    tags: ["WordPress", "SEOPress", "Lighthouse", "PHP", "CSS"],
    github: null,
    live: null,
    featured: true,
    year: 2024,
    color: "#bc9c73",

    details: {
      context:
        "Mission freelance pour Sarah, fondatrice de Chic Dressing, une boutique en ligne de vêtements et accessoires de luxe de seconde main. Le site souffrait de lenteurs importantes, d'un SEO insuffisant et de problèmes d'accessibilité impactant le trafic et les conversions.",

      objectives: [
        "Améliorer le score de performance Google Lighthouse",
        "Optimiser le référencement naturel sur les mots-clés cibles",
        "Corriger les problèmes d'accessibilité détectés",
        "Livrer un site optimisé prêt à être remis en ligne",
      ],

      work: [
        "Import du site en local via All-in-One WP Migration",
        "Compression et conversion des images avec Imagify",
        "Minification JS/CSS et chargement différé avec Autoptimize",
        "Hébergement des Google Fonts en local dans le thème enfant",
        "Différé des scripts externes (Twitter, Maps) avec Flying Scripts",
        "Mise en cache serveur avec WP Super Cache",
        "Configuration SEO complète avec SEOPress",
        "Correction de la hiérarchie des titres et du contraste CSS",
        "Audit Lighthouse avant/après et livraison du rapport PDF",
      ],

      problems: [
        "Lenteurs importantes au chargement (images non optimisées, JS bloquants)",
        "SEO insuffisant : balises manquantes, pas de sitemap, mauvais permaliens",
        "Doubles H1 dans le template home",
        "Contraste texte/fond insuffisant, attributs alt manquants",
        "Dépendances externes ralentissant le rendu (Google Fonts, scripts tiers)",
      ],

      solutions: [
        "Compression et redimensionnement automatique des images via Imagify",
        "Minification et defer des ressources statiques avec Autoptimize",
        "Auto-hébergement des polices et defer des scripts tiers",
        "Cache serveur activé avec WP Super Cache",
        "Configuration complète de SEOPress (meta, sitemap, indexation)",
        "Correction des templates PHP du thème enfant (H1, contraste, alt)",
      ],

      result:
        "Site nettement plus rapide, mieux référencé et accessible. Score Lighthouse amélioré sur les 4 axes. Livraison d'une archive .wpress optimisée, d'un rapport PDF et d'un tableau Excel comparatif avant/après.",

      learnings: [
        "Maîtrise des outils d'optimisation WordPress (Imagify, Autoptimize, WP Super Cache)",
        "Configuration avancée de SEOPress pour un SEO technique solide",
        "Modification de thème enfant PHP pour corriger accessibilité et structure",
        "Méthodologie d'audit Lighthouse et communication des résultats au client",
      ],

      advice:
        "Toujours travailler sur une copie locale avant d'intervenir sur le site live. Mesurer avant d'optimiser : sans baseline Lighthouse, impossible de prouver la valeur du travail réalisé.",

      tools: [
        {
          name: "All-in-One WP Migration",
          icon: "📦",
          what: [
            "Exporter et importer le site complet en une archive .wpress",
            "Travailler en local sans risquer de casser le site live",
            "Livrer le site optimisé prêt à remettre en ligne",
          ],
        },
        {
          name: "Imagify",
          icon: "🖼️",
          what: [
            "Compresser automatiquement toutes les images du site",
            "Convertir les images en WebP pour un meilleur ratio qualité/poids",
            "Redimensionner les images surdimensionnées pour le web",
          ],
        },
        {
          name: "Autoptimize",
          icon: "⚡",
          what: [
            "Minifier les fichiers CSS et JavaScript pour réduire leur poids",
            "Différer le chargement des ressources non critiques",
            "Accélérer le rendu initial perçu par le visiteur",
          ],
        },
        {
          name: "Flying Scripts",
          icon: "✈️",
          what: [
            "Différer les scripts externes (Twitter, Google Maps) au premier clic",
            "Supprimer les requêtes bloquantes au chargement initial",
          ],
        },
        {
          name: "WP Super Cache",
          icon: "🗄️",
          what: [
            "Servir les pages en cache HTML sans passer par PHP/MySQL",
            "Réduire le TTFB (temps de réponse serveur)",
            "Absorber les pics de trafic sans ralentir le site",
          ],
        },
        {
          name: "SEOPress",
          icon: "🔍",
          what: [
            "Configurer les balises title et meta description sur chaque page",
            "Générer un sitemap XML soumis à Google Search Console",
            "Contrôler l'indexation des contenus, taxonomies et archives",
            "Optimiser les permaliens et l'arborescence des URLs",
          ],
        },
        {
          name: "Google Lighthouse",
          icon: "📊",
          what: [
            "Mesurer objectivement les performances avant et après optimisation",
            "Identifier les Core Web Vitals (LCP, CLS, FID) à corriger",
            "Auditer SEO technique et accessibilité automatiquement",
            "Produire un rapport PDF livrable comme preuve du travail réalisé",
          ],
        },
      ],

      images: [
        "/images/hero-banner-chic-dressing.webp",
        "/images/nouveautes-chic-dressing.webp",
        "/images/page-detail-chic-dressing.webp",
        "/images/ligthouse-avant.webp",
        "/images/ligthouse-apres.webp",
      ],
    },
  },

  {
    id: 1,
    slug: "animation-wordpress-koukaki",
    title: "Dynamisation WordPress — Studio Koukaki",
    subtitle: "WordPress · JavaScript · CSS · Sass · SwiperJS",
    description:
      "Dynamisation du site d'un studio d'animation nominé aux Oscars : vidéo hero, carrousel, parallaxe, menu burger et animations CSS avancées.",
    image: "/images/hero-banner-koukaki.webp",
    tags: [
      "WordPress",
      "JavaScript",
      "CSS",
      "Sass",
      "jQuery",
      "SwiperJS",
      "PHP",
    ],
    github: "https://github.com/ByFrimouss/Koukaki",
    live: null,
    featured: true,
    year: 2024,
    color: "#ff5d00",

    details: {
      context:
        "Mission en agence chez MyCustomiWP pour dynamiser le site du studio d'animation Koukaki, dont le dernier court-métrage a été nominé aux Oscars. L'objectif était d'enrichir la page d'accueil avec des animations interactives, une vidéo hero, un carrousel et des effets de parallaxe, en respectant strictement les bonnes pratiques WordPress.",

      objectives: [
        "Animer les sections de la page d'accueil avec des effets de fade in",
        "Intégrer une vidéo en arrière-plan du hero banner",
        "Créer un carrousel de personnages avec SwiperJS",
        "Mettre en place un effet de parallaxe sur les nuages",
        "Remplacer le menu original par un menu burger animé",
        "Respecter les bonnes pratiques WordPress (thème enfant, enqueue scripts)",
      ],

      work: [
        "Installation et configuration du site en local",
        "Fade in des sections au chargement avec CSS et JavaScript",
        "Rotation CSS en boucle des fleurs decoratives (keyframes)",
        "Apparition des titres au scroll via IntersectionObserver",
        "Ajout d'une section nomination Oscars dans un template partiel",
        "Intégration d'une vidéo hero en autoplay/loop avec fallback image",
        "Effet de flottement du titre hero et parallaxe titre/vidéo",
        "Carrousel CoverFlow avec SwiperJS dans un template partiel",
        "Effet de parallaxe sur les nuages de la section Lieu",
        "Menu burger avec animation d'ouverture, têtes flottantes et hover effects",
        "Vérification responsive mobile sur toutes les sections",
      ],

      problems: [
        "Coordination de plusieurs types d'animations (CSS, JS, jQuery) sans conflit",
        "Vidéo hero nécessitant un fallback image pour mobile et temps de chargement",
        "Choix de librairie parallaxe sans alourdir inutilement le site",
        "Menu burger avec effets multiples à synchroniser (rotation, flottement, hover)",
        "Intégration propre des scripts JS selon les bonnes pratiques WordPress",
      ],

      solutions: [
        "Séparation claire CSS/JS selon la nature de chaque animation",
        "Attributs autoplay, muted, loop sur la balise video avec image en fallback",
        "Parallaxe réalisée en JavaScript natif pour éviter une librairie superflue",
        "Découpage en keyframes multi-étapes pour le flottement des têtes de chats",
        "Enqueue systématique des scripts via functions.php du thème enfant",
      ],

      result:
        "Site Koukaki entièrement dynamisé avec des animations fluides et cohérentes sur toutes les sections. Rendu responsive validé. Thème enfant propre, bien structuré en Sass, livré compressé à la cheffe de projet.",

      learnings: [
        "Maîtrise des animations CSS avancées (keyframes, transitions, parallaxe)",
        "Utilisation de l'IntersectionObserver pour déclencher des animations au scroll",
        "Intégration et configuration de SwiperJS (effet CoverFlow)",
        "Bonnes pratiques WordPress : thème enfant, wp_enqueue_script, templates partiels",
        "Structuration du CSS avec Sass pour un code maintenable",
      ],

      advice:
        "Avant d'importer une librairie externe, toujours évaluer si JavaScript natif suffit. Chaque dépendance supplémentaire a un coût sur les performances — surtout sur un site client.",

      tools: [
        {
          name: "WordPress (thème enfant)",
          icon: "📝",
          what: [
            "Modifier le site sans toucher au thème parent, pour des mises à jour sécurisées",
            "Organiser les templates partiels (section Oscars, section personnages)",
            "Déclarer les scripts et styles via wp_enqueue dans functions.php",
          ],
        },
        {
          name: "CSS / Keyframes",
          icon: "🎨",
          what: [
            "Animer la rotation en boucle des fleurs décoratives",
            "Créer l'effet de flottement multi-directionnel des têtes de chats",
            "Gérer les transitions d'ouverture du menu burger",
          ],
        },
        {
          name: "Sass",
          icon: "🖌️",
          what: [
            "Structurer le CSS en fichiers partiels pour chaque composant",
            "Utiliser les variables et mixins pour garder un code cohérent",
            "Maintenir un style facile à faire évoluer sur le long terme",
          ],
        },
        {
          name: "JavaScript / jQuery",
          icon: "🟨",
          what: [
            "Déclencher le fade in des sections au chargement de la page",
            "Animer l'apparition des titres au scroll avec IntersectionObserver",
            "Créer l'effet de parallaxe entre le titre hero et la vidéo",
            "Gérer l'ouverture et la fermeture du menu burger",
          ],
        },
        {
          name: "SwiperJS",
          icon: "🎠",
          what: [
            "Créer un carrousel CoverFlow interactif pour les personnages",
            "Gérer la navigation tactile et les transitions entre les slides",
            "Personnaliser l'apparence via les options de configuration SwiperJS",
          ],
        },
        {
          name: "Vidéo HTML5",
          icon: "🎬",
          what: [
            "Intégrer une vidéo en arrière-plan du hero en autoplay et loop",
            "Masquer les contrôles natifs du player pour un rendu immersif",
            "Fournir une image fallback pour le chargement et la version mobile",
          ],
        },
      ],

      images: [
        "/images/hero-banner-koukaki.webp",
        "/images/personnages-koukaki.webp",
        "/images/animation-menu.webp",
        "/images/Koukaki.webp",
      ],
    },
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
