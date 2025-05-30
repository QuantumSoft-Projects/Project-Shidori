import React from "react";
import { useNavigate } from "react-router-dom";
import "./cuisines.css";

const states = [
    { id: 1, name: "Maharashtra", image: require("./assets/Maharashtra.png") },
    { id: 2, name: "Punjab", image: require("./assets/punjab.png") },
    { id: 3, name: "TamilNadu", image: require("./assets/tamilnadu.png") },
    { id: 4, name: "WestBengal", image: require("./assets/westBangal.png") },
    { id: 5, name: "Gujarat", image: require("./assets/gujrat.png") }
];

function Cuisines() {
    const navigate = useNavigate();

    const handleStateClick = (stateName) => {
        navigate(`/state/${stateName.toLowerCase()}`); // Redirect to state page
    };

    return (
        <div className="cuisines">
            <h2>Select a State to Explore Its Famous Dishes</h2>
            <div className="state-grid">
                {states.map((state) => (
                    <div key={state.id} className="state-card" onClick={() => handleStateClick(state.name)}>
                        <img src={state.image} alt={state.name} className="state-img" />
                        <p className="state-name">{state.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cuisines;
