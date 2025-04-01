import { useDispatch } from "react-redux";
import { setFilter } from "../actions/filterActions";

const FilterTask = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected Filter: ", selectedValue);
    dispatch(setFilter(selectedValue));
  };
  return (
    <div>
      <span>
        <strong>Filter Tasks</strong>
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="urgent">Urgent</option>
          <option value="non-urgent">Non-Urgent</option>
        </select>
      </span>
    </div>
  );
};

export default FilterTask;
