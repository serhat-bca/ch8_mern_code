import { useDispatch } from "react-redux";
import { voteYea, voteNay, voteNeutral } from "../reducers/votingReducer";

const Vote = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(voteYea())}>Yea</button>
      <button onClick={() => dispatch(voteNay())}>Nay</button>
      <button onClick={() => dispatch(voteNeutral())}>Neutral</button>
    </div>
  );
};

export default Vote;
