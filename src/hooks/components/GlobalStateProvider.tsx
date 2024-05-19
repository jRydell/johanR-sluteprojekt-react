import { useReducer } from "react";
import {
  GlobalStateContext,
  initialState,
} from "../../state/GlobalStateContext";
import reducer from "../../state/reducer";
import { GlobalStateProviderProps } from "../../types/types";

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
