import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars, FaTimes, FaHome, FaUtensils, FaGift, FaSyncAlt,
  FaCog, FaSignOutAlt, FaEdit, FaSave, FaCamera, FaClipboardList
} from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const [name, setName] = useState("Jeena Doe");
  const [status, setStatus] = useState("Premium Member");
  const [address, setAddress] = useState("123 Main Street, Springfield");
  const [isEditing, setIsEditing] = useState(false);
  const [profilePic, setProfilePic] = useState("/images/Profile.jpg");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setProfilePic(imgURL);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="custom-sidebar">
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <h2 className="logo">{isOpen ? "Taste of India" : "TOI"}</h2>
          <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <div className="profile-pic-wrapper">
            <img src={profilePic} alt="User" className="profile-pic" />
            {isEditing && (
              <>
                <label htmlFor="photo-upload" className="photo-upload-label">
                  <FaCamera />
                </label>
                <input
                  type="file"
                  id="photo-upload"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="photo-input"
                />
              </>
            )}
          </div>

          {isOpen && (
            <div className="user-info">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="edit-input"
                  />
                  <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="edit-input"
                  />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="edit-input"
                    placeholder="Address"
                  />
                  <button onClick={handleSave} className="edit-btn">
                    <FaSave /> Save
                  </button>
                </>
              ) : (
                <>
                  <h3>{name}</h3>
                  <p>{status}</p>
                  <button onClick={() => setIsEditing(true)} className="edit-btn">
                    <FaEdit /> Edit
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Menu */}
        <nav className="sidebar-menu">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/"><FaHome className="icon" /> {isOpen && "Dashboard"}</Link>
            </li>
            <li className={location.pathname === "/view-orders" ? "active" : ""}>
              <Link to="/view-orders"><FaClipboardList className="icon" /> {isOpen && "View Orders"}</Link>
            </li>
            <li className={location.pathname === "/WalletSection" ? "active" : ""}>
              <Link to="/WalletSection"><FaGift className="icon" /> {isOpen && "Wallet"}</Link>
            </li>
            <li className={location.pathname === "/subscription" ? "active" : ""}>
              <Link to="/subscription"><FaSyncAlt className="icon" /> {isOpen && "Subscription"}</Link>
            </li>
            <li className={location.pathname === "/menu" ? "active" : ""}>
              <Link to="/menu"><FaUtensils className="icon" /> {isOpen && "Menu"}</Link>
            </li>
            <li className={location.pathname === "/settings" ? "active" : ""}>
              <Link to="/settings"><FaCog className="icon" /> {isOpen && "Settings"}</Link>
            </li>
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <button className="logout-btn"><FaSignOutAlt className="icon" /> {isOpen && "Logout"}</button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
