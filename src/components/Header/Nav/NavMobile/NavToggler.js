import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { close, getIsOpenState, open } from "../../../../features/navbarSlice";
import "./NavToggler.css";
function NavToggler() {
  const dispatch = useDispatch();

  const isOpen = useSelector(getIsOpenState);
  const toggleNav = () => {
    // if isOpen === false then dispatch open()
    if (!isOpen) {
      dispatch(open());
    }
    //  if isOpen === true then dispatch close()
    if (isOpen) {
      dispatch(close());
    }
  };
  return (
    <>
      {/* toggle nav with an onclick */}
      <div onClick={toggleNav} className={`NavToggler ${isOpen && "open"}`}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
    </>
  );
}

export default NavToggler;
