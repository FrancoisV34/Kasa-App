import Logements from "../../logements.json";
import { useParams } from "react-router-dom";

function Description() {
  const { logementId } = useParams();
  const logement = Logements.find((l) => l.id === logementId);
  return <p>{logement.description}</p>;
}

export default Description;
