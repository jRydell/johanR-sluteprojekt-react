import { createContext } from "react";
import { Action, Book, GlobalState } from "../types/types";

export const initalState = { readBooks: [] as Book[] };
export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initalState,
  dispatch: () => null,
});
