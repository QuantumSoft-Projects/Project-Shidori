import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./StateCuisines.css";


// Sample dishes for each state
const stateDishes = {
    maharashtra: [
        { id: 1, name: "Pav Bhaji", image: require("../assets/pavbhaji.png"), calories: "400 kcal" },
        { id: 2, name: "Vada Pav", image: require("../assets/vadapav.png"), calories: "300 kcal" }
    ],
    punjab: [
        { id: 1, name: "Butter Chicken", image: require("../assets/butterchicken.png"), calories: "600 kcal" },
        { id: 2, name: "Chole Bhature", image: require("../assets/cholebhature.png"), calories: "550 kcal" }
    ],
    tamilnadu: [
        { id: 1, name: "Dosa", image: require("../assets/dosa.png"), calories: "350 kcal" },
        { id: 2, name: "Idli", image: require("../assets/idli.png"), calories: "150 kcal" }
    ],
    westbengal: [
        { id: 1, name: "Rasgulla", image: require("../assets/Rasgulla.png"), calories: "250 kcal" },
        { id: 2, name: "Mishti Doi", image: require("../assets/mishtidoi.png"), calories: "200 kcal" }
    ],
    gujarat: [
        { id: 1, name: "Dhokla", image: require("../assets/dhokala.png"), calories: "200 kcal" },
        { id: 2, name: "Thepla", image: require("../assets/thepla.png"), calories: "300 kcal" }
    ]
};

function StateCuisines() {
    const { stateName } = useParams();
    const navigate = useNavigate();
    const dishes = stateDishes[stateName] || [];

    return (
        <div className="state-cuisines">
            <h2>Famous Dishes of {stateName.charAt(0).toUpperCase() + stateName.slice(1)}</h2>
            <div className="dishes-grid">
                {dishes.map((dish) => (
                    <div key={dish.id} className="dish-card">
                        <img src={dish.image} alt={dish.name} className="dish-img" />
                        <div className="dish-info">
                            <h3>{dish.name}</h3>
                            <p>Calories: {dish.calories}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default StateCuisines;
