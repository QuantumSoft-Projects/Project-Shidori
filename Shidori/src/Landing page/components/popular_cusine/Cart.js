import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { CartContext } from "./CartContext";
import "./Cart.css";

function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext); // ✅ Use clearCart
    const navigate = useNavigate(); // ✅ Hook for redirection

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // ✅ Handle checkout and redirect to Home.js
    const handleCheckout = () => {
        clearCart(); // ✅ Clear the cart instead of using setCart([])
        navigate("/home"); // ✅ Redirect to Home.js page
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-img" />
                                <div className="cart-details">
                                    <p className="cart-name">{item.name}</p>
                                    <p className="cart-price">₹{item.price}</p>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-total">
                        <p><strong>Total:</strong> ₹{totalPrice}</p>
                        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
