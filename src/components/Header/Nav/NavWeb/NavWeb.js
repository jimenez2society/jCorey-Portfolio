import React from "react";
import "./NavWeb.css";
import NavWebList from "./NavWebList";
import NavWebListItem from "./NavWebListItem";
import NavLogo from "../../../shared/NavLogo";

// creates the navlogo and navlist with react components
function NavWeb() {
  return (
    <nav className="NavWeb container-sm">
      <NavLogo />
      <NavWebList>
        <NavWebListItem title="Skillz" to="#highlighted-skill" />
        <NavWebListItem title="About Corey" to="#about-me" />
        <NavWebListItem title="Availability" to="#availability" />
        <NavWebListItem title="Portfolio" to="#portfolio" />
        <NavWebListItem lastItem title="Contact" to="#footer" />
        <NavWebListItem title="Get in touch" to="#availability" type="btn" />
      </NavWebList>
    </nav>
  );
}

export default NavWeb;
