import React from "react";
import "./headingStyle.css";

const Heading = () => (
  <div className="jumbotron">
      <h1 className="display-4"><strong>Sports Car Click Game</strong></h1>
      <hr className="my-4" />
      <h2 >
        Click on an image to earn point, but don't click on the same image more than once!
      </h2>
  </div>
);

export default Heading;
