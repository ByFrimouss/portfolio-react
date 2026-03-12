import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import "./Navbar.scss";

function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="logo">Stéphanie</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
