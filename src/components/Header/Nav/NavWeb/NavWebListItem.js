import React from "react";
import "./NavWebListItem.css";
function NavWebListItem({ to, title, type = "link", lastItem }) {
  // if the prop.type === "link" then we will present "link" styles
  if (type === "link") {
    return (
      <li className={`NavWebListItem link ${lastItem && "last"}`}>
        <a href={to}>{title}</a>
      </li>
    );
  }
  // if the prop.type === "btn" then we will present "btn" styles
  if (type === "btn") {
    return (
      <li className="NavWebListItem btn">
        <a href={to}>{title}</a>
      </li>
    );
  }
}

export default NavWebListItem;
