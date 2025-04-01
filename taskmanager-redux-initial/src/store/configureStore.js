import {configureStore } from "@reduxjs/toolkit";
import taskReducer from "../reducers/taskReducer";
import filterReducer from "../reducers/filterReducer";

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filter: filterReducer
    }
});

export default store;