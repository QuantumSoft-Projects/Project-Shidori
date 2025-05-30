import React from "react";
import { Search, MapPin } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import freService from "../images/freeservice.png";
import gulabJamun from "../images/gulabjamun.png";
import logo from "../images/Logo.jpg";
import secondImage from "../images/secondimage.jpg";
import thaliImage from "../images/Thaliimage.png";
import thirdImage from "../images/Thirdimage.jpg";
import Tinplate from "../images/Tinplate.png"
import Tiffin from "../images/tiffin-service.avif"
import Weekoffer from "../images/weekly offer.png"
import Footer from "../Footers/Footer";
import Review from "../reviewpage/review";
import { Link } from 'react-router-dom';
import SubscriptionPage from "../subscription/Subscription.jsx"
import Finallogo from "../images/Final logo.jpg";
import Threeplateimage from "../images/Threeplateimage.png"
import Sliderimage3 from "../images/Sliderimage3.jpg"
import Nimbuimage from "../images/nimbuimage.jpg"
import meal from "../images/meal-5589923_1280.jpg"
import salad from "../images/salad-8274421_1280.jpg"
// import Menu fromm "../"
import Menu from "../Menus/Menus.jsx"




const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
   
  return (
    <div className="relative bg-white">
      {/* Navbar */}
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

     {/* Hero Section */}
<div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-end">
  {/* Text Content */}
  <div className="md:w-1/2 space-y-4">
    <div className="flex items-center space-x-2 text-orange-500 text-lg">
      <MapPin size={24} />
      <span className="font-semibold">Amravati</span>
    </div>
    <h1 className="text-4xl font-bold">
      Experience Authenticate{" "}
      <span className="text-orange-600">Indian Cuisine</span>
      <br /> Delivered to Your Doorstep
    </h1>
    <div className="flex items-center border rounded-full p-1 shadow-md bg-white w-full md:w-3/4">
      <input
        type="search"
        placeholder="Search for city, cuisine or a dish..."
        className="m-3 border-none px-4 py-4 focus:outline-none"
      />
      <button className="bg-orange-500 text-white px-4  py-2 rounded-full">
        <Search size={20} />
      </button>
    </div>
  </div>

  <div className="relative md:w-1/2 flex justify-end mt-6 md:mt-0 ">
    <div className="relative w-6/12 max-w-md">
      {/* Nimbu Image (Half visible, half hidden) */}
      <img
        src={Nimbuimage}
        alt="Lemon"
        className="absolute w-full h-full md:w-max md:h-max rounded-full bottom-[-35px] left-1/2 transform -translate-x-1/2 z-0 border-none outline-none drop-shadow-none"
      />

      {/* Thali Image (Overlapping on Nimbu) */}
      <img
        src={thaliImage}
        alt="Food Center"
        className="relative w-screen max-h-max rounded-lg z-10"
      />

      {/* Gulab Jamun Image (Top Left) */}
      <img
        src={gulabJamun}
        alt="Food 1"
        className="absolute w-32 h-24 md:w-40 md:h-28 rounded-full top-[-10px] left-[-60px]"
      />

      {/* Three Plate Image (Top Right) */}
      <img
        src="https://wallpaperaccess.com/full/767058.jpg"
        alt="Food 2"
        className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full top-[-50px] right-[-30px]"
      />
    </div>
  </div>
</div>

 {/* Chatbot Open Karne Wala Button */}
 <button
    onClick={() => {
      console.log("Open button clicked");
      const iframe = document.getElementById('landingIframe');
      const closeBtn = document.getElementById('closeIframeBtn');

      if (iframe) iframe.style.display = 'block';
      if (closeBtn) closeBtn.style.display = 'block';
    }}
    className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200 z-50"
  >
    {/* Pen Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.232 5.232l3.536 3.536M9 13l6-6m2-2a2.828 2.828 0 114 4L7 21H3v-4L17.232 3.232z"
      />
    </svg>
  </button>

  {/* Chatbot iframe overlay */}
  <iframe
    id="landingIframe"
    src="http://127.0.0.1:8080/"
    className="fixed top-0 left-0 w-full h-full z-40 backdrop-blur-sm bg-black/30"
    style={{ display: 'none', border: 'none' }}
    title="Chatbot"
  ></iframe>

  {/* Close Button - iframe ko band karne ke liye */}
  <button
    id="closeIframeBtn"
    onClick={() => {
      console.log("Close button clicked");
      const iframe = document.getElementById('landingIframe');
      const closeBtn = document.getElementById('closeIframeBtn');

      if (iframe) iframe.style.display = 'none';
      if (closeBtn) closeBtn.style.display = 'none';
    }}
    className="fixed top-4 right-4 bg-black text-white px-3 py-1 rounded z-50"
    style={{ display: 'none' }}
  >
    Close
  </button>



{/* Embedded Iframe Page
<iframe
  id="landingIframe"
  src="http://127.0.0.1:8080/"
  className="fixed top-0 left-0 w-full h-full z-40"
  style={{ display: 'none' }}
></iframe> */}

      {/* Feature Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-6">
        <div className="relative bg-green-100 rounded-lg shadow-lg overflow-hidden">
          <img src={Tiffin} alt="Tiffin Service" className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute bottom-0 bg-white/80 w-full p-4 flex justify-between items-center">
            <span className="font-semibold">Tiffin Service</span>
            <button className="text-orange-500">➜</button>
          </div>
        </div>

        <div className="relative bg-green-100 rounded-lg shadow-lg overflow-hidden">
          <img src={secondImage} alt="National Culinary" className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute bottom-0 bg-white/80 w-full p-4 flex justify-between items-center">
            <span className="font-semibold">National Culinary</span>
            <button className="text-orange-500">➜</button>
          </div>
        </div>

        <div className="relative bg-green-100 rounded-lg shadow-lg overflow-hidden">
          <img src={thirdImage} alt="Diet Tracking" className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute bottom-0 bg-white/80 w-full p-4 flex justify-between items-center">
            <span className="font-semibold">Personalized Meals & Diet Tracking</span>
            <button className="text-orange-500">➜</button>
          </div>
        </div>
      </div>
          {/* Offer Slider */}
          <br />
          <br />
           {/* Offer Slider */}
      <div className="container mx-auto px-6 py-6">
      <Slider {...sliderSettings}>
          <div className="px-2">
            <img src={freService} alt="Free Delivery Pizza" className="rounded-lg w-[600px] h-[435px]" />
          </div>
          <div className="px-2">
            <img src={Weekoffer} alt="Weekend Offer Chicken" className="rounded-lg w-[600px] h-[435px]" />
          </div>
          <div className="px-2">
            <img src={meal} alt="Weekend Offer Chicken" className="rounded-lg w-[600px] h-[435px]" />
          </div>
          <div className="px-2">
            <img src={salad} alt="Weekend Offer Chicken" className="rounded-lg w-[600px] h-[435px]" />
          </div>
        </Slider>
      </div>
      <div>
      <SubscriptionPage/>
      <Menu/>
      </div>
      <Review/>
      <Footer/>
    </div>
  );
};

export default HeroSection;