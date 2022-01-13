import { combineReducers } from "@reduxjs/toolkit";
import { reducer as counter } from "./counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
