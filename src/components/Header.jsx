import Logo from "/LOGO.png";
import "../styledoss/Header.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleHomepageClick() {
    navigate("/");
  }

  return (
    <header>
      <img src={Logo} alt="Kasa Logo" />
      <div className="nav-header">
        <ul>
          <li role="button" onClick={handleHomepageClick}>
            Accueil
          </li>
          <li>A Propos</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
