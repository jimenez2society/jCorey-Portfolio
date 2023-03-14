import React from "react";
import { logo } from "../../assets/svg/svg";
import "./NavLogo.css";

function NavLogo() {
  // renders a span with .NavLogo class and giving it the logo svg
  return <span className="NavLogo">{logo}</span>;
}

export default NavLogo;
