import Logements from "../../logements.json";
import { useParams } from "react-router-dom";
import "../styledoss/Equipments.scss";

function Equipments() {
  const { logementId } = useParams();
  const logement = Logements.find((l) => l.id === logementId);

  return (
    <div className="equip-content">
      <ul>
        {logement.equipments.map((equipement, index) => (
          <li key={index} className="equip-list">
            {equipement}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Equipments;
