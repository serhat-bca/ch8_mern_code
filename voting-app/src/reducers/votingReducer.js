const initialState = {
  yea: 0,
  nay: 0,
  neutral: 0,
};

const votingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "YEA":
      return { ...state, yea: state.yea + 1 };
    case "NAY":
      return { ...state, nay: state.nay + 1 };
    case "NEUTRAL":
      return { ...state, neutral: state.neutral + 1 };
    default:
      return state;
  }
};

export default votingReducer;
