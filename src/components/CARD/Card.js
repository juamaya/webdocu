import React from "react";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} width={100} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-description">{description}</h3>
        <a
          href={link}
          className="card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar
        </a>
      </div>
    </div>
  );
};

export default Card;
