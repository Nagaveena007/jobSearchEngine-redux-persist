import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";
import { initialState } from "../store";

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        favoCompany: [...state.favoCompany, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        favoCompany: state.favoCompany.filter(
          (comp) => comp !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default favouriteReducer;
