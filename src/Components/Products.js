import React, { useState, useEffect } from "react";
import "./Product.css";

function Products({ PRODUCT, handleQuantity }) {
  const [qty, setQty] = useState();

  const addToCart = (item) => {
    item.qty += 1;
    handleQuantity(item);
  };

  const IncrementQuantity = (item) => {
    item.qty += qty;
    handleQuantity(item);
  };

  const decrementQuantity = (item) => {
    if (item.qty >= qty) {
      item.qty -= qty;
      handleQuantity(item);
    }
  };

  return (
    <div className="product_container">
      <div className="product">
        {PRODUCT.map((each, i) => (
          <div key={i} className="product_item">
            <h3>{each.name.toUpperCase()}</h3>
            <img src={each.img}></img>
            {each.qty == 0 && (
              <button onClick={() => addToCart(each)}>Add</button>
            )}

            {each.qty > 0 ? (
              <div className="options">
                <button onClick={() => IncrementQuantity(each)}>+</button>
                <input
                  className="inputQty"
                  type="number"
                  maxLength="1"
                  min="1"
                  max="9"
                  onChange={(e) => setQty(parseInt(e.target.value))}
                />
                <button
                  onClick={() => {
                    decrementQuantity(each);
                  }}
                >
                  -
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
