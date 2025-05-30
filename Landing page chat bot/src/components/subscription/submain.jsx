import React, { useState } from "react";
import SubscriptionCard from "./subcard.jsx";
import newlogo from "../Footers/newlogo.png";
import CountdownTimer from "./timer.jsx";
// import { Link } from 'react-router-dom';
import { plans } from "../../data/subscriptiondata";
import Navbar from "../Navbar/Navbar.jsx";

const SubscriptionPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1); // Set countdown for 1 day from now

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Navbar */}
  
      {/* <nav className="w-full bg-orange-600 shadow-md py-4 px-6 flex justify-between items-center">
        <img src={newlogo} alt="Logo" className="w-16" />
        <button className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul
          className={`md:flex gap-6 ${
            menuOpen ? "block" : "hidden"
          } absolute md:static bg-orange-600 w-full md:w-auto left-0 top-16 md:flex-row flex-col p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <li className="p-2"><a href="#" className="text-white">Home</a></li>
          <li className="p-2"><a href="#" className="text-white">Plans</a></li>
          <li className="p-2"><a href="#" className="text-white">Contact</a></li>
        </ul>
      </nav> */}

      {/* Header Section */}
      <div className="w-full bg-orange-500 text-white py-10 text-center flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Subscriptions</h1>
        <p className="text-lg md:text-xl mt-2">Countdown Has Already Begun</p>

        {/* Countdown Timer Component */}
        <CountdownTimer targetDate={targetDate} />

        {/* Discount Section */}
        <div className="mt-6 text-3xl md:text-4xl font-bold">
          15% <span className="text-lg md:text-2xl">OFF</span>
          <p className="text-base md:text-lg font-normal">On Every Subscription Plan Hurry Up!</p>
        </div>
      </div>

      {/* Plans Section */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-8 mt-6 md:mt-8">
        <h2 className="text-xl md:text-2xl font-semibold text-center">Choose Your Plan</h2>
        <p className="text-center text-gray-600 text-sm md:text-base">
          Enjoy delicious Indian meals with a plan that suits you best!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
          {plans.map((plan) => (
            <SubscriptionCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              buttonText="View Details"
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
