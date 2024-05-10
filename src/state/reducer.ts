import { Action, GlobalState } from "../types/types";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_FAVORITE_BOOK":
      const favoriteBookExists = state.favoriteBooks.some(
        (book) => book.key === action.payload.key
      );
      if (favoriteBookExists) {
        alert(`${action.payload.title} is already in favorite books.`);
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
        alert(`${action.payload.title} is already marked as read.`);
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

    case "ADD_AUTHOR":
      return {
        ...state,
        favoriteAuthors: [...state.favoriteAuthors, action.payload],
      };

    case "REMOVE_AUTHOR":
      return {
        ...state,
        favoriteAuthors: state.favoriteAuthors.filter(
          (author) => author.key !== action.payload
        ),
      };

    case "ADD_BOOK_REVIEW":
      return {
        ...state,
        readBooks: state.readBooks.map((book) =>
          book.key === action.payload.bookID
            ? {
                ...book,
                userRating: action.payload.userRating,
                userReview: action.payload.userReview,
                userNumPages: action.payload.userNumPages,
              }
            : book
        ),
      };
    default:
      return state;
  }
};

export default reducer;
