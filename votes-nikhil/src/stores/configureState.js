import { configureStore } from "@reduxjs/toolkit";
import voteReducer from "../reducers/voteReducer";

const store = configureStore({
  reducer: {
    votes: voteReducer,
  },
});

export default store;
