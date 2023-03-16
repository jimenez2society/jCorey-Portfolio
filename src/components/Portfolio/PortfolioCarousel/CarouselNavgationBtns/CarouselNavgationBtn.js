import React from "react";
import { useDispatch } from "react-redux";
import { construction } from "../../../../assets/svg/svg";
import { showItem } from "../../../../features/carouselSlice";
import { getLogoFromName } from "../../../../helpers/getLogoFromName";
import "./CarouselNavgationBtn.css";

function CarouselNavgationBtn({ index, logo, title, showItemOnClick }) {
  return (
    <li onClick={() => showItemOnClick(index)} className="CarouselNavgationBtn">
      <span className="CarouselNavgationBtnLogo">
        {logo ? getLogoFromName(logo) : construction}
      </span>
      <p>{title}</p>
    </li>
  );
}

export default CarouselNavgationBtn;
