import React from "react";
import "./SocialList.css";
function SocialList({ children }) {
  // made to contain the <SocialListItem/> component as children which will be passed down from the <SocialListContainer/> component
  return <ul className="SocialList">{children}</ul>;
}

export default SocialList;
