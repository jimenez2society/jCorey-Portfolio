import React from "react";
import { slogan } from "../../../assets/svg/svg";
import "./CTA.css";
function CTA() {
  return (
    <div className="CTA container-sm">
      {slogan}
      <div className="CTA-btns">
        <button>Get in touch</button>
        <button>Interview Me</button>
      </div>
    </div>
  );
}

export default CTA;
