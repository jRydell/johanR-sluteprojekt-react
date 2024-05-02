import { createContext } from "react";
import { Action, GlobalState } from "../types/types";

export const initialState: GlobalState = {
  readBooks: [],
  favoriteAuthors: [],
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});
