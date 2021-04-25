import React, { useState, useEffect } from "react";
import "./Login.css";
import { connect } from "react-redux";

import { loginUser } from "../../store/action/LoginRegister";

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

  //*****//
  //redux//
  //*****//

  /* const handleSubmit = () => {
    if (typeOf == "Register") {
      localStorage.setItem(
        `${userName}`,
        JSON.stringify({ userName, password })
      );
      setIsRegister();
    } else {
      const registeredUser = JSON.parse(localStorage.getItem(userName));
      if (registeredUser && registeredUser.password === password) {
        localStorage.setItem(
          "isLogin",
          JSON.stringify({
            value: true,
            timeStamp: new Date().getTime() + 2000,
          })
        );
        setIsLogin(true);
      } else {
        alert("Wrong Credentials");
      }
    }
  }; */

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
    </div>
  );
}

const stateToProps = (state) => {
  console.log("loginState:", state);
  return { login: state.LoginReducer.data, product: state.ProductReducer.data };
};

/* const dispatchToProps=(dispatch)=>{
  return {
    loginfun
  }
} */

export default connect(stateToProps, { loginUser })(Login);
