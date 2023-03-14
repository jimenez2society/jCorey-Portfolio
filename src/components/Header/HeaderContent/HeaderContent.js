import React from "react";
import "./HeaderContent.css";
function HeaderContent() {
  return (
    <div className="HeaderContent container-sm">
      <div className="HeaderContentContainer">
        <h1 className="first-name">Corey</h1>
        <span className="last-name">Jimenez</span>
        <p className="HeaderContentContainer-paragraph">
          Hello, my name is Corey Jimenez. I am a full-stack software engineer.
          Welcome to my personal portfolio.
        </p>
      </div>
      <div className="mouse">
        <div className="mouse-scroll"></div>
      </div>
    </div>
  );
}

export default HeaderContent;
