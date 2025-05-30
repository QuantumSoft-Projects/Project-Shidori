import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Trash } from "lucide-react";
import { IoArrowBackOutline } from "react-icons/io5";

const ManagerDetail = () => {
  const { name:managerName } = useParams();
  const [manager, setManager] = useState(null);
  const [kitchen, setKitchen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchManagerDetails = async () => {
      try {
        const res = await fetch("http://localhost:9090/api/managers/all");
        const data = await res.json();
        const normalizedParamName = decodeURIComponent(managerName)
  .replace(/\s+/g, " ") // replace multiple spaces with one
  .trim()
  .toLowerCase();
  const matchedManager = data.find((m) =>
    m.name?.replace(/\s+/g, " ").trim().toLowerCase() === normalizedParamName
  );
  console.log("Route param:", normalizedParamName);
data.forEach((m) =>
  console.log("Checking:", m.name?.replace(/\s+/g, " ").trim().toLowerCase())
);


        console.log("Matched manager:", matchedManager);

        if (!matchedManager) {
          setError("Manager not found.");
          setLoading(false);
          return;
        }

        setManager(matchedManager);

        const kitchenRes = await fetch(
          "http://localhost:9090/api/cloud-kitchens/all"
        );
        const kitchenData = await kitchenRes.json();

        const matchedKitchen = kitchenData.find(
          (k) =>
            String(k.kitchenId) ===
            String(matchedManager.cloudKitchenId)
        );

        setKitchen(matchedKitchen || null);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Something went wrong while fetching manager details.");
        setLoading(false);
      }
    };

    fetchManagerDetails();
  }, [managerName]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-600 text-lg font-medium">
        Loading manager details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10 text-lg font-semibold">
        {error}
      </div>
    );
  }
  // const handleDelete = async () => {
  //   const confirmDelete = window.confirm("Are you sure you want to delete this manager?");
  //   if (!confirmDelete) return;
  
  //   try {
  //     const res = await fetch(`http://localhost:9090/api/managers/${manager.name}`, {
  //       method: "DELETE",
  //     });
  
  //     if (!res.ok) throw new Error("Delete failed");
  
  //     alert("Manager deleted successfully!");
  //     // Redirect back to admin details
  //     window.location.href = "/admin-details";
  //   } catch (err) {
  //     console.error("Delete error:", err);
  //     alert("Failed to delete manager");
  //   }
  // };
  
  return (
    <div className="min-h-screen w-full p-4 flex flex-col items-center mt-10">
      <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-xl border border-gray-200 relative ">
        <Link
          to="/admin-details"
          className="absolute top-4 left-4 text-black text-2xl"
        >
          <IoArrowBackOutline />
        </Link>

        <div className="flex items-center justify-between mb-6 mt-10 pl-44">
          <div className="flex space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-3xl font-bold text-white">👤</span>
            </div>
            <div className="">
              <h2 className="text-2xl font-bold text-gray-800">
                {manager?.name}
              </h2>
              <p className="text-gray-600">
                Manager at{" "}
                <span className="font-semibold">
                  {kitchen?.kitchenName || "Kitchen not found"}
                </span>
              </p>
              <p className="text-gray-500 text-sm">
                {kitchen?.city || "City not available"},{" "}
                {kitchen?.state || "State not available"}
              </p>
            </div>
          </div>
          {/* <button className="flex items-center bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
          onClick={handleDelete}>
            <Trash className="w-4 h-4 mr-1" /> Delete
          </button> */}
        </div>

        <div className="space-y-3 text-gray-700 text-sm pl-44">
          <p>
            <strong>Email:</strong> {manager?.email}
          </p>
          <p>
            <strong>Phone No.:</strong> {manager?.phone}
          </p>
          <p>
            <strong>Bank Account No.:</strong>{" "}
            {manager?.bankAccountNumber || "N/A"}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {manager?.createdAt
              ? new Date(manager.createdAt).toLocaleDateString()
              : "N/A"}
          </p>
          <p className="flex items-center">
            <strong>Status:</strong>
            <span
              className={`ml-2 px-3 py-1 text-sm font-semibold rounded-full shadow-md ${
                manager?.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {manager?.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagerDetail;
