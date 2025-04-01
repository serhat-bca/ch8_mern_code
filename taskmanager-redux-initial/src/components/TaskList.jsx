import FilterTask from "./FilterTask";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <h2>Task List</h2>
      <FilterTask />
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
