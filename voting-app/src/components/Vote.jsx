import { useDispatch } from "react-redux";
import { voteYea, voteNay, voteNeutral } from "../actions/votingActions";

const Vote = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(voteYea())}>Yay</button>
      <button onClick={() => dispatch(voteNay())}>Nay</button>
      <button onClick={() => dispatch(voteNeutral())}>Neutral</button>
    </div>
  );
};

export default Vote;
