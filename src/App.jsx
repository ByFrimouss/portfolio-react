// ============================================================
// App.jsx
// ============================================================

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/themeSlice";
import Router from "./router/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "./styles/main.scss";

function App() {
  const theme = useSelector(selectTheme);

  // Applique data-theme sur <html> → le CSS réagit
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    // .app-root : position relative obligatoire pour Framer Motion useScroll
    <div className="app-root">
      {/* Canvas plein écran fixe — pointerEvents:none, ne bloque rien */}
      <CursorTrail />

      {/* Remet le scroll en haut à chaque changement de page */}
      <ScrollToTop />
      <Navbar />

      {/* .app-main : flex:1 pour pousser le footer en bas */}
      <main className="app-main">
        <Router />
      </main>

      <Footer />
    </div>
  );
}

export default App;
