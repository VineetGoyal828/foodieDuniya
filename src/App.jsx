import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Wws from "./components/Wws";
import Om from "./components/Om";
import Wts from "./components/Wts";
import Footer from "./components/Footer";
import Login from "./components/login";   // ✅ Login section
import Cart from "./components/cart";     // ✅ Cart section 

const App = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      
      {/* ✅ Sticky Navbar */}
      <Navbar />
      <br />

      {/* ✅ Main Sections */}
      <main className="flex-1 w-full">
        <section id="home" className="w-full">
          <Banner />
        </section>

        <section id="services" className="w-full">
          <Wws />
        </section>

        <section id="menu" className="w-full">
          <Om />
        </section>

        <section id="reviews" className="w-full">
          <Wts />
        </section>

        {/* ✅ Login and Cart Sections for SPA */}
        <section id="login" className="w-full">
          <Login />
        </section>

        <section id="cart" className="w-full">
          <Cart />
        </section>
      </main>

      {/* ✅ Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
