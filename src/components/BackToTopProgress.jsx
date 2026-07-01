import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SIZE = 80;
const STROKE = 3;

const hexPoints = (cx, cy, r) => {
  const angles = [90, 30, 330, 270, 210, 150];
  return angles.map((angle) => {
    const rad = (Math.PI / 180) * angle;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  });
};

const CENTER = SIZE / 2;
const HEX_RADIUS = CENTER - STROKE * 2;
const points = hexPoints(CENTER, CENTER, HEX_RADIUS);

const hexPerimeter = () => {
  let total = 0;
  for (let i = 0; i < points.length; i++) {
    const next = points[(i + 1) % points.length];
    const dx = next[0] - points[i][0];
    const dy = next[1] - points[i][1];
    total += Math.sqrt(dx * dx + dy * dy);
  }
  return total;
};

const PERIMETER = hexPerimeter();
const pointsToString = (pts) => pts.map((p) => p.join(",")).join(" ");

export default function BackToTopProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  // Position verticale du bouton qui suit le scroll
  const [buttonY, setButtonY] = useState(0);
  // Opacité qui diminue quand on remonte
  const [buttonOpacity, setButtonOpacity] = useState(1);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = height > 0 ? (scrollTop / height) * 100 : 0;

      setProgress(percent);
      setVisible(percent > 10);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const offset = PERIMETER - (progress / 100) * PERIMETER;

  const scrollToTop = () => {
    // Lance le scroll smooth
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Surveille le scroll pendant la remontée
    const trackScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = height > 0 ? (scrollTop / height) * 100 : 0;

      // Le bouton suit la page — monte avec elle
      const traveled = (100 - percent) / 100;
      setButtonY(-traveled * window.innerHeight * 0.4);

      // Disparaît progressivement à partir de 60% de remontée
      if (percent < 40) {
        setButtonOpacity(percent / 40);
      } else {
        setButtonOpacity(1);
      }

      // Arrête le tracking quand on est en haut
      if (scrollTop <= 0) {
        setButtonY(0);
        setButtonOpacity(1);
        window.removeEventListener("scroll", trackScroll);
      }
    };

    window.addEventListener("scroll", trackScroll);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="back-to-top-wrapper"
          style={{
            y: buttonY,
            opacity: buttonOpacity,
          }}
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={{ opacity: buttonOpacity, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Traîne */}
          <motion.div
            className="back-to-top__trail"
            style={{
              opacity: buttonY < -20 ? Math.abs(buttonY) / 200 : 0,
              scaleY: buttonY < -20 ? Math.abs(buttonY) / 150 : 0,
            }}
          />

          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="Retour en haut"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              width={SIZE}
              height={SIZE}
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="back-to-top__svg"
            >
              <defs>
                <linearGradient
                  id="hexGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4d82ff" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ff4d9e" />
                </linearGradient>
                <filter
                  id="hexNeon"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <polygon
                className="back-to-top__bg"
                points={pointsToString(points)}
              />
              <polygon
                className="back-to-top__progress"
                points={pointsToString(points)}
                strokeDasharray={PERIMETER}
                strokeDashoffset={offset}
                filter="url(#hexNeon)"
              />
            </svg>

            <AnimatePresence mode="wait">
              {hovered ? (
                <motion.span
                  key="text"
                  className="back-to-top__text"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  TOP
                </motion.span>
              ) : (
                <motion.span
                  key="arrow"
                  className="back-to-top__icon"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  ↑
                </motion.span>
              )}
            </AnimatePresence>

            <motion.span
              className="back-to-top__percent"
              animate={{ opacity: hovered ? 1 : 0.4 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
