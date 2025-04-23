import { useDispatch } from "react-redux";
import { addDBTasks } from "../reducers/taskReducer";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Task Submitted :", event.target.task.value);
    const addedTask = {
      description: event.target.task.value,
      urgent: false,
    };
    dispatch(addDBTasks(addedTask));
    // dispatch(add(addedTask));
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
