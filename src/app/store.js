import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbarSlice";
import carouselReducer from "../features/carouselSlice";

// CREATING A STORE WITH nabar AND carousel REDUCERS

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    carousel: carouselReducer,
  },
});
