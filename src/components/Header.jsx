import Logo from "/LOGO.png";
import "../styledoss/cssHeader.scss";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Kasa Logo" />
      <div className="nav-header">
        <ul>
          <li>Accueil</li>
          <li>A Propos</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
