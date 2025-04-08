import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { fetchTasks } from "./services/taskServices";
import { useEffect } from "react";
import { setInitialTasks } from "./reducers/taskReducer";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTasks().then((tasks) => dispatch(setInitialTasks(tasks)));
  }, []);

  return (
    <div>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default App;
