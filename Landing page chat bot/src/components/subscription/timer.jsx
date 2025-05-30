import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center mt-4 space-x-4 text-2xl font-semibold">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-white  text-orange-500 text-2xl px-4 py-2 rounded-lg">
          <p>{String(value).padStart(2, "0")}</p>
          <span className="text-sm capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
