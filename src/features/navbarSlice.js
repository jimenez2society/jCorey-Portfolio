const { createSlice } = require("@reduxjs/toolkit");
// sets a global state to determine or update whether the navbar is open or not
const initialState = {
  isOpen: false,
};
const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = navbarSlice.actions;
export const getIsOpenState = (state) => state.navbar.isOpen;
export default navbarSlice.reducer;
