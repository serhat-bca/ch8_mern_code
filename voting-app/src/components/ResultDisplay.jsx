import { useSelector } from "react-redux";

const ResultDisplay = () => {
  const votes = useSelector((state) => state.votes);

  return (
    <div>
      <hr />
      <p>
        Yea: {votes.yea} Nay: {votes.nay} Neutral: {votes.neutral}
      </p>
    </div>
  );
};

export default ResultDisplay;
