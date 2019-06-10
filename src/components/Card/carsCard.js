import React from "react";
import "./carsCardStyle.css";

function CarsCard(props) {
  return (
    
    <div className="card" onClick={() => props.onClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong> {props.name}</strong>
          </li>
        </ul>
      </div>
    </div>
 
  );
};

export default CarsCard;
