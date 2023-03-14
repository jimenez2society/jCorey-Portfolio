import React from "react";
import NavLogo from "../../../shared/NavLogo";
import "./NavMobile.css";
import NavToggler from "./NavToggler";
function NavMobile() {
  return (
    <div className="NavMobile container-sm">
      <NavLogo />
      <NavToggler />
    </div>
  );
}

export default NavMobile;
