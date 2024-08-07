// src/pages/ShoppingCart.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">Your Shopping Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/products" className="mt-4 inline-block text-blue-500">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="border p-4 mt-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-cover"
          />
          <h3 className="text-lg">{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
      <Link to="/checkout" className="mt-4 inline-block text-blue-500">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default ShoppingCart;
