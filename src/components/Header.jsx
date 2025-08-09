import Logo from "/LOGO.png";
import "../styledoss/Header.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleHomepageClick() {
    navigate("/");
  }

  function handleAproposClick() {
    navigate("/a-propos");
  }

  return (
    <header>
      <img src={Logo} alt="Kasa Logo" />
      <div className="nav-header">
        <ul>
          <li role="button" onClick={handleHomepageClick}>
            Accueil
          </li>
          <li role="button" onClick={handleAproposClick}>
            A Propos
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
