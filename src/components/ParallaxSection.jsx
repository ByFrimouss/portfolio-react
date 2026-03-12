import { useEffect, useRef } from "react";
import "./ParallaxSection.scss";

function ParallaxSection({ background, children }) {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (ref.current) {
        ref.current.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="parallax"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </section>
  );
}

export default ParallaxSection;
