import { Action, Book, GlobalState } from "../types/types";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_FAVORITE_BOOK":
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload],
      };
    case "REMOVE_FAVORITE_BOOK":
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.filter(
          (book: Book) => book.key !== action.payload.key
        ),
      };
    case "ADD_READ_BOOK":
      return {
        ...state,
        readBooks: [...state.readBooks, action.payload],
      };
    case "REMOVE_READ_BOOK":
      return {
        ...state,
        readBooks: state.readBooks.filter(
          (book: Book) => book.key !== action.payload.key
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
