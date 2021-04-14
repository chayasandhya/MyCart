import React, { useState, useEffect } from "react";
import "./Login.css";

function Login({ typeOf, setIsRegister, setIsLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUserName("");
    setPassword("");
  }, [typeOf]);

  const handleSubmit = () => {
    if (typeOf == "Register") {
      localStorage.setItem(
        `${userName}`,
        JSON.stringify({ userName, password })
      );
      setIsRegister();
    } else {
      const registeredUser = JSON.parse(localStorage.getItem(userName));
      if (registeredUser && registeredUser.password === password) {
        /* var now = new Date();
        var time = now.getTime();
        var expireTime = time + 10000;
        now.setTime(expireTime);
        document.cookie =
          `${userName}=loggedin;expires=` + now.toUTCString() + ";path=/"; */

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
  };

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
        <button className="btn" onClick={handleSubmit}>
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

export default Login;
