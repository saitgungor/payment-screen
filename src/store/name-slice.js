import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: {
    nameOnCard: "",
  },
  reducers: {
    nameHandler(state, action) {
      state.nameOnCard = action.payload;
    },
  },
});

export const nameActions = nameSlice.actions;

export default nameSlice;
