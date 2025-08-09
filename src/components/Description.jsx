import Logements from "../../logements.json";
import { useParams } from "react-router-dom";
import "../styledoss/Description.scss";

function Description() {
  const { logementId } = useParams();
  const logement = Logements.find((l) => l.id === logementId);
  return <div className="desc-content">{logement.description}</div>;
}

export default Description;
