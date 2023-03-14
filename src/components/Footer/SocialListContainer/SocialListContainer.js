import React from "react";
import SocialList from "./SocialList";
import "./SocialListContainer.css";
function SocialListContainer({ children }) {
  // made to contain the <SocialList/> component and pass down the children which is intended to be the <SocialListItem/> component
  return (
    <div className="SocialListContainer">
      <SocialList>{children}</SocialList>
    </div>
  );
}

export default SocialListContainer;
