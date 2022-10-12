import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    dateOnCard: "",
  },
  reducers: {
    dateHandler(state, action) {
      state.dateOnCard = action.payload;
    },
  },
});

export const dateActions = dateSlice.actions;

export default dateSlice;
