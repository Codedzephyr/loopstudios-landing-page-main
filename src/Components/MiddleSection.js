import React from "react";
import "./main.css";
import HeaderImageDesktop from "../images/desktop/image-interactive.jpg";
import HeaderImageMobile from "../images/mobile/image-interactive.jpg";

const MiddleSection = () => {
  return (
    <div className="MiddleSection">
      <div className="OverallContainer">
        <div className="containerForImage">
          <div className="background-image">
            <div className="image-container">
              <img className="mobile" src={HeaderImageMobile} alt="images" />
              <img className="desktop" src={HeaderImageDesktop} alt="images" />
            </div>
          </div>
          <div className="TextContentContainer">
            <div className="textContainer">
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
      </div>
    </div>
  );
};

export default MiddleSection;
