import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]); // Create a state for cart items

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]); //  Add item to cart
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index)); //  Remove item by index
    };

    const clearCart = () => {
        setCart([]); //  Function to clear the cart
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
