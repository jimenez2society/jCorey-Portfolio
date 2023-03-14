import React from "react";
import "./AboutMeItem.css";
function AboutMeItem({ title, children, right, left }) {
  return (
    // IF THERE IS A right PROP THEN GIVE IT A right CLASS
    // IF THERE IS A left PROP THEN GIVE IT A left CLASS
    <aside className={`AboutMeItem ${right && "right"} ${left && "left"}`}>
      {/* USE title PROP FOR section__title PARAGRAPH */}
      <p className="section__title">{title}</p>
      {/* ALL OTHER CONTENT/CHILDREN SHOULD BE DISPAYED HERE IN  AboutMeItem__content */}
      <p className="AboutMeItem__content">{children}</p>
    </aside>
  );
}

export default AboutMeItem;
