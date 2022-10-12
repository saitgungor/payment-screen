import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./number-slice";
import nameSlice from "./name-slice";
import dateSlice from "./date-slice";
import cvvSlice from "./cvv-slice";

const store = configureStore({
  reducer: {
    number: numberSlice.reducer,
    name: nameSlice.reducer,
    date: dateSlice.reducer,
    cvv: cvvSlice.reducer,
  },
});

export default store;
