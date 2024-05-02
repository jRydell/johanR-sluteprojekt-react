import { useReducer } from "react";
import { GlobalStateContext, initalState } from "../state/GlobalStateContext";

import reducer from "../state/reducer";

type GlobalStateProviderProps = {
  children: React.ReactNode;
};

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
