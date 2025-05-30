import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaBars, FaTimes, FaUserCircle, FaBell, FaSearch, FaMoon, FaSun,
  FaHome, FaUtensils, FaShoppingCart, FaSignOutAlt, FaUser, FaEnvelope, FaPhone, FaLock
} from "react-icons/fa";

const SidebarNavbar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Admin User",
    email: "admin@tasteofindia.com",
    phone: "+1 (555) 123-4567",
    role: "Administrator"
  });
  const [formData, setFormData] = useState({...profileData});
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New order received", time: "5 min ago", read: false },
    { id: 2, text: "Inventory running low", time: "1 hour ago", read: false },
    { id: 3, text: "Staff meeting at 3 PM", time: "2 hours ago", read: true }
  ]);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.notification-dropdown') && !event.target.closest('.notification-bell')) {
        setShowNotifications(false);
      }
      if (!event.target.closest('.profile-dropdown') && !event.target.closest('.profile-icon') && !event.target.closest('.profile-form')) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Logout handler
  const handleLogout = () => {
    // Clear user authentication (in a real app, this would involve clearing tokens/cookies)
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    // Redirect to login page
    navigate('/login');
    
    console.log("User logged out successfully");
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setProfileData({...formData});
    setShowProfileForm(false);
    // In a real app, you would send this data to your backend
    console.log("Profile updated:", formData);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md p-4 flex justify-between items-center z-50 transition-colors duration-300`}>
        {/* Sidebar Toggle Button */}
        <button className="md:hidden text-2xl" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Title & Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-11 max-h-12 w-11 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            TOI
          </div>
          <h1 className="text-xl font-bold">Taste Of India</h1>
        </div>

        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className={`border p-2 rounded-md pl-8 focus:outline-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'}`}
            />
            <FaSearch className="absolute left-2 top-3 text-gray-500" />
          </div>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="text-xl cursor-pointer hover:text-orange-300 transition-colors duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          {/* Notifications Bell */}
          <div className="relative notification-bell">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-xl cursor-pointer hover:text-orange-300 relative"
            >
              <FaBell />
              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {/* Notifications dropdown */}
            {showNotifications && (
              <div className={`absolute right-0 mt-2 w-64 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} rounded-md shadow-lg overflow-hidden z-50 notification-dropdown`}>
                <div className="p-2 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold">Notifications</h3>
                  <button 
                    className="text-xs text-blue-500 hover:text-blue-700"
                    onClick={() => setNotifications(notifications.map(n => ({...n, read: true})))}
                  >
                    Mark all as read
                  </button>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`p-3 border-b ${notification.read ? '' : (darkMode ? 'bg-gray-600' : 'bg-blue-50')}`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <p className="text-sm">{notification.text}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    ))
                  ) : (
                    <p className="p-3 text-sm text-center">No notifications</p>
                  )}
                </div>
                <Link to="/notifications" className="block p-2 text-center text-sm text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600">
                  View all notifications
                </Link>
              </div>
            )}
          </div>
          
          {/* User Profile */}
          <div className="relative profile-icon">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="text-2xl cursor-pointer hover:text-orange-300"
            >
              <FaUserCircle />
            </button>
            
            {/* Profile dropdown */}
            {showProfile && !showProfileForm && (
              <div className={`absolute right-0 mt-2 w-48 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} rounded-md shadow-lg profile-dropdown z-50`}>
                <div className="p-3 border-b border-gray-200">
                  <p className="font-semibold">{profileData.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{profileData.email}</p>
                </div>
                <button 
                  onClick={() => setShowProfileForm(true)}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Edit Profile
                </button>
                <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  Settings
                </Link>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Logout
                </button>
              </div>
            )}
            
            {/* Profile Form */}
            {showProfile && showProfileForm && (
              <div className={`absolute right-0 mt-2 w-80 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} rounded-md shadow-lg profile-form z-50`}>
                <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold">Edit Profile</h3>
                  <button 
                    onClick={() => setShowProfileForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                </div>
                <form onSubmit={handleProfileSubmit} className="p-4">
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                      <FaUser className="inline mr-2" /> Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white'}`}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                      <FaEnvelope className="inline mr-2" /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white'}`}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                      <FaPhone className="inline mr-2" /> Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white'}`}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      <FaLock className="inline mr-2" /> Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white'}`}
                    />
                    <p className="text-xs text-gray-500 mt-1">Leave blank to keep current password</p>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowProfileForm(false)}
                      className="px-4 py-2 border rounded text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar - No Gradient */}
      <div className={`fixed top-0 left-0 h-full w-64 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:w-64 z-40 transition-colors`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button className="md:hidden" onClick={toggleSidebar}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="p-4 space-y-4">
          {/* Dashboard Section with Dropdown */}
          <div>
            <button 
              className={`flex justify-between w-full items-center p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-300'} rounded transition-colors`}
              onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            >
              <span className="flex items-center space-x-2">
                <FaHome /> 
                <span>
                  <Link to="/" className={`block ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-300'} p-2 rounded`}>
                    Dashboard
                  </Link>
                </span>
              </span>
            </button>
          </div>

          {/* Categories Section */}
          <h3 className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-semibold mt-4`}>Categories</h3>
          <Link to="/orders" className={`flex items-center space-x-2 p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-300'} rounded transition-colors`}>
             <FaShoppingCart /><span>Orders Management</span>
          </Link>
          
          {/* Labels Section */}
          <h3 className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-semibold mt-4`}>Labels</h3>
          <Link to="/ManageDishes" className={`flex items-center space-x-2 p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-300'} rounded transition-colors`}>
            <FaUtensils /> <span>Manage Dishes</span>
          </Link>
          <Link to="/grocerymanagement" className={`flex items-center space-x-2 p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-300'} rounded transition-colors`}>
            <FaUtensils /> <span>Grocery Management</span>
          </Link>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-4 left-4 w-56">
          <button 
            onClick={handleLogout}
            className={`flex items-center space-x-2 p-2 text-red-600 ${darkMode ? 'hover:bg-red-900' : 'hover:bg-red-200'} rounded w-full transition-colors`}
          >
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
        
      </div>
    </>
  );
};

export default SidebarNavbar;