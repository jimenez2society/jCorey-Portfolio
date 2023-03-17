import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbarSlice";
import carouselReducer from "../features/carouselSlice";

// creats a store for the navbar and carousel reducers

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    carousel: carouselReducer,
  },
});
