import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    add(state, { payload }) {
      return state + payload;
    },
    minus(state, { payload }) {
      return state - payload;
    },
  },
});

const { add, minus } = counter.actions;

export { add, minus };
export default counter.reduce;
