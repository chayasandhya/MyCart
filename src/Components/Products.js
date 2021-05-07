import React, { useState, useEffect } from "react";
//css --------------------------------------------------------------
import "./Product.css";

function Products({ PRODUCT, handleQuantity }) {
  const [qty, setQty] = useState(1);

  const addToCart = (item) => {
    item.qty += 1;
    handleQuantity(item);
  };

  const IncrementQuantity = (item) => {
    if (qty) {
      item.qty += qty;
      handleQuantity(item);
    } else {
      alert("Please add amount of Item");
    }
  };

  const decrementQuantity = (item) => {
    if (item.qty >= qty) {
      item.qty -= qty;
    } else {
      item.qty -= 1;
    }
    handleQuantity(item);
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
                  value={each.qty}
                  className="inputQty"
                  type="number"
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
