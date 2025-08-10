import "../styledoss/About.scss";
import React from "react";

function AboutDropdown({ title, description }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="dropdown-text">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {title}
        <img
          src="/Dropdvector.png"
          alt="dropdown vector"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3sec ease",
            height: "14px",
            width: "24px",
            alignSelf: "center",
          }}
        ></img>
      </button>
      {isOpen && <div>{description}</div>}
    </div>
  );
}
export default AboutDropdown;
