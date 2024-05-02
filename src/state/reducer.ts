import { Action, GlobalState } from "../types/types";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_BOOK":
      return { readBooks: [...state.readBooks, action.payload] };
  }
};

export default reducer;
