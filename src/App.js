import React, { useState, useEffect } from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { PRODUCT } from "./static/data";
import "./App.css";

function App() {
  //const [quantity, setQuantity] = useState({ quant: "", id: "" });
  const [items, setItems] = useState(PRODUCT);

  const handleQuantity = (item) => {
    console.log("add");
    let itemsCopy = [...items];
    itemsCopy[item.id - 1] = item;
    setItems(itemsCopy);
  };

  return (
    <div className="app">
      <Products PRODUCT={items} handleQuantity={handleQuantity}></Products>
      <Cart items={items}></Cart>
    </div>
  );
}

export default App;
