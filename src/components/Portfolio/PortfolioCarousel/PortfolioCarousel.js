import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instinctLogo } from "../../../assets/svg/svg";

import "./PortfolioCarousel.css";
import PortfolioCarouselItem from "./PortfolioCarouselItem/PortfolioCarouselItem";
import {
  getCarouselItems,
  positions,
  showItem,
  showNextItem,
  updateCarousel,
} from "../../../features/carouselSlice";
import CarouselNavgationBtnsList from "./CarouselNavgationBtns/CarouselNavgationBtnsList";
import { nanoid } from "@reduxjs/toolkit";
function PortfolioCarousel() {
  const dispatch = useDispatch();

  // getting items from the redux store
  let items = useSelector(getCarouselItems);

  // getting the current, next and previous index that is also in the store
  let prevIndex = useSelector(positions.prevIndex);
  let currentIndex = useSelector(positions.currentIndex);
  let nextIndex = useSelector(positions.nextIndex);

  // a function that takes an index as a parameter and uses the showItem action to get the item with the selected index and make it the current item displaying in the carousel
  const showItemOnClick = (idx) => {
    dispatch(showItem(idx));
  };

  //update the carousel everytime an item is selected and the currentIndex changes
  useEffect(() => {
    dispatch(updateCarousel({ prevIndex, currentIndex, nextIndex }));
  }, [currentIndex]);

  return (
    // map through the carousel items and display them with the <PortfolioCarouselItem/> component and passing the index
    <div className="PortfolioCarousel">
      <ul className="PortfolioCarousel-container">
        {items.map((item, i) => (
          <PortfolioCarouselItem
            key={i}
            idx={i}
            title={item.title}
            logo={item.logo}
            logoSm={item.logoSm}
            position={item.position}
            comingSoon={item.comingSoon}
          >
            {item.content}
          </PortfolioCarouselItem>
        ))}
      </ul>
      <CarouselNavgationBtnsList
        showItemOnClick={showItemOnClick}
        items={items}
      />
    </div>
  );
}

export default PortfolioCarousel;
