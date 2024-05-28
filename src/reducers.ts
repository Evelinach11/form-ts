import { SET_USER, SetUserAction } from "./actions";

const initialState = {
  usn: "",
};

type State = typeof initialState;

const reducers = (
  state: State = initialState,
  action: SetUserAction
): State => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        usn: action.payload.usn,
      };
    default:
      return state;
  }
};

export default reducers;
