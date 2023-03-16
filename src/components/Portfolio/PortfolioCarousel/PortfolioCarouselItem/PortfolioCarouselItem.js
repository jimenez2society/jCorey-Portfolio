import React from "react";
import { useDispatch } from "react-redux";
import {
  construction,
  github,
  githubDisabled,
  right,
} from "../../../../assets/svg/svg";
import { showItem } from "../../../../features/carouselSlice";
import { getLogoFromName } from "../../../../helpers/getLogoFromName";
import "./PortfolioCarouselItem.css";
function PortfolioCarouselItem({
  title,
  logo,
  logoSm,
  children,
  position,
  comingSoon,
  idx,
}) {
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => {
        // if prop position === "previous" we dispatch the showItem passing in the items index allowing that index to be current index
        (position === "previous" && dispatch(showItem(idx))) ||
          // same as above except if position === "next"
          (position === "next" && dispatch(showItem(idx)));
      }}
      // if prop comingSoon is true then give it a class of "comingSoon"
      className={`PortfolioCarouselItem ${position} ${
        comingSoon && "comingSoon"
      }`}
    >
      <p className="PortfolioCarouselItem__header">{title}</p>
      {/* if item has logo then pass into getLogoFromName function to return the actual logo if not use the default construction logo */}
      <div className={`PortfolioCarouselItem__img imgConComingSoon`}>
        {logo ? getLogoFromName(logo) : construction ? construction : null}
        {/* if comingSoon it true then show this paragraph */}
        {comingSoon && (
          <p className={`${comingSoon && "imgComingSoon"}`}>Unavailable</p>
        )}
      </div>

      <div className="PortfolioCarouselItem__icons">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jimenez2society"
        >
          {comingSoon ? githubDisabled : github}
        </a>

        {!comingSoon && getLogoFromName(logoSm)}
      </div>
      <div className="PortfolioCarouselItem__content">
        {/* this is where the content text will go */}
        <p>{children}</p>
      </div>
      {/* depending on comingSoon prop display one or the other */}
      {comingSoon && (
        <div className="PortfolioCarouselItem__more disabled">
          <>
            <p>Coming soon</p>
          </>
        </div>
      )}
      <a href={`#${title}`} className="PortfolioCarouselItem__more">
        {!comingSoon && (
          <>
            <p>View More</p>
            <span>{right}</span>
          </>
        )}
      </a>
    </li>
  );
}

export default PortfolioCarouselItem;
