import React from "react";
import "./AboutMe.css";
import AboutMeItem from "./AboutMeItem/AboutMeItem";
function AboutMe() {
  return (
    // creates a sections with an id of about-me
    <section id="about-me" className="AboutMe main-container">
      {/* rendering AboutMeItem component with the left prop */}
      <AboutMeItem title="About Me" left>
        I worked as an emergency medical technician for two years unitl I found
        my passion in software development.
      </AboutMeItem>

      {/* rendering AboutMeItem component with the right prop */}
      <AboutMeItem title="More About Me" right>
        I love a team environment. Whether it be for work or for play. My go to
        hobbies, aside from programming, are hiking, fishing, kayaking, and
        pretty much anything outdoors.
      </AboutMeItem>
    </section>
  );
}

export default AboutMe;
