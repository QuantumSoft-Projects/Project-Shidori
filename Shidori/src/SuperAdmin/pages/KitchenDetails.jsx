import { useParams } from "react-router-dom";
// import kitchens from "../data/kitchensData"; // Import kitchens data
import PopularDish from "../components/PopularDish";
import { IoLocation } from "react-icons/io5";
import { FcManager } from "react-icons/fc";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import Review from "../components/Review";
import {Link} from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import CloudKitchenImage from "/images/taste-of-india.webp"
import axios from "axios";
const KitchenDetails = () => {
  const [kitchensData, setKitchens] = useState([]); // State to store kitchens data
  // Fetch Cloud Kitchens from API
 useEffect(() => {
  axios
    .get("http://localhost:9090/api/cloud-kitchens/all") // Call your API
    .then((response) => {
      setKitchens(response.data); // Store kitchens in state
      console.log(response.data)
    })
    .catch((error) => console.error("Error fetching kitchens:", error));
}, []);

  const { id } = useParams();  // Get the kitchenId from the URL
  const kitchens = kitchensData.find(k => k.kitchenId === parseInt(id));
  if (!kitchens) {
    return <p className="text-gray-500">Kitchen not found.</p>;
  }

  return (
    <div className="">
      <div>
      <Link to={`/cloud-kitchens/`} state={{ kitchens }} className="text-3xl px-4 py-2 text-black">
        <IoArrowBackOutline />
      </Link>
      </div>
      <div className="p-4 max-w-4xl mx-auto flex flex-col md:flex-row gap-20 ">
        <div>

          <img src={CloudKitchenImage} alt="Cloud Kitchen Image" className="w-96 h-64 object-cover rounded-md shadow-lg" />
        </div>
        <div className="">

          <h1 className="text-3xl font-bold mb-5 mt-5">{kitchens.kitchenName}</h1>
          {/* <p className="text-gray-600 text-lg mb-1 flex items-center gap-2">Manager ID: {kitchens.managerId}</p> */}
          <p className="text-gray-600 text-lg mb-1 flex items-center gap-2">Cloud kitchens ID: {kitchens.kitchenId} </p>
          <p className="text-gray-600 text-lg mb-1 flex items-center gap-2">
            <IoLocation />
            Address: {kitchens.location}, {kitchens.city}, {kitchens.state}</p>
          <p className="text-gray-600 text-lg mb-1 flex items-center gap-2"> <FcManager /> Administrated by {kitchens.managerName}</p>
          <p className="text-gray-600 text-lg mb-1 flex items-center gap-2"><FaRegThumbsUp /> Rating: ⭐ {kitchens?.rating ?? 0}</p>
          <p className="text-gray-600 text-lg flex items-center gap-2"> <FaCalendarAlt /> Operating Time:{" "}
  {typeof kitchens.operatingTime === "string"
    ? kitchens.operatingTime
    : `${kitchens.operatingTime?.open || "N/A"} - ${kitchens.operatingTime?.close || "N/A"}`} </p>
        </div>
      </div>

      <div className="">
        <div className="text-center mt-5 text-3xl font-bold">
          <h1>Most Popular Dishes</h1>
          <PopularDish kitchenId={id} />
        </div>
        <div className="p-0 md:p-5">
        <Review />
        </div>
      </div>
    </div>
  );
};

export default KitchenDetails;
