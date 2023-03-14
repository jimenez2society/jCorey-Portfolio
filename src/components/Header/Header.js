import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent/HeaderContent";
import NavMobile from "./Nav/NavMobile/NavMobile";
import NavWeb from "./Nav/NavWeb/NavWeb";
// sets the overall header with mobile nav and nav for browsers and the content
function Header() {
  return (
    <header id="Header" className="Header">
      <NavWeb />
      <NavMobile />
      <HeaderContent />
    </header>
  );
}

export default Header;
