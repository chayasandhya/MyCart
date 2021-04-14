import React, { useState, useEffect } from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { PRODUCT } from "./static/data";
import "./App.css";
import Login from "./Components/Login/Login";

function App() {
  //const [quantity, setQuantity] = useState({ quant: "", id: "" });
  const [items, setItems] = useState(PRODUCT);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("isLogin"));
    if (storage && storage.value) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleQuantity = (item) => {
    console.log("add");
    let itemsCopy = [...items];
    itemsCopy[item.id - 1] = item;
    setItems(itemsCopy);
  };

  const register = () => {
    console.log(!isRegister);
    setIsRegister(!isRegister);
    console.log("regestringgggg");
  };

  return (
    <div>
      {isLogin ? (
        <div className="app">
          <Products PRODUCT={items} handleQuantity={handleQuantity}></Products>
          <Cart items={items}></Cart>
        </div>
      ) : !isRegister ? (
        <Login
          typeOf="Login"
          setIsRegister={register}
          setIsLogin={setIsLogin}
        ></Login>
      ) : (
        <Login typeOf="Register" setIsRegister={register}></Login>
      )}
    </div>
  );
}

export default App;
