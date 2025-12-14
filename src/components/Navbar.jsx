import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHome,
  FaUtensils,
  FaListAlt,
  FaQuoteLeft,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, scroller } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState(""); 

  const menuItems = [
    { icon: <FaHome />, text: "Home", target: "home" },
    { icon: <FaUtensils />, text: "Services", target: "services" },
    { icon: <FaListAlt />, text: "Menu", target: "menu" },
    { icon: <FaQuoteLeft />, text: "Reviews", target: "reviews" },
  ];

  const handleSearch = () => {
    const target = searchText.toLowerCase().replace(/\s+/g, "");
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -70,
    });
  };

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg rounded-full 
      px-3 sm:px-4 md:px-4 lg:px-8 py-2 md:py-3 w-[95%] sm:w-[97%] md:w-[90%] max-w-7xl flex items-center justify-between 
      backdrop-blur-md border border-white/20 z-50"
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
          <FaUtensils className="text-xl text-white animate-pulse" />
        </div>
        <h1 className="text-xl cursor-pointer font-pacifico lg:text-2xl md:text-sm font-bold text-black">
          Foodie's <span className="text-orange-800 ml-2">DuNiyA</span>
        </h1>
      </div>

      {/* Center Navigation */}
      <div className="hidden md:flex space-x-4 lg:space-x-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.target}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-2 text-black hover:text-orange-600 transition-all duration-300 cursor-pointer"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-base font-semibold md:text-sm">{item.text}</span>
          </Link>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        {/* Desktop Search */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-28 md:w-32 lg:w-48 border border-gray-300 rounded-full py-1 pl-3 pr-10 text-sm 
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
          />
          <FaSearch
            onClick={handleSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:scale-110 transition-transform text-base cursor-pointer"
          />
        </div>

        {/* Cart Icon */}
        <Link
          to="cart"
          smooth={true}
          duration={500}
          offset={-70}
          className="p-2 md:text-sm bg-white/20 rounded-full hover:bg-white/30 transition-all focus:outline-none cursor-pointer"
        >
          <FaShoppingCart className="text-lg text-white" />
        </Link>

        {/* Login Icon */}
        <Link
          to="login"
          smooth={true}
          duration={500}
          offset={-70}
          className="hidden sm:flex items-center justify-center p-2 bg-gradient-to-br from-yellow-300 to-orange-400 
            rounded-full hover:shadow-lg hover:scale-105 transition-all focus:outline-none cursor-pointer"
        >
          <FaUser className="text-white text-lg" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-yellow-300 transition-all focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-red-500 
          to-orange-600 rounded-2xl shadow-xl mt-3 mx-4 transition-all duration-300 transform 
          ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`}
      >
        <div className="p-4 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.target}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center space-x-3 text-white hover:bg-white/20 
                px-4 py-3 rounded-xl transition-all focus:outline-none cursor-pointer"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-lg">{item.text}</span>
            </Link>
          ))}

          {/* Mobile Search */}
          <div className="sm:hidden">
            <div className="flex items-center bg-white/20 rounded-full px-3 w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                    setIsOpen(false);
                  }
                }}
                className="w-full bg-transparent border-0 text-white py-1 flex-1 focus:outline-none text-sm"
              />
              <FaSearch
                onClick={() => {
                  handleSearch();
                  setIsOpen(false);
                }}
                className="text-white/80 cursor-pointer"
              />
            </div>
          </div>

          {/* Mobile Login */}
          <Link
            to="login"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="w-full sm:hidden flex items-center justify-center space-x-2 bg-gradient-to-br 
              from-yellow-300 to-orange-400 px-4 py-2 rounded-full hover:shadow-lg transition-all 
              focus:outline-none cursor-pointer"
          >
            <FaUser className="text-white" />
            <span className="font-semibold text-white text-base">Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
