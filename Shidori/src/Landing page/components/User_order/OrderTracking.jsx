import { useState } from "react";
import { Home, Settings, Bell, CheckCircle, Clock, MapPin } from "lucide-react";

const OrderTracking = () => {
  const [orderStatus, setOrderStatus] = useState("Out for Delivery");
  const orderDetails = {
    orderId: "ORDER-98765",
    estimatedTime: "30 mins",
    deliveryAddress: "123 Street, City, State, ZIP",
    statusSteps: ["Order Placed", "Preparing", "Out for Delivery", "Delivered"],
    currentStep: 2,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-orange-600 bg-opacity-90 shadow-md p-4 flex justify-between items-center w-full">
        <img src="/path-to-logo.png" alt="Taste of India Logo" className="h-10" />
        <nav className="hidden md:flex gap-6 text-white">
          <button className="flex items-center gap-2 hover:text-gray-300"><Home /> Home</button>
          <button className="flex items-center gap-2 hover:text-gray-300"><Settings /> Settings</button>
          <button className="flex items-center gap-2 hover:text-gray-300"><Bell /> Notifications</button>
        </nav>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white text-gray-800 p-6 min-h-screen border-r">
          <h2 className="text-xl font-bold">Order Tracking</h2>
          <nav className="mt-4 flex flex-col gap-4">
            <button className="hover:text-orange-600">Dashboard</button>
            <button className="hover:text-orange-600">My Orders</button>
            <button className="hover:text-orange-600">Support</button>
            <button className="hover:text-orange-600">Settings</button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <section className="max-w-4xl bg-white rounded-2xl shadow-md p-6 border border-orange-300 w-full">
            <h2 className="text-2xl font-bold text-orange-600">Order Tracking</h2>
            <p className="text-gray-600 mt-1">Order ID: {orderDetails.orderId}</p>
            <p className="text-gray-600">Estimated Delivery Time: {orderDetails.estimatedTime}</p>
            <p className="text-gray-600 flex items-center gap-2"><MapPin /> {orderDetails.deliveryAddress}</p>

            {/* Order Status Tracker */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Current Status: {orderStatus}</h3>
              <div className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-6">
                {orderDetails.statusSteps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                    {index <= orderDetails.currentStep ? (
                      <CheckCircle className="text-orange-600" />
                    ) : (
                      <Clock className="text-gray-400" />
                    )}
                    <span className={index <= orderDetails.currentStep ? "text-orange-600 font-semibold" : "text-gray-500"}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
