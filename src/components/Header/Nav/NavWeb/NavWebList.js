import React from "react";
import "./NavWebList.css";
// creates a ul element passing down children as the content
function NavWebList(props) {
  return <ul className="NavWebList">{props.children}</ul>;
}

export default NavWebList;
