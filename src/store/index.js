import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./number-slice";

const store = configureStore({
  reducer: {
    number: numberSlice.reducer,
  },
});

export default store;
