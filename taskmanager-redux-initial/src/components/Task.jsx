import { useDispatch } from "react-redux";
import { toggle } from "../reducers/taskReducer";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{task.description}. </span>
      <span>
        <em>{task.urgent ? "(Urgent)" : ""}</em>
      </span>
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => dispatch(toggle(task.id))}
      >
        {task.urgent ? "Make non-urgent" : "make urgent"}
      </span>
    </div>
  );
};

export default Task;
