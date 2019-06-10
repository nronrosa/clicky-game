import React from "react";
// import "./style.css";
import "./wrapperStyle.css";
  
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
};

export default Wrapper;