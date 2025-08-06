import FooterLogo from "/FooterLOGO.png";
import "../styledoss/cssFooter.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={FooterLogo} alt="Kasa Footer Logo" />
      </div>
      <div>
        <p>© 2020 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
