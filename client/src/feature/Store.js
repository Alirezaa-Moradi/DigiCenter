import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlece";

const store = configureStore({
  reducer: {
    item: itemSlice,
  },
});

export default store;
