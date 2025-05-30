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
import loggo from "../images/logoo.png";
import Threeplateimage from "../images/Threeplateimage.png"
import Sliderimage3 from "../images/Sliderimage3.jpg"
import Nimbuimage from "../images/nimbuimage.jpg"
import meal from "../images/meal-5589923_1280.jpg"
import salad from "../images/salad-8274421_1280.jpg"
// import Menu from "../Menus/Menus.jsx"


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
                <img src={loggo} alt="Logo" className="w-25 h-20" />
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-black"><Link to={"/hero"}>Home</Link></a>
                <a href="#" className="text-gray-600 hover:text-black">Services</a>
                <a href="#" className="text-gray-600 hover:text-black"><Link to={"/sub"}>Subscriptions</Link></a>
                <a href="#" className="text-gray-600 hover:text-black"><Link to={"/menuexplore"}>Menu</Link></a>
                <a href="#" className="text-gray-600 hover:text-black"><Link to={"/menus"}>
                  Offers <sup className="text-red-500 font-bold">NEW</sup></Link>
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
                  Experience Authentic{" "}
                  <span className="text-orange-600">Indian Cuisine</span>
                  <br /> Delivered to Your Doorstep
                </h1>
                <div className="flex items-center border rounded-full shadow-md bg-white w-full md:w-3/5 justify-between">
                  <input
                    type="search"
                    placeholder="Search for city, cuisine or a dish..."
                    className=" border-none  focus:outline-none"
                  />
                  <button className="bg-orange-500 text-white px-4  py-2   rounded-full">
                    <Search size={20} />
                  </button>
                </div>
              </div>
      
              <div className="relative md:w-1/2 flex justify-end mt-6 md:mt-0 ">
                <div className="relative w-6/12 max-w-md">
                  {/* Nimbu Image (Aadha dikhne aur aadha hide hone ke liye) */}
                  <img
                    src={Nimbuimage}
                    alt="Lemon"
                    className="absolute w-full h-full md:w-max md:h-max rounded-full bottom-[-35px] left-1/2 transform -translate-x-1/2 z-0 border-none outline-none drop-shadow-none"
                  />
      
                  {/* Thali Image (Nimbu ke upar overlap ke liye) */}
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


      {/* Feature Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-6">
        <div className="relative bg-green-100 rounded-lg shadow-lg overflow-hidden">
          <img src={Tiffin} alt="Tiffin Service" className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute bottom-0 bg-white/80 w-full p-4 flex justify-between items-center">
            <span className="font-semibold left-[160px] ">Delivery Service</span>
            {/* <button className="text-orange-500">➜</button> */}
          </div>
        </div>

        <div className="relative bg-green-100 rounded-lg shadow-lg overflow-hidden">
          <img src={secondImage} alt="National Culinary" className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute bottom-0 bg-white/80 w-full p-4 flex justify-between items-center">
            <span className="font-semibold">Subscription </span>
            {/* <button className="text-orange-500">➜</button> */}
          </div>
        </div>

        <div className="relative bg-green-100 rounded-lg shadow-lg overflow-hidden">
          <img src={thirdImage} alt="Diet Tracking" className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute bottom-0 bg-white/80 w-full p-4 flex justify-between items-center">
            <span className="font-semibold">Personalized Meals</span>
            {/* <button className="text-orange-500">➜</button> */}
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
      </div>
      <Review/>
      <Footer/>
    </div>
  );
};

export default HeroSection;
