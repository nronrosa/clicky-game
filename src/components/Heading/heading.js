import React from "react";
// import "./style.css";
import "./headingStyle.css";

const Heading = () => (
  <div class="jumbotron">
    <div className="Container">
      <h1 class="display-4">Sports Car Click Game</h1>
      <p class="lead"> Click on an image to earn point, but don't click on any more than
          once!</p>
      <hr class="my-4"></hr>
      {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
    </div>
  </div>
  );
  
export default Heading;