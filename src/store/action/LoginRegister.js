import { LOGIN, REGISTER, ALERT } from "../constants";

export const loginUser = (user, password, typeOf) => {
  if (typeOf == "Register") {
    localStorage.setItem(user, JSON.stringify({ user, password }));
    return {
      type: LOGIN,
      payload: { user, password },
    };
  } else {
    const credentials = JSON.parse(localStorage.getItem(user));
    if (credentials) {
      if (user === credentials.userName && password === credentials.password) {
        return {
          type: LOGIN,
          payload: { user, password },
        };
      } else {
        return {
          type: ALERT,
          payload: "Invalid credentials",
        };
      }
    }
    return {
      type: ALERT,
      payload: "User does not exist",
    };
  }
};

export const clearAlert = () => {
  return {
    type: ALERT,
    payload: "",
  };
};
