import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext.js";
import cuisines from "./cuisines_data.js";
import "./CuisineDetail.css";

function CuisineDetail() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    const dish = cuisines.find((c) => c.id === parseInt(id));

    if (!dish) return <h2 className="not-found">Cuisine not found!</h2>;

    const handleAddToCart = () => {
        addToCart(dish);
        navigate("/cart");
    };

    return (
        <div className="cuisine-detail">
            <div className="detail-container">
                {/* Image Section */}
                <div className="image-container">
                    <img src={dish.image} alt={dish.name} />
                </div>

                {/* Information Section */}
                <div className="info-container">
                    <h2>{dish.name}</h2>
                    
                    {/* Veg/Non-Veg Indicator */}
                    <p className={`dish-type ${dish.type === "Veg" ? "veg" : "non-veg"}`}>
                        <strong>Type:</strong> {dish.type} {dish.type === "Veg" ? "🟢" : "🔴"}
                    </p>

                    <p className="state"><strong>State Origin:</strong> {dish.state}</p>
                    <p className="description"><strong>Description:</strong> {dish.description}</p>
                    <p className="calories"><strong>Calories:</strong> {dish.calories}</p>
                    <p className="rating"><strong>Rating:</strong> ⭐ {dish.rating}</p>
                    <p className="price"><strong>Price:</strong> ₹{dish.price}</p>

                    {/* Buttons */}
                    <div className="buttons">
                        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                        <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CuisineDetail;






