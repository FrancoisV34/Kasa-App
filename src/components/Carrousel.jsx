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
    <div
      className="lodging-pic-arrow"
      style={{
        backgroundImage: `url(${logement.pictures[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="prev-arrow"
        role="button"
        onClick={prevImage}
        aria-label="Image suivante"
      >
        {logement.pictures.length === 1 ? null : "\u2039"}
      </div>
      <div className="carrousel-counter">
        {logement.pictures.length === 1
          ? null
          : `${index + 1} / ${logement.pictures.length}`}
      </div>
      <div
        className="next-arrow"
        role="button"
        onClick={nextImage}
        aria-label="Image suivante"
      >
        {logement.pictures.length === 1 ? null : `\u203A`}
      </div>
    </div>
  );
}

export default Carrousel;
