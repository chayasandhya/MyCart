import React, { useState, useEffect } from "react";
//components ------------------------------------------------------
import Login from "./Components/Login/Login";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
// other imports -------------------------------------------------------------
import { PRODUCT } from "./static/data";
import { connect } from "react-redux";
// css -------------------------------------------------------------
import "./App.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Icon from "@material-ui/core/Icon";

function App({ isLogin }) {
  const [items, setItems] = useState(PRODUCT);
  const [isRegister, setIsRegister] = useState(false);
  const [veiwCart, setViewCart] = useState(false);

  const showCart = () => {
    setViewCart(true);
  };

  const handleQuantity = (item) => {
    console.log("add");
    let itemsCopy = items.map((it) => {
      if (it.id == item.id) {
        it = { ...item };
      }
      return it;
    });
    setItems(itemsCopy);
  };

  const register = () => {
    setIsRegister(!isRegister);
  };

  const searchItem = (searchText) => {
    if (searchText) {
      const searchItems = items.filter((each) =>
        each.name.toLowerCase().startsWith(searchText.toLowerCase())
      );
      setItems(searchItems);
    } else {
      setItems(PRODUCT);
    }
  };

  return (
    <div className="app_container">
      <nav className="navBar">
        <h2 className="nav_head">Welcome to Cart 😇 </h2>
        {isLogin && (
          <div className="search_cart">
            <input
              type="text"
              placeholder="search"
              onChange={(e) => searchItem(e.target.value)}
            />
            <button onClick={showCart} className="nav_cart">
              <ShoppingCartIcon fontSize="large" />
            </button>
          </div>
        )}
      </nav>
      {isLogin ? (
        <div className="app">
          <Products PRODUCT={items} handleQuantity={handleQuantity}></Products>
          {veiwCart && <Cart setViewCart={setViewCart} items={items}></Cart>}
        </div>
      ) : !isRegister ? (
        <Login
          typeOf="Login"
          setIsRegister={register}
          //setIsLogin={setIsLogin}
        ></Login>
      ) : (
        <Login typeOf="Register" setIsRegister={register}></Login>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isLogin: state.LoginReducer.login ? true : false };
};

export default connect(mapStateToProps)(App);
