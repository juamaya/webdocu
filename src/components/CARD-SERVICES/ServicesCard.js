import React from "react";

const ServicesCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="content">
        <img src={image} alt="Imagen" className="image" />
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
