import React from "react";
import "./AvailabilityType.css";
function AvailabilityType({ title, active }) {
  return (
    <div
      className={`AvailabilityType ${active && "active"} ${
        !active && "disabled"
      }`}
    >
      <p>{title}</p>
    </div>
  );
}

export default AvailabilityType;
