import Logements from "../../logements.json";
import { useParams } from "react-router-dom";
import "../styledoss/Lodging.scss";
import Description from "../components/Description.jsx";
import React from "react";
import Equipments from "../components/Equipments.jsx";
import Carrousel from "../components/Carrousel.jsx";
import Error from "./Error.jsx";
import AboutDropdown from "../components/AboutDropdown.jsx";

function Lodging() {
  const { logementId } = useParams();
  const logement = Logements.find((l) => l.id === logementId);

  if (!logement) {
    return <Error />;
  }

  const lodgeRate = Number(logement.rating);
  const maxRate = 5;
  const [isDescriptionOpen, setIsDescriptionOpen] = React.useState(false);
  const toggleDescriptionDropDown = () => setIsDescriptionOpen((prev) => !prev);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = React.useState(false);
  const toggleEquipmentsDropDown = () => setIsEquipmentsOpen((prev) => !prev);

  return (
    <>
      <div className="lodging-page">
        <Carrousel />
        <div className="lodging-info">
          <div className="title-hostName-pic">
            <div className="title-loc">
              <h2 className="title">{logement.title}</h2>
              <span className="loc">{logement.location}</span>
            </div>
            <div className="name-pic">
              <span className="hostName">{logement.host.name}</span>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="hostPic"
              />
            </div>
          </div>
          <div className="tag-and-rate">
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="rate-stars">
              {Array.from({ length: maxRate }).map((_, index) => {
                const Filled = index < lodgeRate;

                return (
                  <span
                    key={index}
                    className={Filled ? "pink-star star" : "grey-star star"}
                  >
                    &#x2605;
                  </span>
                );
              })}
            </div>
          </div>
          <div className="drop-down">
            <AboutDropdown title="Description" description={<Description />} />
            <AboutDropdown title="Équipements" description={<Equipments />} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lodging;
