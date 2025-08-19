import Logo from "/LOGO.png";
import "../styledoss/Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Kasa Logo" />
      <div className="nav-header">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/a-propos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
