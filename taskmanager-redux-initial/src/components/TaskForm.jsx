import { useDispatch } from "react-redux";
import { add } from "../actions/taskActions";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task Submitted :", event.target.task.value);
    dispatch(add(event.target.task.value));
    event.target.task.value = "";
  };

  return (
    <div>
      <h3>Create a new task </h3>
      <form onSubmit={handleSubmit}>
        <input name="task" type="text" placeholder="Enter task Description" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
