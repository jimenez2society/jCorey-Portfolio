import React from "react";
import "./HeaderContent.css";
function HeaderContent() {
  return (
    <div className="HeaderContent container-sm">
      <div className="HeaderContentContainer">
        {/* name of creator/owner */}
        <h1 className="first-name">Corey</h1>
        <span className="last-name">Jimenez</span>
        {/* details about create/owner */}
        <p className="HeaderContentContainer-paragraph">
          Hello, my name is Corey Jimenez. I am a full-stack software engineer.
          Welcome to my personal portfolio.
        </p>
      </div>
      {/* a div made to look like a mouse scrolling, has animation */}
      <div className="mouse">
        <div className="mouse-scroll"></div>
      </div>
    </div>
  );
}

export default HeaderContent;
