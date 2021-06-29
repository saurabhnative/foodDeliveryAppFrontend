import React from "react";
import { useHistory } from "react-router-dom";
export function Cart({ items, handleRemoveFromCart, clearCart }) {
  const history = useHistory();
  function handlePlaceOrder(params) {
    clearCart();
    history.push("/");
  }
  let addedItems = items.length ? (
    items.map((item) => {
      return (
        <div>
          <div className="cart-items d-flex " key={item.name}>
            <div className="item-desc text-left mr-4 w-75">
              <div>
                <span className="title h5">{item.name}</span>
                <p className="text-secondary">{item.description}</p>
                <p>
                  <b>Price: Rs.{item.price}</b>
                </p>
              </div>
              <div className="remove-container">
                <button
                  className="btn btn-primary site-bg-primary font-weight-bold"
                  onClick={() => {
                    handleRemoveFromCart(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="item-img">
              <img
                src={item.image}
                alt={item.img}
                className="cart-img rounded"
                width={200}
              />
            </div>
          </div>
          <hr></hr>
        </div>
      );
    })
  ) : (
    <p>Nothing.</p>
  );
  return (
    <div className="container">
      <div className="cart">
        <div className="h3 my-2">You have ordered:</div>
        <hr></hr>
        <div className="collection">{addedItems}</div>
        <div>
          <button
            className="btn btn-primary site-bg-primary font-weight-bold"
            onClick={() => handlePlaceOrder()}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
