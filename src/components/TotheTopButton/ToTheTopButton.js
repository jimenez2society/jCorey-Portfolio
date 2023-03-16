import React from "react";
import { right } from "../../assets/svg/svg";
import "./ToTheTopButton.css";
function ToTheTopButton() {
  return (
    <div className="ToTheTopButton">
      <div className="arrow">{right}</div>
    </div>
  );
}

export default ToTheTopButton;
