import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { close, getIsOpenState } from "../../../../features/navbarSlice";
import "./NavMobileContainer.css";

function NavMobileContainer() {
  // getting the global state for navbar to inidicate isOpen or !isOpen
  const isOpen = useSelector(getIsOpenState);
  const dispatch = useDispatch();
  const handleClickingLink = () => {
    dispatch(close());
  };
  return (
    // if isOpen is true then add "open" class
    <nav className={`NavMobileContainer ${isOpen && "open"}`}>
      <ul className="NavMobileContainer__list">
        <li
          onClick={handleClickingLink}
          className="NavMobileContainer__list-item"
        >
          <a href="#highlighted-skill">Skillz</a>
        </li>
        <li
          onClick={handleClickingLink}
          className="NavMobileContainer__list-item"
        >
          <a href="#about-me">About Corey</a>
        </li>
        <li
          onClick={handleClickingLink}
          className="NavMobileContainer__list-item"
        >
          <a href="#availability">Availiblity</a>
        </li>
        <li
          onClick={handleClickingLink}
          className="NavMobileContainer__list-item"
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={handleClickingLink}
          className="NavMobileContainer__list-item"
        >
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavMobileContainer;
