import { Action, GlobalState } from "../types/types";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload],
      };
    case "ADD_AUTHOR":
      return {
        ...state,
        favoriteAuthors: [...state.favoriteAuthors, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
