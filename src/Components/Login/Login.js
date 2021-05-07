import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// components -----------------------------------------------------------------
import Alert from "../Alerts/Alert";
// Action -----------------------------------------------------------------
import { loginUser } from "../../store/action/LoginRegister";
// CSS -----------------------------------------------------------------
import "./Login.css";

function Login({
  typeOf,
  setIsRegister,
  setIsLogin,
  login,
  product,
  loginUser,
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUserName("");
    setPassword("");
  }, [typeOf]);

  return (
    <div className="login_container">
      <div className="login_input">
        <h2>{typeOf}</h2>
        <input
          className="input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="user name"
        />
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button
          className="btn"
          onClick={() => loginUser(userName, password, typeOf)}
        >
          {typeOf}
        </button>
        {typeOf == "Login" ? (
          <h4 className="register" onClick={() => setIsRegister()}>
            Register
          </h4>
        ) : (
          <h4 className="register" onClick={() => setIsRegister()}>
            Login
          </h4>
        )}
      </div>
      <Alert />
    </div>
  );
}

const stateToProps = (state) => {
  console.log("loginState:", state);
  return { login: state.LoginReducer.data, product: state.ProductReducer.data };
};

export default connect(stateToProps, { loginUser })(Login);
