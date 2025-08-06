import WelcomePic from "/welcomepic.png";
import "../styledoss/cssAccueil.scss";

function Accueil() {
  return (
    <div className="welcome-Pic-Text">
      <img src={WelcomePic} alt="Accueil" />
      <div className="opacifier">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Accueil;
