import { createContext } from "react";
import { Action, Book, Author, GlobalState } from "../types/types";

export const initialState: GlobalState = {
  readBooks: [] as Book[],
  favoriteAuthors: [] as Author[],
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});
