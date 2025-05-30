import { Link } from 'react-router-dom';


export default function Navbar(){
    return (
        <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="flex items-center space-x-2">
          <img src={Finallogo} alt="Logo" className="w-25 h-20" />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-black"><Link to={"/hero"}>Home</Link></a>
          <a href="#" className="text-gray-600 hover:text-black">Services</a>
          <a href="#" className="text-gray-600 hover:text-black"><Link to={"/sub"}>Subscriptions</Link></a>
          <a href="#" className="text-gray-600 hover:text-black">Menu</a>
          <a href="#" className="text-gray-600 hover:text-black">
            Offers <sup className="text-red-500 font-bold">NEW</sup>
          </a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg"><Link to={"/login"}>Sign In</Link></button>
        </div>
      </nav>  
    )
}