import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">Taste of India</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cuisines">Cuisines</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
