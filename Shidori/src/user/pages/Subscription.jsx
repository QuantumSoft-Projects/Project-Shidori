import React, { useState, useEffect } from "react";
import "../styles/Subscription.css";

const plans = [
  {
    name: "Basic",
    price: 500,
    description: "Perfect for single meal service."
  },
  {
    name: "Standard",
    price: 1000,
    description: "Includes lunch and dinner, free delivery, all-day meal service."
  },
  {
    name: "Premium",
    price: 2000,
    description: "Includes breakfast, lunch, dinner daily with full-day meal service."
  }
];

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [expiryDate, setExpiryDate] = useState(null);

  useEffect(() => {
    if (expiryDate && new Date() > new Date(expiryDate)) {
      setIsSubscribed(false);
      setActivePlan(null);
    }
  }, [expiryDate]);

  const handleSubscribe = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30);
    setExpiryDate(expiry);
    setIsSubscribed(true);
    setActivePlan(selectedPlan);
  };

  return (
    <div className="subscription-container">
      <h1 className="page-title">Subscription</h1>
      {isSubscribed && activePlan ? (
        <div className="active-plan-section">
          <div className="active-card">
            <h2 className="active-header">Your Plan is Active</h2>
            <h3 className="plan-name">{activePlan.name} Plan</h3>
            <p className="plan-desc">{activePlan.description}</p>
            <p className="price">Rs. {activePlan.price}</p>
            <p className="validity">Valid until: {expiryDate?.toLocaleDateString()}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="plans-section">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card ${selectedPlan?.name === plan.name ? "selected" : ""}`}
              >
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <p className="price">Rs. {plan.price}</p>
                <button
                  className="select-button"
                  onClick={() => setSelectedPlan(plan)}
                >
                  {selectedPlan?.name === plan.name ? "Selected" : "Select"}
                </button>
              </div>
            ))}
          </div>

          {selectedPlan && (
            <div className="payment-form">
              <h2>Payment Details</h2>
              <label>
                Payment Method:
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="Card">Card</option>
                  <option value="UPI">UPI</option>
                </select>
              </label>

              {paymentMethod === "UPI" && (
                <label>
                  UPI ID:
                  <input type="text" placeholder="example@upi" required />
                </label>
              )}

              {paymentMethod === "Card" && (
                <>
                  <label>
                    Card Number:
                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" required />
                  </label>
                  <label>
                    CVV:
                    <input type="password" placeholder="***" required />
                  </label>
                </>
              )}

              <button className="pay-btn" onClick={handleSubscribe}>
                Pay Rs. {selectedPlan.price}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Subscription;
