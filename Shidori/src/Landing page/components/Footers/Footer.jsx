import React from 'react';
import newlogo from './newlogo.png';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-white py-20 px-8 flex flex-col items-center md:items-start md:flex-row justify-between">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <img src={newlogo} alt="Logo" className="mr-3" />
            <h3 className="text-black text-lg font-bold"></h3>
          </div>
          <p className="text-sm mb-6">
            Experience the rich flavors of India <br /> delivered right to your doorstep!
          </p>
          <h4 className="font-semibold text-lg mb-3">Social Links</h4>
          <div className="flex space-x-3 justify-center md:justify-start">
            <a href="#" className="p-2 bg-gray-800 text-white rounded-full"><FaFacebook /></a>
            <a href="#" className="p-2 bg-gray-800 text-white rounded-full"><FaTwitter /></a>
            <a href="#" className="p-2 bg-gray-800 text-white rounded-full"><FaLinkedin /></a>
          </div>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 md:mt-0 text-center md:text-left">
          <div>
            <h4 className="font-semibold text-lg mb-3">Company</h4>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">About Us</a>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">Blog</a>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">All Products</a>
            <a href="#" className="block text-sm hover:text-orange-500">Locations Map</a>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Services</h4>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">Order tracking</a>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">Wish List</a>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">My account</a>
            <a href="#" className="block text-sm hover:text-orange-500">Terms & Conditions</a>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Support</h4>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">FAQ</a>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">Policy</a>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">Business</a>
            <a href="#" className="block text-sm hover:text-orange-500">Support Career</a>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Contact</h4>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">WhatsApp</a>
            <a href="#" className="block text-sm mb-2 hover:text-orange-500">Support 24</a>
            <a href="#" className="block text-sm hover:text-orange-500">Quick Chat</a>
          </div>
        </div>
      </footer>

      <div className="bg-orange-500 py-4 text-white text-center text-sm">
        <p>Copyright © 2025 Taste Of India</p>
        <p>Created QuantumSoft Interns</p>
      </div>
    </>
  );
}

export default Footer;
