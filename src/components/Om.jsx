import React, { useState } from "react";
import {
  FaHeart,
  FaStar,
  FaShareAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

// Sample images
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import pizza1 from "../assets/pizza1.png";
import pizza2 from "../assets/pizza2.png";
import panipuri1 from "../assets/panipuri1.png";
import panipuri2 from "../assets/panipuri2.png";
import dosa1 from "../assets/dosa1.png";
import dosa2 from "../assets/dosa2.png";
import idli1 from "../assets/idli1.png";
import idli2 from "../assets/idli2.png";
import paratha1 from "../assets/paratha1.png";
import paratha2 from "../assets/paratha2.png";
import thali1 from "../assets/thali1.png";
import thali2 from "../assets/thali2.png";
import paneerNaan from "../assets/paneerNaan.png";
import curryNaan from "../assets/curryNaan.png";
import choleBhature from "../assets/choleBhature.png";
import poha from "../assets/poha.png";
import vegetablePulao from "../assets/vegetablePulao.png";
import cshewRice from "../assets/cshewRice.png";
import afganiPulao from "../assets/afganiPulao.png";
import hyderabadiBiryani from "../assets/hyderabadiBiryani.png";
import vegetableBiryani from "../assets/vegetableBiryani.png";

const menuItems = [ 
  { name: "Plain Dosa", price: 40, icon: "🥞", category: "Breakfast", image1: dosa1 },
  { name: "Masala Dosa", price: 60, icon: "🥞", category: "Breakfast", image1: dosa2 },
  { name: "Plain Steamed Idli", price: 30, icon: "🍥", category: "Breakfast", image1: idli1 },
  { name: "Idli Chutney Trio", price: 50, icon: "🍥", category: "Breakfast", image1: idli2 }, 
  { name: "Delicious Aloo Paratha", price: 40, icon: "🥙", category: "Breakfast", image1: paratha1 },
  { name: "Butter Paratha", price: 20, icon: "🥙", category: "Breakfast", image1: paratha2 }, 
  { name: "Amritsari Chole Bhature", price: 40, category: "Breakfast", image1: choleBhature }, 
  { name: "Shahi Poha", price: 60, category: "Breakfast", image1: poha }, 
  { name: "Thali-e-Khaas", price: 220, icon: "🍛", category: "Lunch", image1: thali1 },
  { name: "Shahi Bhojan Thali", price: 220, icon: "🍛", category: "Lunch", image1: thali2 }, 
  { name: "Vegetable Pulao", price: 80, icon: "🍛", category: "Lunch", image1: vegetablePulao },
  { name: "Cshew Rice", price: 140, icon: "🍛", category: "Lunch", image1: cshewRice }, 
  { name: "AfganiPulao", price: 180, icon: "🍛", category: "Lunch", image1: afganiPulao }, 
  { name: "Hyderabadi Biryani", price: 180, icon: "🍛", category: "Lunch", image1: hyderabadiBiryani }, 
  { name: "Vegetable Biryani", price: 160, icon: "🍛", category: "Lunch", image1: vegetableBiryani },
  { name: "Aloo Tikki Burger", price: 45, icon: "🍔", category: "Snacks", image1: burger1 },
  { name: "Cheese Burger", price: 65, icon: "🍔", category: "Snacks", image1: burger2 },
  { name: "Full stuffed Pizza", price: 110, icon: "🍕", category: "Snacks", image1: pizza1},
  { name: "vegy Pizza", price: 150, icon: "🍕", category: "Snacks", image1:pizza2 }, 
  { name: "Pani Puri Shots", price: 40, icon: "🟠", category: "Snacks", image1: panipuri1 },
  { name: "Puchka Platter", price: 40, icon: "🟠", category: "Snacks", image1: panipuri2 }, 
  { name: "Paneer Naan", price: 90, icon: "🥗", category: "Dinner", image1: paneerNaan },
  { name: "Curry Naan", price: 90, icon: "🥗", category: "Dinner", image1: curryNaan }, 
];

const categories = ["All", "Breakfast", "Lunch", "Snacks", "Dinner"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  // Toast state
  const [showToast, setShowToast] = useState(false);

  // Trigger toast
  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500); // Auto hide after 2s
  };

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div id="menu" className="bg-gradient-to-br from-orange-50 to-yellow-100 py-12 px-4 min-h-screen relative">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-pacifico text-amber-600">Our Menu</h2>
          <p className="text-sm text-amber-700 italic">Deliciously Categorized</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition shadow-md
              ${selectedCategory === cat ? "bg-amber-600 text-white" : "bg-white text-amber-600 border border-amber-300"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[80vh] px-1">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-orange-200 p-4 flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              <img src={item.image1} alt={item.name} className="h-32 object-contain mb-2" />
              <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-amber-600 font-semibold">₹{item.price}</p>
              <div className="flex gap-3 mt-2">
                <FaHeart className="text-red-500 text-lg cursor-pointer" />
                <FaStar className="text-yellow-500 text-lg cursor-pointer" />
                <FaShareAlt className="text-blue-500 text-lg cursor-pointer" />
              </div>

              <button
                onClick={() => {
                  triggerToast();
                  addToCart(item);
                }}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full text-sm"
              >
                Add to Cart <FaShoppingCart className="inline ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Custom Toast */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg z-50 transition-all duration-500 ease-in-out animate-bounce">
          🛒 Added to Cart!
        </div>
      )}
    </div>
  );
};

export default Menu;
