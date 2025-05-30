import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const BestSellingCuisines = () => {
  const [cuisines, setCuisines] = useState([]);
  const [filters, setFilters] = useState({
    state: "",
    city: "",
    rating: "",
    search: "",
    sort: "orders"
  });
  const [availableStates, setAvailableStates] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/api/cuisines/best-selling", {
      params: filters
    }).then((res) => {
      setCuisines(res.data);
    });
  }, [filters]);

  useEffect(() => {
    axios.get("http://localhost:9090/api/cloud-kitchens/all").then((res) => {
      const states = [...new Set(res.data.map(k => k.state))];
      const cities = [...new Set(res.data.map(k => k.city))];
      setAvailableStates(states);
      setAvailableCities(cities);
    });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFilters({
      state: "",
      city: "",
      rating: "",
      search: "",
      sort: "orders"
    });
  };

  return (
    <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto mt-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Best Selling Cuisines
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {/* State */}
        <select
          name="state"
          value={filters.state}
          onChange={handleFilterChange}
          className="border p-2 rounded-md"
        >
          <option value="">State</option>
          {availableStates.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>

        {/* City */}
        <select
          name="city"
          value={filters.city}
          onChange={handleFilterChange}
          className="border p-2 rounded-md"
        >
          <option value="">City</option>
          {availableCities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>

        {/* Rating */}
        <select
          name="rating"
          value={filters.rating}
          onChange={handleFilterChange}
          className="border p-2 rounded-md"
        >
          <option value="">Rating</option>
          <option value="4.5">4.5+</option>
          <option value="4.0">4.0+</option>
          <option value="3.5">3.5+</option>
        </select>

        {/* Sort */}
        <select
          name="sort"
          value={filters.sort}
          onChange={handleFilterChange}
          className="border p-2 rounded-md"
        >
          <option value="orders">Most Ordered</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Search & Clear */}
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <div className="flex items-center border p-2 rounded-md shadow-sm w-full sm:w-[250px] bg-white">
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            placeholder="Search cuisines..."
            className="w-full outline-none"
          />
          <FaSearch className="text-gray-500" />
        </div>

        <button
          onClick={handleClear}
          className="flex items-center gap-2 text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
        >
          Clear Filters <ImCross />
        </button>
      </div>

      {/* Cuisine Cards */}
     {/* Meal Cards */}
<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
  {cuisines.length > 0 ? (
    cuisines.flatMap((cuisine) =>
      cuisine.meals?.map((meal) => (
        <div
          key={meal.mealId}
          className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
        >
          <h2 className="text-lg font-semibold mb-1">{meal.name}</h2>
          <p className="text-gray-600 text-sm mb-1">₹{meal.price}</p>
          <p className={`text-sm ${meal.availability === "Available" ? "text-green-600" : "text-red-500"}`}>
            {meal.availability}
          </p>
        </div>
      ))
    )
  ) : (
    <p className="text-center text-gray-500 col-span-full">No meals found for selected filters.</p>
  )}
</div>

    </div>
  );
};

export default BestSellingCuisines;
