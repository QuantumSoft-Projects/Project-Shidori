import React, { useState } from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from "./images/logo.png"
import cheeseballs from "./images/Cheese Balls.jpg"
import chickenkabab from "./images/Chicken Kabab.jpg"
import chickenwings from "./images/Chicken Wings.jpg"
import fishfingers from "./images/Fish Fingers.jpg"
import misalpav from "./images/misalpav.jpg"
import modak from "./images/modak.jpg"
import muttonseekh from "./images/Mutton Seekh.jpg"
import puranpoli from "./images/puranpoli.jpg"




const Menu = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCuisine, setSelectedCuisine] = useState('');
    

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            section.classList.add('bg-highlight');
            setTimeout(() => {
                section.classList.remove('bg-highlight');
            }, 1000);
        }
    };

    return (
        <div className="bg-white">
            {/* Navbar */}
            <div className="navbar">
                <div className="logo">
                    <img alt="Logo" className="logo-img" src={logo}/>
                    <span className="logo-text">Taste Of India</span>
                </div>
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Explore Menu</a>
                    <a href="#">Feedback</a>
                </div>
                <div className="mobile-menu">
                    <button onClick={toggleFilters}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>

            {/* Filter Button and Section */}
            <div className="filter-section">
                <button className="filter-button" onClick={toggleFilters}>
                    Filter By
                </button>
                {showFilters && (
                    <div className="filters">
                        <div className="filter-group">
                            <label>STATE</label>
                            <select className="filter-select">
                                <option>All States</option>
                                <option>Maharashtra</option>
                                <option>Gujarat</option>
                                <option>Punjab</option>
                                <option>Tamil Nadu</option>
                                <option>Bengal</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>CITY</label>
                            <select className="filter-select">
                                <option>All Cities</option>
                                <option>Nagpur</option>
                                <option>Pune</option>
                                <option>Mumbai</option>
                                <option>Jaipur</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>CUISINES</label>
                            <select className="filter-select" onChange={(e) => {
                                setSelectedCuisine(e.target.value);
                                scrollToSection(e.target.value);
                            }}>
                                <option value="">All Cuisines</option>
                                <option value="veg-section">Veg Starters</option>
                                <option value="non-veg-section">Non-Veg Starters</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>RATINGS</label>
                            <input type="range" min="0" max="5" step="0.5" />
                            <p>Ratings: 0 - 5</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Food Sections */}
            <div className="food-section" id="veg-section">
                <h2 className="section-heading">Veg Starters</h2>
                <div className="food-grid">
                    {[
                        { name: 'cheeseballs', price: 30, ratings: 4.5 , imgSrc:cheeseballs},
                        { name: 'Modak', price: 80, ratings: 4.7 ,imgSrc:modak},
                        { name: 'Misal Pav', price: 50, ratings: 4.6 ,imgSrc:misalpav},
                        { name: 'Puran Poli', price: 40, ratings: 4.8 ,imgSrc:puranpoli}
                    ].map((item) => (
                        <div className="food-item" key={item.name}>
                            <div className="food-img-placeholder"> {/* Placeholder for image */}
                                <img alt={item.name} className="food-img" src={item.imgSrc} />
                            </div>
                            <div className="separator"></div> {/* Full-width separator line */}
                            <div className="food-info">
                                <h3>{item.name}</h3>
                                <p>Price: ₹{item.price}</p>
                                <p>Ratings: {item.ratings}</p>
                            </div>
                            <div className="food-actions">
                                <button className="order-button">Order Now</button>
                                <button className="cart-button">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="food-section" id="non-veg-section">
                <h2 className="section-heading">Non-Veg Starters</h2>
                <div className="food-grid">
                    {[
                        { name: 'Chicken Kabab', price: 200, ratings: 4.5, imgSrc:chickenkabab},
                        { name: 'Fish Fry', price: 150, ratings: 4.6 , imgSrc:fishfingers},
                        { name: 'Chicken Wings', price: 180, ratings: 4.7 , imgSrc:chickenwings},
                        { name: 'Mutton Seekh', price: 250, ratings: 4.8, imgSrc:muttonseekh }
                    ].map((item) => (
                        <div className="food-item" key={item.name}>
                            <div className="food-img-placeholder"> {/* Placeholder for image */}
                                <img alt={item.name} className="food-img" src={item.imgSrc} />
                            </div>
                            <div className="separator"></div> {/* Full-width separator line */}
                            <div className="food-info">
                                <h3>{item.name}</h3>
                                <p>Price: ₹{item.price}</p>
                                <p>Ratings: {item.ratings}</p>
                            </div>
                            <div className="food-actions">
                                <button className="order-button">Order Now</button>
                                <button className="cart-button">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;