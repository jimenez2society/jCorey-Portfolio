import React, { useState } from "react";
import "./PageProgressBar.css";
function PageProgressBar() {
  // set inital state of how much is scrolled
  const [percentScrolled, setPercentScrolled] = useState(0);
  window.onscroll = function (e) {
    // gets how many pixels was scrolled from the top
    let scrollTop = window.scrollY;

    // gets the fucll document height
    let docHeight = document.body.offsetHeight;

    // get the height of the viewport
    let winHeight = window.innerHeight;

    // subtracts winHeight from  docHeight and divides scrollTop by the value
    let scrollPercent = scrollTop / (docHeight - winHeight);

    // multiplies scrollPercent by 100 and rounds it
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    // sets percentScrolled state
    setPercentScrolled(scrollPercentRounded);
  };
  return (
    // pass in the percentScrolled in the width property to get a nice progress bar at the top
    <div
      style={{ width: `${percentScrolled}%`, transition: ".05s" }}
      className="PageProgressBar"
    ></div>
  );
}

export default PageProgressBar;
