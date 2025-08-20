import WelcomePic from "/welcomepic.png";
import "../styledoss/Welcome.scss";
import Gallery from "../components/Gallery.jsx";
import Banner from "../components/Banner.jsx";
import Opacifier from "../components/Opacifier.jsx";

function Welcome() {
  return (
    <div className="main-content">
      <Banner
        image={WelcomePic}
        alt="image d'accueil"
        opacifier={<Opacifier title="Chez vous, partout et ailleurs" />}
      />
      <div className="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default Welcome;
