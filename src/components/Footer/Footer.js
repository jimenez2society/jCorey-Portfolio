import React from "react";
import "./Footer.css";
import OtherDetails from "./OtherDetails/OtherDetails";
import SocialListContainer from "./SocialListContainer/SocialListContainer";
import SocialListItem from "./SocialListContainer/SocialListItem";
function Footer() {
  return (
    <footer id="footer" className="Footer container-sm">
      <OtherDetails />
      <SocialListContainer>
        <SocialListItem title="Facebook" />
        <SocialListItem title="Twitter" />
        <SocialListItem title="Instagram" />
        <SocialListItem title="LinkedIn" />
      </SocialListContainer>
    </footer>
  );
}

export default Footer;
