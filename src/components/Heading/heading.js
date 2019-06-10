import React from "react";
// import "./style.css";
import "./headingStyle.css";

function Heading(props) {
  return <h1 className="heading">{props.children}</h1>;
};

export default Heading;
