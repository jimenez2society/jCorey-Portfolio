import React from "react";
import "./SocialListItem.css";
function SocialListItem({ title, to }) {
  // creates the links that are intended to be the children of the <SocialList/> component
  return (
    <li className="SocialListItem">
      <a target="_blank" rel="noreferrer" href={to}>
        {title}
      </a>
    </li>
  );
}

export default SocialListItem;
