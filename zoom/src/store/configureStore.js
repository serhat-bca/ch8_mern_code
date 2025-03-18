import { configureStore } from "@reduxjs/toolkit";
import zoomReducer from "../reducers/zoomReducer";

const store = configureStore({
  reducer: {
    zoomLevel: zoomReducer,
  },
});

export default store;
