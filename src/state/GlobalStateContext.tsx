import { createContext } from "react";
import { Action, Book, Author, GlobalState } from "../types/types";

export const initialState: GlobalState = {
  favoriteBooks: [] as Book[],
  favoriteAuthors: [] as Author[],
  readBooks: [] as Book[],
  searchResults: [] as Book[] | Author[],
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});
