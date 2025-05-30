import React, { useState } from "react";
import { FaSearch, FaDownload, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterState, setFilterState] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const managers = [
    { name: "MS Dhoni", kitchen: "Biryani House", city: "Amravati", state: "Maharashtra", status: "Active" },
    { name: "Rohit Sharma", kitchen: "Taste of South", city: "Mysuru", state: "Karnataka", status: "Inactive" },
    { name: "Virat Kohli", kitchen: "Khamaas Veg", city: "Delhi", state: "Delhi", status: "Active" },
    { name: "Suresh Raina", kitchen: "Tandoori House", city: "Lucknow", state: "Uttar Pradesh", status: "Active" },
    { name: "Jasprit Bumrah", kitchen: "Punjabi Tadka", city: "Amritsar", state: "Punjab", status: "Active" },
  ];

  const filteredManagers = managers.filter((manager) => {
    return (
      manager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manager.kitchen.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Details</h2>

      {/* Stats Section */}
      <div className="flex gap-4 mb-4">
        <div className="bg-orange-500 text-white p-4 rounded-lg w-1/2 flex justify-between">
          <span className="font-bold text-lg">Total Managers</span>
          <span className="text-xl font-bold">250</span>
        </div>
        <div className="bg-orange-500 text-white p-4 rounded-lg w-1/2 flex justify-between">
          <span className="font-bold text-lg">Total Cloud Kitchens</span>
          <span className="text-xl font-bold">250</span>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search Cloud kitchen or Manager..."
          className="border p-2 w-full rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <FaDownload /> Download List
        </button>
      </div>

      <div className="flex gap-4 mb-4">
        <select
          className="border p-2 rounded-md w-1/3"
          value={filterState}
          onChange={(e) => setFilterState(e.target.value)}
        >
          <option value="">State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Delhi">Delhi</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Punjab">Punjab</option>
        </select>
        <select
          className="border p-2 rounded-md w-1/3"
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
        >
          <option value="">City</option>
          <option value="Amravati">Amravati</option>
          <option value="Mysuru">Mysuru</option>
          <option value="Delhi">Delhi</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Amritsar">Amritsar</option>
        </select>
        <select
          className="border p-2 rounded-md w-1/3"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Data Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Cloud Kitchen</th>
            <th className="border p-2">City</th>
            <th className="border p-2">State</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredManagers.map((manager, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">
                <Link to={`/manager-details/${manager.name}`} className="text-blue-500 underline">
                  {manager.name}
                </Link>
              </td>
              <td className="border p-2">{manager.kitchen}</td>
              <td className="border p-2">{manager.city}</td>
              <td className="border p-2">{manager.state}</td>
              <td className={`border p-2 ${manager.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                {manager.status}
              </td>
              <td className="border p-2">
                <button className="text-blue-500"><Link to="/editadmin" ><FaEdit /></Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDetails;