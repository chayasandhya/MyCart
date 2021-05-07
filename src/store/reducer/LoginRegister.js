import { LOGIN, REGISTER, ALERT } from "../constants";

const initialState = {
  data: "trial",
  login: null,
  alertMsg: "",
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
    case ALERT: {
      return {
        ...state,
        alertMsg: action.payload,
      };
    }
    default:
      return state;
  }
}
