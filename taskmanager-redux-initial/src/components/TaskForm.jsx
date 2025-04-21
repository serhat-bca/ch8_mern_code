import { useDispatch } from "react-redux";
import { add } from "../reducers/taskReducer";
import { addTaskToDB } from "../services/taskServices";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Task Submitted :", event.target.task.value);
    const addedTask = await addTaskToDB({
      description: event.target.task.value,
      urgent: false,
    });
    dispatch(add(addedTask));
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
