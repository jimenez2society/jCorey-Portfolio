import React from "react";
import "./AvailabilityOptions.css";
function AvailabilityOptions({ children }) {
  // render a container for the availability status'
  return <div className="AvailabilityOptions">{children}</div>;
}

export default AvailabilityOptions;
