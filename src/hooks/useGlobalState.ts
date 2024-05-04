import { useContext } from "react";
import { GlobalStateContext } from "../state/GlobalStateContext";

export const useGlobalState = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  return { state, dispatch };
};
