import React from "react";
import "./main.css";
import HeaderImageDesktop from "../images/desktop/image-interactive.jpg";

const MiddleSection = () => {
  return (
    <section id="middleSection">
      <div className="container">
        <div className="wrapper">
            <div className="image">
              <img src={HeaderImageDesktop} alt="images" />
            </div>
          <div className="textContent">
              <p className="title">The leader in interactive VR</p>
              <p className="titleDescription">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
