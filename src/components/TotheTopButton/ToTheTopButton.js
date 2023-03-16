import React from "react";
import { right } from "../../assets/svg/svg";
import "./ToTheTopButton.css";
function ToTheTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div onClick={handleScrollToTop} className="ToTheTopButton">
      <div className="arrow">{right}</div>
    </div>
  );
}

export default ToTheTopButton;
