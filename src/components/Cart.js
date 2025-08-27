import React from "react";

function Cart({ cart, removeFromCart, decreaseQuantity, addToCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container my-4">
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.name}</strong> - Rs. {item.price}
                  <br />
                  Quantity: {item.quantity}
                </div>
                <div>
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    ➖
                  </button>
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => addToCart(item)}
                  >
                    ➕
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="alert alert-info text-end">
            <h5>Total: Rs. {total}</h5>
          </div>

          <div className="text-end">
            <button className="btn btn-primary">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;
