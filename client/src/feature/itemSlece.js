import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  a: 2,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    incNumber: (state, action) => {
      state.a += action.payload;
    },
  },
});

export const { incNumber } = itemSlice.actions;

export default itemSlice;
