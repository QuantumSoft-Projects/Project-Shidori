import { Search, Bell, User } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md w-full">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <div className="flex items-center gap-2 border rounded-lg px-3 py-2 w-full">
          <Search size={20} className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Search here" 
            className="w-full outline-none" 
          />
        </div>
      </div>
      
      <div className="relative">
        <button className="flex items-center gap-2" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <User size={24} />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden">
            <button className="w-full text-left p-2 hover:bg-gray-200">Profile</button>
            <button className="w-full text-left p-2 hover:bg-gray-200">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
