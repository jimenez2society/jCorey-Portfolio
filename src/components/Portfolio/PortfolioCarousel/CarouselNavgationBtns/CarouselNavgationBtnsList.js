import React from "react";
import CarouselNavgationBtn from "./CarouselNavgationBtn";
import "./CarouselNavgationBtnsList.css";
function CarouselNavgationBtnsList({ items, showItemOnClick }) {
  return (
    <ul className="CarouselNavgationBtnsList">
      {items.map((item, i) => {
        return (
          <CarouselNavgationBtn
            index={i}
            logo={item.logoSm}
            title={item.title}
            showItemOnClick={showItemOnClick}
          />
        );
      })}
    </ul>
  );
}

export default CarouselNavgationBtnsList;
