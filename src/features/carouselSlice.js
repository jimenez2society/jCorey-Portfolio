import { createSlice } from "@reduxjs/toolkit";
import { carouselItems } from "./data/carouselItems";

// initial state of carouselSlice
const initialState = {
  items: [...carouselItems],
  prevIndex: 0,
  currentIndex: 1,
  nextIndex: 2,
  lastIndex: carouselItems.length - 1,
  carouselRunning: true,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    showNextItem: (state) => {
      if (state.currentIndex === state.lastIndex) {
        state.currentIndex = 0;
      } else {
        state.currentIndex++;
      }
    },
    // updates currentIndex to the payload
    showItem: (state, action) => {
      state.currentIndex = action.payload;
    },
    // updates the carousel
    updateCarousel: (state, action) => {
      // gets all the current showing items and sets position to "hidden"
      let foundItems = state.items.filter(
        (item) =>
          item.position === "previous" ||
          item.position === "current" ||
          item.position === "next"
      );

      foundItems.forEach((item) => {
        item.position = "hidden";
      });

      // sets the payload current indexes to prev,next,current  with some conditions
      if (action.payload.currentIndex === 0) {
        action.payload.prevIndex = state.lastIndex;
      }
      if (action.payload.currentIndex === 2) {
        action.payload.nextIndex = 1;
      }
      let prev = state.items[action.payload.prevIndex];
      let current = state.items[action.payload.currentIndex];
      let next = state.items[action.payload.nextIndex];

      prev.position = "previous";
      current.position = "current";
      next.position = "next";
    },
  },
});
export const getCarouselItems = (state) => state.carousel.items;
export const { showNextItem, updateCarousel, showItem } = carouselSlice.actions;
export const positions = {
  prevIndex: (state) => state.carousel.prevIndex,
  currentIndex: (state) => state.carousel.currentIndex,
  nextIndex: (state) => state.carousel.nextIndex,
};
export default carouselSlice.reducer;
