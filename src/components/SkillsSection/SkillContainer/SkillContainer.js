import React from "react";
import "./SkillContainer.css";
function SkillContainer({ children }) {
  return (
    <div className="SkillContainer container-lg">{children}</div>
  );
}

export default SkillContainer;
