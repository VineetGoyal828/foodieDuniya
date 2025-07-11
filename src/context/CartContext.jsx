import React, { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Hook to use the cart
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    console.log("Added to cart: ", item); 
  };

  const removeFromCart = (itemName) => {
    setCartItems((prevItems) => prevItems.filter(item => item.name !== itemName));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
