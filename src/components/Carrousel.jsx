import "../styledoss/Carrousel.scss";
import Logements from "../../logements.json";
import { useParams } from "react-router-dom";
import React from "react";

function Carrousel() {
  const { logementId } = useParams();
  const logement = Logements.find((l) => l.id === logementId);

  const [index, setIndex] = React.useState(0);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? logement.pictures.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === logement.pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lodging-pic-arrow">
      <div className="prev-arrow">
        <img
          role="button"
          onClick={prevImage}
          aria-label="Image précédente"
          src="/Dropdvector.png"
          alt="Vector for previous into carrousel"
          className="prev-image"
          style={{
            transform: "rotate(270deg)",
            objectFit: "cover",
            width: "5%",
            height: "20%",
            borderRadius: "none",
          }}
        />
      </div>
      <img
        src={logement.pictures[index]}
        alt={"Image n° + ${index +1}"}
        className="carrousel-img"
      />
      <div className="carrousel-counter">
        {index + 1} / {logement.pictures.length}
      </div>
      <div className="next-arrow">
        <img
          role="button"
          onClick={nextImage}
          aria-label="Image suivante"
          src="/Dropdvector.png"
          alt="Vector for previous into carrousel"
          className="next-image"
          style={{
            transform: "rotate(90deg)",
            objectFit: "cover",
            width: "5%",
            height: "20%",
            borderRadius: "none",
          }}
        />
      </div>
    </div>
  );
}

export default Carrousel;
