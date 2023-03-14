import React from "react";
import "./SocialListItem.css";
function SocialListItem({ title, to }) {
  // creates the links that are intended to be the children of the <SocialList/> component
  return (
    <li className="SocialListItem">
      <a href={to}>{title}</a>
    </li>
  );
}

export default SocialListItem;
