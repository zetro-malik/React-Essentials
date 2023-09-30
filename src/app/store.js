import { configureStore } from "@reduxjs/toolkit";
import counterRedcuer from "../features/counter";

export const store = configureStore({
    reducer: { counter: counterRedcuer },
  });