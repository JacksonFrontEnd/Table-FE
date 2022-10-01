import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../slicers/tableSlice";
export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});
