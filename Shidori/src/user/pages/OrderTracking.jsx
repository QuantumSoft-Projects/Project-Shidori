import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaBox,
  FaMotorcycle,
  FaHome,
  FaPhone,
} from "react-icons/fa";
import "../styles/OrderTracking.css";
import foodImage from "/images/food.jpg"; // Add your image in assets folder

// import axios from "axios"; // Uncomment when connecting to backend

const OrderTracking = () => {
  const [isCancelled, setIsCancelled] = useState(false); // Cancellation state
  const [orderData, setOrderData] = useState({
    orderId: "12345",
    status: "Shipped",
    times: ["10:00 AM", "10:30 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
    foodImage: foodImage, // Image for order
    date: "2025-04-02",
    time: "09:45 AM",
    orderName: "Paneer Butter Masala",
    discount: 50,
    totalPrice: 450,
    customerName: "John Doe",
    address: "123 Main Street, Cityville",
    phone: "9876543210",
    carrier: "FoodExpress",
    estimatedArrival: "30 mins",
    contactNumber: "1800-123-456",
  });

  // Simulate fetching order from backend
  useEffect(() => {
    // axios.get("http://localhost:8080/api/orders/latest")
    //   .then(response => setOrderData(response.data))
    //   .catch(error => console.error("Error fetching order details:", error));
  }, []);

  // Handle cancellation
  const handleCancel = () => {
    // axios.post("http://localhost:8080/api/orders/cancel", { orderId: orderData.orderId })
    //   .then(() => setIsCancelled(true))
    //   .catch(error => console.error("Error cancelling order:", error));
    setIsCancelled(true);
  };

  const statuses = ["Ordered", "Accepted", "Packed", "Shipped", "Delivered"];
  const icons = [FaShoppingCart, FaCheckCircle, FaBox, FaMotorcycle, FaHome];

  const currentIndex = statuses.indexOf(
    isCancelled ? "Cancelled" : orderData.status
  );
  const progressWidth = `${(currentIndex / (statuses.length - 1)) * 100}%`;

  return (
    <div className="order-tracking-page">
      {/* Order ID Tag */}
      <div className="order-id">
        <strong>Order ID: {orderData.orderId}</strong>
      </div>

      {/* Section 1 - Progress Tracker */}
      <section className="section">
      <h2 className="bold-text">Order Tracking</h2>
        <div className="progress-container">
          {/* Labels */}
          <div className="labels">
            {statuses.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>

          {/* Progress Bar */}
          <div className={`progress-bar ${isCancelled ? "cancelled" : ""}`}>
            <div className="line"></div>
            <div className="filled-line" style={{ width: progressWidth }}></div>
            {statuses.map((_, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className={`dot ${
                    isCancelled ? "cancelled" : index <= currentIndex ? "active" : ""
                  }`}
                >
                  <Icon />
                </div>
              );
            })}
          </div>

          {/* Time Labels */}
          <div className="times">
            {orderData.times.map((time, index) => (
              <span key={index} className="time-label">
                {time}
              </span>
            ))}
          </div>
        </div>

        {/* Cancel Button */}
        <div className="buttons">
          {!isCancelled && (
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel Order
            </button>
          )}
        </div>

        {/* Cancel Message */}
        {isCancelled && (
          <div className="cancel-message">
            <p>Your order has been cancelled.</p>
          </div>
        )}
      </section>

      {/* Section 2 - Order Details */}
      <section className="section">
      <h2 className="bold-text">Order Details</h2>
        <div className="details-container">
          {/* Image */}
          <div className="order-image">
            <img src={orderData.foodImage} alt="Order" />
          </div>

          {/* Column 1 */}
          <div className="column">
            <p><strong>Date:</strong> {orderData.date}</p>
            <p><strong>Time:</strong> {orderData.time}</p>
            <p><strong>Order Name:</strong> {orderData.orderName}</p>
            <p><strong>Discount:</strong> ₹{orderData.discount}</p>
            <p><strong>Total Price:</strong> ₹{orderData.totalPrice}</p>
          </div>

          {/* Column 2 */}
          <div className="column">
            <p><strong>Customer Name:</strong> {orderData.customerName}</p>
            <p><strong>Address:</strong> {orderData.address}</p>
            <p><strong>Phone:</strong> {orderData.phone}</p>
          </div>
        </div>

        {/* Extra Details */}
        <div className="extra-details">
          <p><strong>Carrier:</strong> {orderData.carrier}</p>
          <p><strong>Your Order is Arriving in:</strong> {orderData.estimatedArrival}</p>
          <p>
            <strong>Contact Us: </strong>{" "}
            <a href={`tel:${orderData.contactNumber}`}>
              {orderData.contactNumber}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default OrderTracking;
