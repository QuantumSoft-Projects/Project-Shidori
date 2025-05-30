import React, { useEffect, useState } from "react";
import axios from "axios";
import DishCard from "./DishCard";

const PopularDish = ({ kitchenId }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/meals/all") // Update with correct backend port if needed
      .then((response) => {
        const allMeals = response.data;
        const filteredMeals = allMeals
          .filter(meal => meal.kitchenId === Number(kitchenId)) // Filter meals by kitchenId
          .sort((a, b) => b.rating - a.rating); // Sort by rating descending

        setMeals(filteredMeals);
      })
      .catch((error) => console.error("Error fetching meals:", error));
  }, [kitchenId]);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {meals.length > 0 ? (
        meals.map((meal) => <DishCard key={meal.mealId} dish={meal} />)
      ) : (
        <p className="text-center text-gray-500">No popular dishes available</p>
      )}
    </div>
  );
};

export default PopularDish;
