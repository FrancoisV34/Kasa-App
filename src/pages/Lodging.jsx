import Logements from "../../logements.json";
import { useParams } from "react-router-dom";
import "../styledoss/Lodging.scss";

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
            {logement.tags.map((tag, index) => (
              <div className="tags" key={index}>
                <span className="tag">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lodging;
