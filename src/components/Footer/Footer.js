import React from "react";
import "./Footer.css";
import OtherDetails from "./OtherDetails/OtherDetails";
import SocialListContainer from "./SocialListContainer/SocialListContainer";
import SocialListItem from "./SocialListContainer/SocialListItem";
function Footer() {
  return (
    <footer id="footer" className="Footer container-sm">
      {/* render OtherDetails component, contains side details about the website and the creator */}
      <OtherDetails />
      {/* rendering the Social Links here, contains links to any social accounts that are associated with the creator */}
      <SocialListContainer>
        <SocialListItem title="Facebook" to="https://facebook.com/" />
        <SocialListItem title="Twitter" to="https://twitter.com/" />
        <SocialListItem title="Instagram" to="https://instagram.com" />
        <SocialListItem title="LinkedIn" to="https://linkedIn.com" />
      </SocialListContainer>
    </footer>
  );
}

export default Footer;
