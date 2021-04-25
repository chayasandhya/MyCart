import { LOGIN, REGISTER } from "../constants";

const initialState = {
  data: "trial",
  login: null,
};

export function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      let currentState = {
        ...state,
        login: action.payload,
      };
      return currentState;
    }

    default:
      return state;
  }
}
