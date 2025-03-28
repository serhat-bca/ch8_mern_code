const tasks = [
  { id: 1, description: "Finish the report", urgent: true },
  { id: 2, description: "Buy Groceries", urgent: false },
  { id: 3, description: "Call John", urgent: false },
  { id: 4, description: "Pay Internet Bill", urgent: true },
];

const taskReducer = (state = tasks, action) => {
  switch (action.type) {
    case "ADD": {
      const task = {
        id: Math.random().toString(36).slice(2, 11),
        description: action.payload,
        urgent: false,
      };
      return [...state, task];
    }
    case "TOGGLE": {
      return state.map((task) =>
        task.id === action.payload ? { ...task, urgent: !task.urgent } : task
      );
    }
    default:
      return state;
  }
};

export default taskReducer;
