import { Action, GlobalState } from "../types/types";
import { toggleBooks } from "../utils/toggleBooks";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "TOGGLE_FAVORITE_BOOK":
      return {
        ...state,
        favoriteBooks: toggleBooks(state.favoriteBooks, action.payload),
      };

    case "TOGGLE_READ_BOOK":
      return {
        ...state,
        readBooks: toggleBooks(state.readBooks, action.payload),
      };

    case "REMOVE_FAVORITE_BOOK":
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.filter(
          (book) => book.key !== action.payload.key
        ),
      };

    case "REMOVE_READ_BOOK":
      return {
        ...state,
        readBooks: state.readBooks.filter(
          (book) => book.key !== action.payload.key
        ),
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
