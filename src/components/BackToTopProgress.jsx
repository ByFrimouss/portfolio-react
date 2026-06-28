import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SIZE = 64;
const STROKE = 4;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BackToTopProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;

      const height = document.documentElement.scrollHeight - window.innerHeight;

      const percent = height > 0 ? (scrollTop / height) * 100 : 0;

      setProgress(percent);

      setVisible(percent > 50);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Retour en haut"
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 30,
          }}
          whileHover={{
            scale: 1.08,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
            {/* cercle de fond */}
            <circle
              className="back-to-top__bg"
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
            />

            {/* progression */}
            <circle
              className="back-to-top__progress"
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
            />
          </svg>

          <span className="back-to-top__icon">⇧</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
