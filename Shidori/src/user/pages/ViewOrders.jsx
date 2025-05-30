import React, { useState } from "react";
import "../styles/ViewOrders.css";
import { useNavigate } from "react-router-dom";

// Format today's date like "05 Apr"
const today = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
});

const initialOrders = [
  {
    id: 1,
    image: "/images/cake.jpg",
    name: "Eggless Swiss Truffle Cake",
    quantity: 2,
    price: 300.5,
    date: today,
    time: "7:25 PM",
    status: "pending",
  },
  {
    id: 2,
    image: "/images/thali.jpg",
    name: "Mini Paneer Thali (3 Chapati)",
    quantity: 2,
    price: 400.5,
    date: "04 Apr",
    time: "6:25 PM",
    status: "delivered",
  },
  {
    id: 3,
    image: "/images/biryani.jpg",
    name: "Hyderabadi Biryani",
    quantity: 1,
    price: 250,
    date: "03 Apr",
    time: "1:30 PM",
    status: "delivered",
  },
  {
    id: 4,
    image: "/images/pavbhaji.jpg",
    name: "Pav Bhaji",
    quantity: 1,
    price: 120,
    date: today,
    time: "8:15 PM",
    status: "pending",
  },
];

const ViewOrders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const navigate = useNavigate();

  const parseDateTime = (dateStr, timeStr) => {
    const [day, month] = dateStr.split(" ");
    const months = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
    };

    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;

    return new Date(2025, months[month], parseInt(day), hours, minutes);
  };

  const sortedOrders = [...orders].sort((a, b) => {
    const dateA = parseDateTime(a.date, a.time);
    const dateB = parseDateTime(b.date, b.time);
    return dateB - dateA;
  });

  const handleCancelOrder = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "cancelled" } : order
      )
    );
  };

  const handleTrackOrder = (id) => {
    const order = orders.find((order) => order.id === id);

    if (order.date !== today) {
      alert("Tracking is only available for today's orders.");
      return;
    }

    if (order.status === "delivered") {
      alert(`This order was already delivered on ${order.date} at ${order.time}.`);
      return;
    }

    if (order.status === "cancelled") {
      alert("This order has been cancelled. Tracking is unavailable.");
      return;
    }

    navigate(`/trackOrder/${id}`);
  };

  const handleReorder = (id) => {
    navigate(`/menu/${id}`);
  };

  return (
    <div className="view-orders-page">
      <div className="main-content">
        <h2>Your Orders</h2>
        {sortedOrders.map((order) => (
          <div
            className={`order-card ${order.status === "cancelled" ? "cancelled" : ""}`}
            key={order.id}
          >
            <img src={order.image} alt={order.name} className="food-img" />
            <div className="order-info">
              <h3>{order.name}</h3>
              <p>{order.quantity} item(s)</p>
              <p>
                Order on {order.date}, {order.time}
              </p>
              <p className="price">₹ {order.price.toFixed(2)}</p>

              {order.status === "delivered" ? (
                <button onClick={() => handleReorder(order.id)}>Reorder</button>
              ) : order.status === "cancelled" ? (
                <p style={{ color: "gray", fontWeight: "bold" }}>Order Cancelled</p>
              ) : (
                <div className="order-actions">
                  {order.date === today && (
                    <button onClick={() => handleTrackOrder(order.id)}>Track Order</button>
                  )}
                  <button onClick={() => handleCancelOrder(order.id)}>Cancel Order</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewOrders;
