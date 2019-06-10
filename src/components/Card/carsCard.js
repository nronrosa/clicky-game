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
          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
};

export default CarsCard;
