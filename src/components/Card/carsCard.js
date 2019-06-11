import React from "react";
import "./carsCardStyle.css";

function CarsCard(props) {
  return (
    <div className="card" onClick={() => props.onClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} className="card-img-top" />
      </div>
      <div className="card-body">
        <p>
          <strong>{props.name}</strong>
        </p>
      </div>
    </div>
  );
}

export default CarsCard;
