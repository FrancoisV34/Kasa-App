import Logements from "../../logements.json";
import "../styledoss/Gallery.scss";

export default function Gallery() {
  return (
    <div className="gallery-content">
      {Logements.map((logement) => (
        <card className="cards-gallery">
          <img key={logement.id} src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>
        </card>
      ))}
    </div>
  );
}
