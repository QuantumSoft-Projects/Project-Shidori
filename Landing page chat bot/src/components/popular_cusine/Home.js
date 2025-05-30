import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <h2>Welcome to Taste of India</h2>
                <p>Discover the most famous cuisines from different regions of India. Order your favorite dishes today!</p>
                <button className="explore-btn">Explore Cuisines</button>
            </div>
        </div>
    );
}

export default Home;
