import { LOGIN, REGISTER } from "../constants";

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
        alert("Invalid credentials");
      }
    }
    alert("User does not exist");
    return { type: "NONE" };
  }
};
