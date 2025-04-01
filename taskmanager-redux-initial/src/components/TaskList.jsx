import FilterTask from "./FilterTask";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "urgent"
      ? tasks.filter((task) => task.urgent)
      : tasks.filter((task) => !task.urgent);

  return (
    <div>
      <h2>Task List</h2>
      <FilterTask />
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
