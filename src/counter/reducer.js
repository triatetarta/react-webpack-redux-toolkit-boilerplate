import { createSlice } from "@reduxjs/toolkit";
import initialState from "./model";

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.value += 1;
    },
  },
});

export const { increment, sayHello } = counterSlice.actions;

export default counterSlice.reducer;
