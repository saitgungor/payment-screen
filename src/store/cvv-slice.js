import { createSlice } from "@reduxjs/toolkit";

const cvvSlice = createSlice({
  name: "cvv",
  initialState: {
    cvvOnCard: "",
    isFlipped: false,
  },
  reducers: {
    cvvHandler(state, action) {
      state.cvvOnCard = action.payload;
    },
    flipCardHandler(state, action) {
      state.isFlipped = action.payload;
    },
  },
});

export const cvvActions = cvvSlice.actions;

export default cvvSlice;
