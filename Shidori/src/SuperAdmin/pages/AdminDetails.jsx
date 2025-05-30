import React, { useState, useEffect} from "react";
import { FaDownload, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ImCross } from "react-icons/im";
const AdminDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterState, setFilterState] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [managers, setManagers] = useState([]);
  const [availableStates, setAvailableStates] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);
  const [kitchens, setKitchens] = useState([]);
  const navigate = useNavigate();
  // const managers = [
  //   { id: 1, name: "MS Dhoni", kitchen: "Biryani House", city: "Amravati", state: "Maharashtra", status: "Active" },
  //   { id: 2, name: "Rohit Sharma", kitchen: "Taste of South", city: "Mysuru", state: "Karnataka", status: "Inactive" },
  //   { id: 3, name: "Virat Kohli", kitchen: "Khamaas Veg", city: "Delhi", state: "Delhi", status: "Active" },
  //   { id: 4, name: "Suresh Raina", kitchen: "Tandoori House", city: "Lucknow", state: "Uttar Pradesh", status: "Active" },
  //   { id: 5, name: "Jasprit Bumrah", kitchen: "Punjabi Tadka", city: "Amritsar", state: "Punjab", status: "Active" },
  // ];
  useEffect(() => {
    fetch("http://localhost:9090/api/managers/all") // Change URL as per your backend server
      .then((response) => response.json())
      .then((data) => setManagers(data))
      .catch((error) => console.error("Error fetching managers:", error));

       // Fetch cloud kitchens
  fetch("http://localhost:9090/api/cloud-kitchens/all")
    .then((response) => response.json())
    .then((data) => {
      const states = [...new Set(data.map(k => k.state))];
      const cities = [...new Set(data.map(k => k.city))];
      setAvailableStates(states);
      setAvailableCities(cities);
      setKitchens(data)})
    .catch((error) => console.error("Error fetching cloud kitchens:", error));

      
  }, []);

  // *Updated Filtering Logic*
  const filteredManagers = managers.filter((manager) => {
    const kitchen = kitchens.find(k => String(k.kitchenId) === String(manager.cloudKitchenId));
  const kitchenName = kitchen ? kitchen.kitchenName.toLowerCase() : "";
  const city = kitchen ? kitchen.city : "";
  const state = kitchen ? kitchen.state : "";

    return (
      (searchTerm === "" || manager.name.toLowerCase().includes(searchTerm.toLowerCase()) || kitchenName.includes(searchTerm.toLowerCase())) &&
      (filterState === "" || state === filterState) &&
      (filterCity === "" || city === filterCity) &&
      (filterStatus === "" || manager.status === filterStatus)
    );
  });

  const handleDownload = () => {
    const headers = ["ID,Name,Cloud Kitchen,City,State,Status"];
    const data = managers.map((manager) => {
      const kitchen = kitchens.find(k => String(k.kitchenId) === String(manager.cloudKitchenId));
      const kitchenName = kitchen?.kitchenName || "N/A";
      const city = kitchen?.city || "N/A";
      const state = kitchen?.state || "N/A";
      return `${manager.id},${manager.name},${kitchenName},${city},${state},${manager.status}`;
    });
    const csvContent = [headers, ...data].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "AdminDetails.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilterState("");
    setFilterCity("");
    setFilterStatus("");
  };
 
  const handleEditClick = (manager) => {
    navigate(`/update-manager/${manager.managerId}`,{
      state: {
        ...manager,
        kitchenDetails: kitchens, // <-- include cloud kitchen info
      },
    })
  }

  //total manager count and count of cloud kitchen
  const totalManagers = managers.length;
  const totalCloudKitchens = new Set(managers.map((m) => m.cloudKitchenId)).size;

  const toggleStatus = (managerId) => {
    const updatedManagers = managers.map((manager) => {
      if (manager.managerId === managerId) {
        const newStatus = manager.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
        toast.success(`Manager status changed to ${newStatus}`);
        return {
          ...manager,
          status: newStatus,
        };
      }
      return manager;
    });
  
    setManagers(updatedManagers);
  };
  
  


  return (
    <div className="mt-10 bg-gray-100 max-w-6xl">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Admin Details</h2>
      {/* Stats Section */}
      <div className="flex gap-6 mb-6 mx-auto w-3/4 justify-center">
        <div className="bg-orange-500 text-white p-6 rounded-lg w-1/2 shadow-md flex justify-between items-center">
          <span className="font-semibold text-lg">Total Managers</span>
          <span className="text-2xl font-bold">{totalManagers}</span>
        </div>
        <div className="bg-orange-500 text-white p-6 rounded-lg w-1/2 shadow-md flex justify-between items-center">
          <span className="font-semibold text-lg">Total Cloud Kitchens</span>
          <span className="text-2xl font-bold">{totalCloudKitchens}</span>
        </div>
      </div>
      <div className="flex gap-4 mb-6 mx-auto w-3/4 justify-between">
        <div className="w-96">

          <input
            type="text"
            placeholder="Search Cloud kitchen or Manager..."
            className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <button
            className="mt-auto bg-green-600 hover:bg-green-700 text-white rounded-lg px-5 py-3 shadow-md flex items-center gap-2 transition-all duration-200 justify-center font-bold"
            onClick={handleDownload}
          >
            <FaDownload /> Download List
          </button>

        </div>
      </div>


      <div className="flex gap-4 mb-6 mx-auto w-3/4 flex-col lg:flex-row">
        <div className="relative w-80">
          <select className="w-full p-3 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
            value={filterState}
            onChange={(e) => {
              setFilterState(e.target.value);
              setFilterCity("");
              setFilterStatus(""); // 👈 Reset city
            }}>
            <option value="">State</option>
            {availableStates.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 w-5 h-5 text-gray-600 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="relative w-80">
          <select
            className="w-full p-3 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
            value={filterCity}
            onChange={(e) => {setFilterCity(e.target.value)
              setFilterStatus(""); // 👈 Reset status
            }}
          >
            <option value="">City</option>
            
  {availableCities.map((city) => (
    <option key={city} value={city}>{city}</option>
  ))}
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 w-5 h-5 text-gray-600 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="relative w-80">

          <select className="w-full p-3 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="">Status</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 w-5 h-5 text-gray-600 transform -translate-y-1/2 pointer-events-none" />
        </div>

        <button
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg shadow-md mt-auto flex items-center justify-center gap-2 w-80 font-bold"
          onClick={handleClearFilters}>
          Clear All
          <span className="font-bold ">

            <ImCross />
          </span>
        </button>

      </div>

      <div className="mx-auto w-3/4 bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border p-3">ID</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Cloud Kitchen</th>
              <th className="border p-3">City</th>
              <th className="border p-3">Country</th>
              <th className="border p-3">Status</th>
              {/* <th className="border p-3">Edit</th> */}
            </tr>
          </thead>
          <tbody>
  {filteredManagers.length === 0 ? (
    <tr>
      <td colSpan="7" className="text-center py-4 text-gray-500">
        No managers found
      </td>
    </tr>
  ) : (
    [...filteredManagers]
      .sort((a, b) => a.cloudKitchenId - b.cloudKitchenId).map((manager) => {
      const kitchen = kitchens.find(k => String(k.kitchenId) === String(manager.cloudKitchenId));


      return (
        <tr key={manager.id} className="text-center hover:bg-gray-100 transition-all">
          <td className="border p-3">{manager.cloudKitchenId}</td>
          <td className="border p-3 font-medium">
            <Link to={`/manager-details/${encodeURIComponent(manager.name)}`} className="text-blue-600 hover:underline">
              {manager.name}
            </Link>
          </td>
          <td className="border p-3">{kitchen ? kitchen.kitchenName : "N/A"}</td>
          <td className="border p-3">{kitchen ? kitchen.city : "N/A"}</td>
          <td className="border p-3">{kitchen ? kitchen.state : "N/A"}</td>
          <td
  className={`border p-3 font-semibold cursor-pointer ${
    manager.status === "ACTIVE" ? "text-green-600" : "text-red-600"
  }`}
  onClick={() => toggleStatus(manager.managerId)}
>
  {manager.status === "ACTIVE" ? "Active" : "Inactive"}
</td>

          {/* <td className="border p-3">
            <button className="text-blue-600 hover:text-blue-800" onClick={() => handleEditClick(manager)}>
              <FaEdit />
            </button>
          </td>  */}
        </tr>
      );
    })
  )}
</tbody>



        </table>
      </div>
    </div>
  );
};

export default AdminDetails;