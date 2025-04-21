import { useDispatch } from "react-redux";
import { toggle } from "../reducers/taskReducer";
import { toggleOnDB } from "../services/taskServices";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleToggle = async () => {
    await toggleOnDB({ ...task, urgent: !task.urgent });
    dispatch(toggle(task.id));
  };
  return (
    <div>
      <span>{task.description}. </span>
      <span>
        <em>{task.urgent ? "(Urgent)" : ""}</em>
      </span>
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={handleToggle}
      >
        {task.urgent ? "Make non-urgent" : "make urgent"}
      </span>
    </div>
  );
};

export default Task;
