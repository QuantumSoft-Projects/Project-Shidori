import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cuisines.css";

// Existing imports
import Maharashtra from "../images/Maharashtra.png";
import Punjab from "../images/punjab.png";
import TamilNadu from "../images/tamilnadu.png";
import WestBengal from "../images/westBangal.png";
import Gujarat from "../images/gujrat.png";
import Ap from "../images/Ap.jpg";
import ArunachalPradesh from "../images/Arunachal Pradesh.jpeg";
import Assam from "../images/Assam.jpeg";


import Bihar from "../images/Bihar.jpeg";
import Chhattisgarh from "../images/Chhattisgarh.jpeg";
import Goa from "../images/Goa.jpeg";
import Haryana from "../images/Haryana.jpeg";
import HimachalPradesh from "../images/HimachalPradesh.jpeg";
import Jharkhand from "../images/Jharkhand.jpeg";
import Karnataka from "../images/Karnataka.jpeg";
import Kerala from "../images/Kerala.jpeg";
import MadhyaPradesh from "../images/MadhyaPradesh.jpeg";
import Manipur from "../images/Manipur.jpeg";
import Meghalaya from "../images/Meghalaya.jpeg";
import Mizoram from "../images/Mizoram.jpeg";
import Nagaland from "../images/Nagaland.jpeg";
import Odisha from "../images/Odisha.jpeg";
import Rajasthan from "../images/Rajasthan.jpeg";
import Sikkim from "../images/Sikkim.jpeg";
import Telangana from "../images/Telangana.jpeg";
import Tripura from "../images/Tripura.jpeg";
import UttarPradesh from "../images/UttarPradesh.jpeg";
import Uttarakhand from "../images/Uttarakhand.jpeg";


const states = [
    { id: 1, name: "Andhra Pradesh", image: Ap },
    { id: 2, name: "Arunachal Pradesh", image: ArunachalPradesh },
    { id: 3, name: "Assam", image: Assam },
    { id: 4, name: "Bihar", image: Bihar },
    { id: 5, name: "Chhattisgarh", image: Chhattisgarh },
    { id: 6, name: "Goa", image: Goa },
    { id: 7, name: "Gujarat", image: Gujarat },
    { id: 8, name: "Haryana", image: Haryana },
    { id: 9, name: "Himachal Pradesh", image: HimachalPradesh },
    { id: 10, name: "Jharkhand", image: Jharkhand },
    { id: 11, name: "Karnataka", image: Karnataka },
    { id: 12, name: "Kerala", image: Kerala },
    { id: 13, name: "Madhya Pradesh", image: MadhyaPradesh },
    { id: 14, name: "Maharashtra", image: Maharashtra },
    { id: 15, name: "Manipur", image: Manipur },
    { id: 16, name: "Meghalaya", image: Meghalaya },
    { id: 17, name: "Mizoram", image: Mizoram },
    { id: 18, name: "Nagaland", image: Nagaland },
    { id: 19, name: "Odisha", image: Odisha },
    { id: 20, name: "Punjab", image: Punjab },
    { id: 21, name: "Rajasthan", image: Rajasthan },
    { id: 22, name: "Sikkim", image: Sikkim },
    { id: 23, name: "Tamil Nadu", image: TamilNadu },
    { id: 24, name: "Telangana", image: Telangana },
    { id: 25, name: "Tripura", image: Tripura },
    { id: 26, name: "Uttar Pradesh", image: UttarPradesh },
    { id: 27, name: "Uttarakhand", image: Uttarakhand },
    { id: 28, name: "West Bengal", image: WestBengal },
];


const Menus = () => {
    const navigate = useNavigate();
    const scrollContainer = useRef(null);

    const handleStateClick = (stateName) => {
        const formattedStateName = stateName.toLowerCase().replace(/\s+/g, ""); // e.g. "Andhra Pradesh" -> "andhrapradesh"
        navigate(`/state/${formattedStateName}`);
    };

    const scroll = (direction) => {
        if (scrollContainer.current) {
            const scrollAmount = 220;
            scrollContainer.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="menus">
            {/* <h1>Menus Page</h1> */}
            {/* <img className="imgg" src="" alt="background" /> */}
            {/* <br /> */}
            {/* <h2 className="add">Explore popular cuisines</h2>
            <p className="addd">
                Discover the rich culinary heritage of India by exploring famous dishes from different states !!
            </p> */}

            <div className="cuisines">
                <br />
            <h2 className="add">Explore popular cuisines</h2>
            <p className="addd">
                Discover the rich culinary heritage of India by exploring famous dishes from different states !!
            </p>
                <h2>Select a State to Explore Its Famous Dishes</h2>
                <div className="scroll-container">
                    {/* Left Scroll Button */}
                    <button className="scroll-btn left" onClick={() => scroll("left")}>
                        &#9665;
                    </button>

                    {/* Scrollable State Cards */}
                    <div className="state-grid" ref={scrollContainer}>
                        {states.map((state) => (
                            <div
                                key={state.id}
                                className="state-card"
                                onClick={() => handleStateClick(state.name)}
                            >
                                <img src={state.image} alt={state.name} className="state-img" />
                                <p className="state-name">{state.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button className="scroll-btn right" onClick={() => scroll("right")}>
                        &#9655;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menus;
