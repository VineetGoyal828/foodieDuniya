import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = (item, delta) => {
    if (delta === -1) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.name === item.name) {
          return { ...cartItem, quantity: (cartItem.quantity || 1) - 1 };
        }
        return cartItem;
      }).filter((cartItem) => (cartItem.quantity || 1) > 0);

      if ((item.quantity || 1) <= 1) {
        removeFromCart(item.name);
      } else {
        console.log("Update logic needed in context to support quantity update.");
      }

    } else {
      addToCart({ ...item, quantity: 1 });
    }
  };

  const getTotal = () =>
    cartItems.reduce((sum, item) => {
      const qty = item.quantity || 1;
      return sum + item.price * qty;
    }, 0);

  return (
    <div id="cart" className="min-h-screen py-20 px-4 bg-orange-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 font-serif text-center">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    ₹{item.price} × {item.quantity || 1}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item, -1)}
                    className="bg-red-500 text-white px-3 rounded-full"
                  >
                    −
                  </button>
                  <span className="text-lg font-bold">
                    {item.quantity || 1}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item, 1)}
                    className="bg-green-500 text-white px-3 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-4">
              <h3 className="text-xl font-bold text-gray-800">
                Total: ₹{getTotal()}
              </h3>
              <button
                onClick={() => alert("Checkout Coming Soon!")}
                className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="ml-4 mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
