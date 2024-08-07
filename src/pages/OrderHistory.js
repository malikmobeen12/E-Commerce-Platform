// src/pages/OrderHistory.js
import React from "react";
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const orders = useSelector((state) => state.order.orders);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Order History</h2>
      {orders.map((order) => (
        <div key={order.id} className="border p-4 mt-4">
          <h3 className="text-lg">Order #{order.id}</h3>
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
