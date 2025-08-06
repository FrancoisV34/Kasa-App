import Logements from "../../logements.json";
import { useParams } from "react-router-dom";

function Lodging() {
  const { logementId } = useParams();
  const logement = Logements.find((l) => l.id === logementId);

  if (!logement) {
    return <p>Pas trouvé</p>;
  }

  return (
    <>
      <div className="lodging-page">
        <div className="lodging-pic-arrow">
          {logement.pictures.map((picture, index) => (
            <img src={picture} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Lodging;
