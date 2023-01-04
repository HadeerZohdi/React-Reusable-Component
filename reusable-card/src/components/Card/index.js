import React from "react";
import "./style.css";

const Card = ({ title, description, image, isProduct, price }) => {
  return (
    <React.Fragment>
      <div className="card">
        <img className="full-image" src={image} alt="cardimage" />
        <div className="card-details">
          <h3>{title}</h3>
          <p>{description}</p>
          {isProduct && <p>price is {price}</p>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
