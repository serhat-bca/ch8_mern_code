const vote = { yea: 0, nay: 0, neutral: 0 };

const voteReducer = (state = vote, action) => {
  switch (action.type) {
    case "yea":
      return { ...state, yea: state.yea + 1 };
    case "nay":
      return { ...state, nay: state.nay + 1 };
    case "neutral":
      return { ...state, neutral: state.neutral + 1 };
    default:
      return state;
  }
};

export default voteReducer;
