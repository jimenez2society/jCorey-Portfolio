import React from "react";
import "./AboutMeItem.css";
function AboutMeItem({ title, children, right, left }) {
  return (
    // if right prop then set the "right" class
    // if left prop then set the "left" class
    <aside className={`AboutMeItem ${right && "right"} ${left && "left"}`}>
      {/* sets the tile of the AboutMeItem with title prop */}
      <p className="section__title">{title}</p>
      {/* children content goes here */}
      <p className="AboutMeItem__content">{children}</p>
    </aside>
  );
}

export default AboutMeItem;
