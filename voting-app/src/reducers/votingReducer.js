import { createSlice } from "@reduxjs/toolkit";

const initialVotes = {
  yea: 0,
  nay: 0,
  neutral: 0,
};

const voteSlice = createSlice({
  name: "voting",
  initialState: initialVotes,
  reducers: {
    voteYea: (state, action) => {
      state.yea++;
    },
    voteNay: (state, action) => {
      state.nay++;
    },
    voteNeutral: (state, action) => {
      state.neutral++;
    },
  },
});

export const { voteYea, voteNay, voteNeutral } = voteSlice.actions;
export default voteSlice.reducer;

// const votingReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "YEA":
//       return { ...state, yea: state.yea + 1 };
//     case "NAY":
//       return { ...state, nay: state.nay + 1 };
//     case "NEUTRAL":
//       return { ...state, neutral: state.neutral + 1 };
//     default:
//       return state;
//   }
// };

// export default votingReducer;
