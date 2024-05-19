import { Action, GlobalState } from "../types/types";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_FAVORITE_BOOK":
      const favoriteBookExists = state.favoriteBooks.some(
        (book) => book.key === action.payload.key
      );
      if (favoriteBookExists) {
        return state;
      } else {
        return {
          ...state,
          favoriteBooks: [...state.favoriteBooks, action.payload],
        };
      }

    case "ADD_READ_BOOK":
      const readBookExists = state.readBooks.some(
        (book) => book.key === action.payload.key
      );
      if (readBookExists) {
        return state;
      } else {
        return {
          ...state,
          readBooks: [...state.readBooks, action.payload],
        };
      }

    case "REMOVE_FAVORITE_BOOK":
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.filter(
          (book) => book.key !== action.payload
        ),
      };

    case "REMOVE_READ_BOOK":
      return {
        ...state,
        readBooks: state.readBooks.filter(
          (book) => book.key !== action.payload
        ),
      };

    case "ADD_FAVORITE_AUTHOR":
      const favoriteAuthorExists = state.favoriteAuthors.some(
        (author) => author.key === action.payload.key
      );
      if (favoriteAuthorExists) {
        return state;
      } else {
        return {
          ...state,
          favoriteAuthors: [...state.favoriteAuthors, action.payload],
        };
      }

    case "REMOVE_FAVORITE_AUTHOR":
      return {
        ...state,
        favoriteAuthors: state.favoriteAuthors.filter(
          (author) => author.key !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
