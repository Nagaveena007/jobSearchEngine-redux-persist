import { GET_JOBS } from "../actions";
import { initialState } from "../store";

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobsArray: action.payload,
      };

    default:
      return state;
  }
};
export default jobReducer;
