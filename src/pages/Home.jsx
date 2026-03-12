import { useEffect } from "react";
import "./Home.scss";

function Home() {
  useEffect(() => {
    const letters = document.querySelectorAll(".glitch span");
    letters.forEach((letter, i) => {
      letter.style.animationDelay = `${i * 0.05}s`;
    });
  }, []);

  return (
    <section className="home">
      <h1 className="glitch">
        {"Stéphanie".split("").map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </h1>
      <h2 className="subtitle">Frontend Developer React</h2>
    </section>
  );
}

export default Home;
