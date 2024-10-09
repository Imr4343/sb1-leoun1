import React, { useState } from 'react';
import './Cart.css';

export default function Cart({ cart, removeFromCart }) {
  const [showCart, setShowCart] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
        🛒 Cart ({cart.length})
      </button>
      {showCart && (
        <div className="cart-dropdown">
          <h3>Your Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
              <div className="cart-total">
                <strong>Total: ${totalPrice.toFixed(2)}</strong>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}