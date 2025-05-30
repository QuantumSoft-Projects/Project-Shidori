import React from "react";

const DishCard = ({ dish }) => {
  if (!dish) {
    return <p className="text-center text-red-500">Dish data not available</p>;
  }

  const isAvailable = dish.availability === "available";

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-72">
      {/* Placeholder for Image */}
      {dish.image ? (
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-40 object-cover rounded-md"
        />
      ) : (
        <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-md">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      <h3 className="text-lg font-semibold mt-2">{dish.name || "Unnamed Dish"}</h3>

      <p className="text-gray-800 text-sm font-medium mt-2">Price: ₹ {dish.price ?? "N/A"}</p>

      <p className="text-gray-600 text-sm">
        Cuisine: <span className="font-medium">{dish.cuisineAdmin?.name || "Unknown"}</span>
      </p>

      {/* Availability status */}
      <div className="mt-3 flex items-center justify-end">
        <span
          className={`text-white text-xs px-2 py-1 rounded-md ${
            isAvailable ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isAvailable ? "Available" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
};

export default DishCard;
