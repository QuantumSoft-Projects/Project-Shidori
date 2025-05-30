import React, { useEffect, useState } from "react";
import axios from "axios";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/reviews/all")
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="flex justify-between items-start p-8 gap-8 flex-wrap" id="testimonials">
      <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-2">
        {/* Review List */}
        <div className="flex flex-col gap-4">
          {reviews.map((item, index) => (
            <div
              key={item.reviewId}
              className={`flex items-center gap-10 p-4 rounded-xl shadow-md transition-all duration-300 cursor-pointer mx-12 md:mx-0 ${
                index === activeIndex ? "bg-white" : ""
              } hover:-translate-y-1 hover:shadow-lg`}
              onClick={() => handleCardClick(index)}
            >
              <div>
                <h3 className="text-lg text-gray-800">
                  {item.user?.name || "Anonymous"} <br />
                  <span className="text-sm text-gray-600">Meal ID: {item.meal?.mealId}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Active Review Details */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-gray-800">
            Customer <span className="text-orange-500">Feedback</span>
          </h2>
          {reviews.length > 0 && (
            <div className="p-6 border-l-4 border-orange-500 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl text-gray-800">{reviews[activeIndex]?.user?.name || "Anonymous"}</h4>
                  <span className="text-sm text-gray-600">Meal ID: {reviews[activeIndex]?.meal?.mealId}</span>
                </div>
                <div className="flex gap-1 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      <i
                        className={i < reviews[activeIndex].rating ? "bx bxs-star" : "bx bx-star"}
                      ></i>
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">{reviews[activeIndex]?.comment}</p>
              <p className="text-sm text-gray-400 mt-2">
                Reviewed on: {reviews[activeIndex]?.reviewDate?.split("T")[0]}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Review;
