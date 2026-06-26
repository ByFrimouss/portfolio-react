// ============================================================
// Home.jsx
//
// FIX SWIPER NAVIGATION :
// Le problème était que les div custom (swiper-button-next-custom,
// swiper-button-prev-custom, swiper-pagination-custom) étaient
// EN DEHORS du composant <Swiper>. Swiper cherche ses éléments
// de navigation dans le DOM RELATIF au swiper container.
//
// SOLUTION : useRef() sur le swiper + navigation via les refs
// directement plutôt que des sélecteurs CSS string.
// ============================================================

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import HeroSlider from "../components/HeroSlider";
import ParallaxSection, {
  ParallaxText,
  ParallaxImage,
} from "../components/ParallaxSection";
import { getFeaturedProjects } from "../data/projects";
import "./Home.scss";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  // Ref sur l'instance Swiper (pas sur le composant React)
  const swiperRef = useRef(null);
  // Refs sur les boutons DOM
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // useEffect : s'exécute APRÈS le render, les boutons existent dans le DOM.
  // On rebranche la navigation sur l'instance Swiper avec les vrais éléments.
  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;

    // Assigne les éléments DOM réels
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    // Réinitialise la navigation avec les nouveaux éléments
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, []); // [] = une seule fois après le premier render

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: "relative" }}
    >
      {/* 1. HERO */}
      <HeroSlider />

      {/* 2. BANDE DÉFILANTE */}
      <ParallaxText speed={1}>
        React · SCSS · Framer Motion · Node.js · MongoDB · Vite · Redux · Axios
        · Git ·
      </ParallaxText>

      {/* 3. PROJETS SWIPER */}
      <section className="home-projects section">
        <div className="home-projects__full">
          <motion.div
            className="section-header container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">// Portfolio</span>
            <h2 className="section-title">Projets sélectionnés</h2>
          </motion.div>

          {/* Wrapper relatif pour positionner les flèches */}
          <div className="home-projects__layout">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1.2}
              centeredSlides={true}
              grabCursor={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 12,
                stretch: 0,
                depth: 120,
                modifier: 1,
                slideShadows: true,
              }}
              // onSwiper : stocke l'instance Swiper dans la ref.
              // Le useEffect s'en sert pour brancher les boutons APRÈS le render.
              loop={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              navigation={{
                // Valeurs vides : Swiper n'affiche PAS ses flèches natives.
                // Le useEffect branchera nos boutons custom après le render.
                prevEl: null,
                nextEl: null,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="projects-swiper"
            >
              {featuredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-slide"
                  >
                    {/* Image du projet */}
                    <div className="project-slide__img-wrapper">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="slide-image"
                        />
                      ) : (
                        // Placeholder si pas d'image
                        <div className="project-slide__placeholder">
                          <span>{project.title[0]}</span>
                        </div>
                      )}
                    </div>

                    {/* Overlay texte */}
                    <div className="slide-overlay">
                      <div className="slide-overlay__tags">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="slide-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="slide-title">{project.title}</h3>
                      <p className="slide-desc">{project.description}</p>
                      <span className="slide-cta">Voir le projet →</span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={prevRef}
              className="swiper-btn swiper-btn--prev"
              aria-label="Projet précédent"
            >
              ‹
            </button>
            <button
              ref={nextRef}
              className="swiper-btn swiper-btn--next"
              aria-label="Projet suivant"
            >
              ›
            </button>
          </div>
          {/* fin home-projects__layout */}

          <motion.div
            className="home-projects__cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/projects" className="btn btn--ghost">
              Voir tous les projets →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. À PROPOS */}
      <ParallaxSection speed={0.2} className="home-about section">
        <div className="container home-about__inner">
          <div className="home-about__text">
            <motion.span
              className="section-label"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              // À propos
            </motion.span>

            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Passionnée par le web depuis toujours
            </motion.h2>

            <motion.p
              className="home-about__desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Développeuse web basée à La Réunion, je crée des interfaces
              modernes avec une attention particulière aux détails, aux
              animations et aux performances.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <Link to="/about" className="btn btn--primary">
                En savoir plus →
              </Link>
            </motion.div>
          </div>

          <div className="home-about__image">
            <ParallaxImage
              src="/images/profil.webp"
              alt="Stéphanie COUPAMA"
              speed={0.3}
            />
          </div>
        </div>
      </ParallaxSection>

      {/* 5. CTA CONTACT */}
      <section className="home-contact section">
        <div className="container">
          <motion.div
            className="home-contact__card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">// Contact</span>
            <h2 className="home-contact__title">Un projet en tête ?</h2>
            <p className="home-contact__desc">
              Disponible pour des missions freelance et des collaborations.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Discutons-en →
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
