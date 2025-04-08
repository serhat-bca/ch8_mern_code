import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    setInitialTasks: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      const task = {
        id: Math.random().toString(36).slice(2, 11),
        description: action.payload,
        urgent: false,
      };
      state.push(task);
    },
    toggle: (state, action) => {
      return state.map((task) =>
        task.id === action.payload ? { ...task, urgent: !task.urgent } : task
      );
    },
  },
});
export const { add, toggle, setInitialTasks } = taskSlice.actions;
export default taskSlice.reducer;
// const taskReducer = (state = tasks, action) => {
//   switch (action.type) {
//     case "ADD": {
// const task = {
//   id: Math.random().toString(36).slice(2, 11),
//   description: action.payload,
//   urgent: false,
// };
//       return [...state, task];
//     }
//     case "TOGGLE": {
//       return state.map((task) =>
//         task.id === action.payload ? { ...task, urgent: !task.urgent } : task
//       );
//     }
//     default:
//       return state;
//   }
// };
