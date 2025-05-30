import { useState } from "react";
import { User, Settings, Bell, Home, Phone, Mail, MapPin, Camera } from "lucide-react";
import logo from "./newlogo.png";
import { Link } from 'react-router-dom';


const UpdateAdminDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    altPhone: "",
    address: "",
    photo: "",
    role:"Admin(Role)",
    Created_At:"",
    ifsc:"",
    bank_ac:"",
    status:"",
    kitchenId: "KITCHEN-12345"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Updated Admin Details:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-orange-600 bg-opacity-90 shadow-md p-4 flex justify-between items-center w-full">
        <img src={logo} alt="Taste of India Logo" className="h-10" />
        <nav className="hidden md:flex gap-5 text-white">
          <button className="flex items-center gap-2 hover:text-gray-300">
          <Home /> <Link to={"/hero"}>  Home</Link>
          </button>
          <button className="flex items-center gap-2 hover:text-gray-300">
            <Settings /> Settings
          </button>
          <button className="flex items-center gap-2 hover:text-gray-300">
            <Bell /> Notifications
          </button>
        </nav>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white text-gray-800 p-6 min-h-screen shadow-md">
          <h2 className="text-xl font-bold text-orange-600">Admin Panel</h2>
          <nav className="mt-4 flex flex-col gap-4">
            <button className="hover:text-orange-600"><Link to={'/admin_dashboard'}>Dashboard</Link></button>
            <button className="hover:text-orange-600">
              Kitchen Management
            </button>
            <button className="hover:text-orange-600">Offer Management</button>
            <button className="hover:text-orange-600">Staff Management</button>
            <button className="hover:text-orange-600">Settings</button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Kitchen Info */}
          <section className="mt-4 text-gray-700">
            <h3 className="text-lg font-semibold">
              Cloud Kitchen ID: {formData.kitchenId}
            </h3>
            <p>Address: {formData.address || "Not Provided"}</p>
          </section>

          {/* Form Section */}
          <section className="max-w-4xl bg-white rounded-2xl shadow-md p-6 border border-orange-300 mt-6 w-full">
            <h2 className="text-2xl font-bold text-orange-600">
              Update Manager Details
            </h2>

            {/* Upload Photo Section */}
            <div className="flex flex-col items-center mt-4">
              {formData.photo && (
                <img
                  src={formData.photo}
                  alt="Admin"
                  className="h-24 w-24 rounded-full border"
                />
              )}
              <label className="flex items-center gap-2 cursor-pointer text-orange-600 mt-2">
                <Camera /> Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </label>
            </div>
              <br />
              <p>Registration No:#123456</p>

            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Admin Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
                unique
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                name="altPhone"
                placeholder="Alternate Phone Number"
                value={formData.altPhone}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="role"
                placeholder="Owner/Manager"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="ifsc"
                placeholder="IFSC Code"
                value={formData.ifsc}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                name="bank_ac"
                placeholder="Bank Account Number"
                value={formData.bank_ac}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="datetime-local"
                name="Created_At"
                placeholder="Created At"
                value={formData.Created_At}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <br /><br />
              <label for="status">Status:</label>
              <select id="status" name="status" value={formData.status} className="w-full p-2 border rounded-lg"  required>
                <option value="Active" className="bg-green-400">Active</option>
                <option value="Inactive" className="bg-red-400">Inactive</option>
              </select>

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              <button onSubmit={handleSubmit} className="bg-orange-600 text-white p-2 rounded-lg w-full">
                Update Details
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UpdateAdminDetails;
