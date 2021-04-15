import React, { useState, useEffect } from "react";
import "./Cart.css";

function Cart({ items, setViewCart }) {
  const [total, setTotal] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const copyItem = items.filter((each) => each.qty != 0);
    setCartItem(copyItem);

    if (copyItem.length > 0) {
      setAlert(true);
    } else {
      setTimeout(() => {
        setViewCart(false);
      }, 2000);
      setAlert(false);
    }

    let sum = 0;
    for (let each of copyItem) {
      sum = each.qty * each.amount + sum;
    }
    setTotal(sum);
  }, [items]);

  return (
    <div className="cart_container">
      <h2 style={{ textAlign: "center" }}>Cart</h2>
      {alert ? (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((each) => {
                return (
                  <tr key={each.id}>
                    <td>{each.name}</td>
                    <td>{each.qty}</td>
                    <td>{`Rs. ${each.amount}`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="footer">
            <h3>Total:{total}</h3>
            <button className="cartClosebtn" onClick={() => setViewCart(false)}>
              ok
            </button>
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Add items to Cart 🥕 </h1>
      )}
    </div>
  );
}

export default Cart;
