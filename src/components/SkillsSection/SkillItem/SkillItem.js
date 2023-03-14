import React from "react";
import "./SkillItem.css";
function SkillItem({ title }) {
  return (
    <div className="SkillItem">
      <p>{title}</p>
    </div>
  );
}

export default SkillItem;
