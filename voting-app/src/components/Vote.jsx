import { useDispatch } from "react-redux";
import { voteYay, voteNay, voteNeutral } from "../actions/votingActions";

const Vote = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(voteYay())}>Yay</button>
      <button onClick={() => dispatch(voteNay())}>Nay</button>
      <button onClick={() => dispatch(voteNeutral())}>Neutral</button>
    </div>
  );
};

export default Vote;
