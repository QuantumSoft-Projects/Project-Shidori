import React, { useState } from "react";

const SubscriptionCard = ({ title, price, description, buttonText, features }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Subscription Card */}
      <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg text-center shadow-md">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-2xl font-semibold text-orange-500 mt-4">{price}</p>

        {/* View Details Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
        >
          {buttonText}
        </button>
      </div>

      {/* Modal (Popup) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            <p className="text-gray-700 text-center">{description}</p>

            {/* Features List */}
            <ul className="mt-4 text-gray-600 text-sm">
              {features.map((feature, index) => (
                <li key={index} className="text-[15px] font-semibold flex items-center">
                  ✅ {feature}
                </li>
              ))}
              
            </ul>
            
            <button className="ml-[114px] mt-[14px] bg-[#ff6500] text-white p-2 rounded-[23px]">Subscribe Now</button>
          </div>
          
        </div>
      )}
    </>
  );
};

export default SubscriptionCard;
