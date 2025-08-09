import Logements from "../../logements.json";
import { useParams } from "react-router-dom";
import "../styledoss/Lodging.scss";
import Description from "../components/Description.jsx";
import React from "react";
import Equipments from "../components/Equipments.jsx";

function Lodging() {
  const { logementId } = useParams();
  const logement = Logements.find((l) => l.id === logementId);
  const lodgeRate = Number(logement.rating);
  const maxRate = 5;
  const [isDescriptionOpen, setIsDescriptionOpen] = React.useState(false);
  const toggleDescriptionDropDown = () => setIsDescriptionOpen((prev) => !prev);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = React.useState(false);
  const toggleEquipmentsDropDown = () => setIsEquipmentsOpen((prev) => !prev);

  if (!logement) {
    return <p>Pas trouvé</p>;
  }

  return (
    <>
      <div className="lodging-page">
        <div className="lodging-pic-arrow">
          <div className="prev-arrow">⬅️</div>
          {logement.pictures.map((picture, index) => (
            <img src={picture} key={index} />
          ))}
          {/*<div className="pic-number">{index + "/" + index.length - 1}</div> 
          car index pas encore définie et pas encore mis en place la séléction
          de l'image correspondante à l'index*/}
          <div className="next-arrow">➡️</div>
        </div>
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
            <div className="description">
              <button
                className="desc-button"
                onClick={toggleDescriptionDropDown}
                aria-expanded={isDescriptionOpen}
              >
                Description
                <img
                  src="/Dropdvector.png"
                  alt="Vector for dropdown"
                  className="openindicator"
                  style={{
                    transition: "transform 0.3s ease",
                    transform: isDescriptionOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>
              {isDescriptionOpen && (
                <div className="description-text">
                  <Description />
                </div>
              )}
            </div>
            <div className="equipments">
              <button
                className="equip-button"
                onClick={toggleEquipmentsDropDown}
                aria-expanded={isEquipmentsOpen}
              >
                Équipements
                <img
                  src="/Dropdvector.png"
                  alt="Vector for dropdown"
                  className="openindicator"
                  style={{
                    transition: "transform 0.3s ease",
                    transform: isEquipmentsOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>
              {isEquipmentsOpen && (
                <div className="equipments-text">
                  <Equipments />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lodging;
