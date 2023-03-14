import React from "react";
import "./AboutMe.css";
import AboutMeItem from "./AboutMeItem/AboutMeItem";
function AboutMe() {
  return (
    // GIVING THIS SECTION main-container FOR SPACE ON SIDES
    <section id="about-me" className="AboutMe main-container">
      {/* RENDERING AN AboutMeItem WITH A PROP OF LEFT */}
      <AboutMeItem title="About Me" left>
        I worked as an emergency medical technician for two years unitl I found
        my passion in software development.
      </AboutMeItem>

      {/* RENDERING AN AboutMeItem WITH A PROP OF RIGHT */}
      <AboutMeItem title="More About Me" right>
        I love a team environment. Whether it be for work or for play. My go to
        hobbies, aside from programming, are hiking, fishing, kayaking, and
        pretty much anything outdoors.
      </AboutMeItem>
    </section>
  );
}

export default AboutMe;
