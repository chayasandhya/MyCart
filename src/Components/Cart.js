import React, { useState, useEffect } from "react";
import "./Cart.css";

function Cart({ items }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let each of items) {
      sum = each.qty * each.amount + sum;
    }
    setTotal(sum);
  }, [items]);

  return (
    <div className="cart_container">
      <h2 style={{ textAlign: "center" }}>Cart</h2>
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
            {items.map((each) => {
              if (each.qty != 0) {
                return (
                  <tr key={each.id}>
                    <td>{each.name}</td>
                    <td>{each.qty}</td>
                    <td>{`Rs. ${each.amount}`}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <h3>Total:{total}</h3>
      </div>
    </div>
  );
}

export default Cart;
