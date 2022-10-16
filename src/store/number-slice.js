import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: {
    numberOnCard: "",
    binObj: {},
  },
  reducers: {
    numberHandler(state, action) {
      state.numberOnCard = action.payload;
    },
  },
});

export const numberActions = numberSlice.actions;

export default numberSlice;
