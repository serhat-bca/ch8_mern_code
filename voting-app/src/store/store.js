import { configureStore } from "@reduxjs/toolkit";
import votingReducer from "../reducers/votingReducer";

const store = configureStore({
  reducer: {
    votes: votingReducer,
  },
});

export default store;
