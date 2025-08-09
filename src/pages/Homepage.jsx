import WelcomePic from "/welcomepic.png";
import "../styledoss/Welcome.scss";
import Gallery from "../components/Gallery.jsx";

function Welcome() {
  return (
    <div className="main-content">
      <div className="welcome-Pic-Text">
        <img src={WelcomePic} alt="Accueil" />
        <div className="opacifier">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <div className="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default Welcome;
