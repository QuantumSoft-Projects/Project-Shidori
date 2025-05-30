import { FaUtensils, FaDrumstickBite, FaShoppingCart } from "react-icons/fa";
import { GiNoodles, GiCookingPot, GiTomato, GiCupcake, GiCoffeeCup } from "react-icons/gi";
import { useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const categories = [
    { name: "Signature Dishes", icon: <FaUtensils color="#5A5A5A" size={30} /> },
    { name: "Street Food & Snacks", icon: <GiNoodles color="#FF9800" size={30} /> },
    { name: "Biryani & Rice Specialties", icon: <GiCookingPot color="#B9770E" size={30} /> },
    { name: "Vegetarian Favorites", icon: <GiTomato color="#FF574A" size={30} /> },
    { name: "Non-Vegetarian Delicacies", icon: <FaDrumstickBite color="#D32F2F" size={30} /> },
    { name: "Indian Desserts & Sweets", icon: <GiCupcake color="#F06292" size={30} /> },
    { name: "Beverages & Traditional Drinks", icon: <GiCoffeeCup color="#8D6E63" size={30} /> },
  ];

  const bestSellingDishes = [
    { name: "Butter Chicken", price: "₹14.99", img: "/images/butter-chicken.jpg", discount: "20% Off" },
    { name: "Paneer Butter Masala", price: "₹12.49", img: "/images/paneer-butter-masala.jpg", discount: "15% Off" },
    { name: "Dhokla", price: "₹16.99", img: "/images/Dhokla.jpg", discount: "18% Off" },
    { name: "Gulab Jamun", price: "₹5.99", img: "/images/gulabjamun.jpg", discount: "10% Off" },
    { name: "Masala Chai", price: "₹3.49", img: "/images/masalachai.jpg", discount: "5% Off" },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart([...cart, dish]);
    alert(`${dish.name} added to cart!`);
  };

  return (
    <div className="dashboard">
      {/* Discount Card */}
      <div className="dashboard-discount-card">
        <div className="dashboard-discount-text">
          <h2 className="dashboard-discount-heading">Get Discount Voucher Up To 20%</h2>
          <p className="dashboard-discount-subtext">Enjoy discounts on your favorite meals. Limited time offer!</p>
        </div>
        <img src="/images/Promo.png" alt="Promo" className="dashboard-promo-img" />
      </div>

      {/* Category Section */}
      <div className="dashboard-category-section">
        <h2 className="dashboard-category-heading">Categories</h2>
        <div className="dashboard-category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="dashboard-category-item">
              <div className="dashboard-category-icon">{cat.icon}</div>
              <p className="dashboard-category-name">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Selling Dishes Section */}
      <div className="dashboard-popular-dishes">
        <h2 className="dashboard-section-heading">Best Selling Dishes</h2>
        <div className="dashboard-dishes-grid">
          {bestSellingDishes.map((dish, index) => (
            <div key={index} className="dashboard-dish-card">
              <span className="dashboard-discount-badge">{dish.discount}</span>
              <img src={dish.img} alt={dish.name} className="dashboard-dish-img" />
              <h3 className="dashboard-dish-name">{dish.name}</h3>
              <p className="dashboard-dish-price">{dish.price}</p>
              <button className="dashboard-add-to-cart" onClick={() => addToCart(dish)}>
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
