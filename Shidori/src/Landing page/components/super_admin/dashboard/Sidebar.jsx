import { Home, User, Settings, Calendar, Utensils, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-full md:w-64 bg-gray-100 h-screen p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Taste Of India</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="flex items-center gap-2 p-2 bg-orange-500 text-white rounded">
          <Home size={20} /> Dashboard
        </Link>
        <Link to="/kitchen_reg" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <User size={20} /> Registration
        </Link>
        <Link to="/admin_details" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <User size={20} /> Admin Details
        </Link>
        <Link to="/admin_details" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <Cloud size={20} /> Cloud Kitchens
        </Link>
        <Link to="/menus" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <Utensils size={20} /> Menus
        </Link>
        <Link to="/calendar" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <Calendar size={20} /> Calendar
        </Link>
        <Link to="/settings" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <Settings size={20} /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
