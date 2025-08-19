import WelcomePic from "/welcomepic.png";
import "../styledoss/Welcome.scss";
import Gallery from "../components/Gallery.jsx";
import Banner from "../components/Banner.jsx";

function Welcome() {
  return (
    <div className="main-content">
      <Banner>
        <img src={WelcomePic} alt="Accueil" />
        <div className="opacifier">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </Banner>
      <div className="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default Welcome;
