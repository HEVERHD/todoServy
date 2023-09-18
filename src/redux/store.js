import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todosReducer from "./todosSlices.js";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: [thunk],
});
