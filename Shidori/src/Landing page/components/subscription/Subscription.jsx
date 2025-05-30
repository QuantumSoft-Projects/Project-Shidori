import React, { useState } from "react";
import SubscriptionCard from "./subcard.jsx";
import LogoImage from "./logo.jpg";
import CountdownTimer from "./timer.jsx";
import { Link } from 'react-router-dom';

const SubscriptionPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1); // Set countdown for 1 day from now

  return (
    <div className="min-h-fit bg-gray-100 flex flex-col items-center p-4 min-w-full">
      {/* Plans Section */}
      <div className="w-full bg-orange-500 text-white py-10 text-center flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold">Subscriptions Plans</h1>
      <p className="text-lg md:text-xl mt-2">Countdown Has Already Begun</p>

      <CountdownTimer targetDate={targetDate} />

      <div className="mt-3 text-3xl md:text-4xl font-bold  ">
      15% <span className="text-lg md:text-2xl">OFF</span>
       <p className="text-base md:text-lg font-normal">On Every Subscription Plan Hurry Up!</p>
      </div>

      {/* Updated h2 with new styles */}
      <h2 className="text-2xl bg-white text-orange-500 md:text-2xl font-semibold text-center mt-4 w-[170px] p-1 rounded-xl cursor-pointer">
        <Link to={"/sub"}> View Plans </Link>
      </h2>
     </div>

    
    </div>
  );
};

export default SubscriptionPage;
