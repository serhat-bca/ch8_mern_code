import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useEffect } from "react";
import { fetchDBStore } from "./reducers/taskReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDBStore());
  }, []);

  return (
    <div>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default App;
