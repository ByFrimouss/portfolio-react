import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./BackToTopProgress.scss";

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

  for (let i = 0; i < points.length; i += 1) {
    const next = points[(i + 1) % points.length];
    const dx = next[0] - points[i][0];
    const dy = next[1] - points[i][1];

    total += Math.sqrt(dx * dx + dy * dy);
  }

  return total;
};

const PERIMETER = hexPerimeter();
const pointsToString = (pts) => pts.map((point) => point.join(",")).join(" ");

export default function BackToTopProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [buttonY, setButtonY] = useState(0);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  useEffect(() => {
    let animationFrame = null;

    const updateScroll = () => {
      animationFrame = null;

      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = height > 0 ? (scrollTop / height) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, percent)));
      setVisible(percent > 10);
    };

    const handleScroll = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const offset = PERIMETER - (progress / 100) * PERIMETER;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const trackScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = height > 0 ? (scrollTop / height) * 100 : 0;
      const travelled = (100 - percent) / 100;

      setButtonY(-travelled * window.innerHeight * 0.4);
      setButtonOpacity(percent < 40 ? percent / 40 : 1);

      if (scrollTop <= 1) {
        setButtonY(0);
        setButtonOpacity(1);
        window.removeEventListener("scroll", trackScroll);
      }
    };

    window.addEventListener("scroll", trackScroll, { passive: true });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="back-to-top-wrapper"
          style={{ y: buttonY, opacity: buttonOpacity }}
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={{ opacity: buttonOpacity, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="back-to-top__trail"
            aria-hidden="true"
            style={{
              opacity: buttonY < -20 ? Math.min(1, Math.abs(buttonY) / 200) : 0,
              scaleY:
                buttonY < -20 ? Math.min(1.8, Math.abs(buttonY) / 150) : 0,
            }}
          />

          <motion.button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            aria-label={`Retour en haut — progression ${Math.round(progress)} %`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              width={SIZE}
              height={SIZE}
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="back-to-top__svg"
              aria-hidden="true"
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

            <AnimatePresence mode="wait" initial={false}>
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
                  aria-hidden="true"
                >
                  ↑
                </motion.span>
              )}
            </AnimatePresence>

            <motion.span
              className="back-to-top__percent"
              animate={{ opacity: hovered ? 1 : 0.4 }}
              aria-hidden="true"
            >
              {Math.round(progress)}%
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
