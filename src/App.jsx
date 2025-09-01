import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement";

import Hero from "./components/homepage/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Bestseller from "./components/homepage/Bestseller.jsx";
import Visit from "./components/homepage/Visit.jsx";
import Review from "./components/Review.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import Profile from "./components/profile/Profile.jsx";
import History from "./components/profile/History.jsx";
import Edit from "./components/profile/Edit.jsx";
import FloatingCartButton from "./components/FloatingCartButton.jsx";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <FloatingCartButton />
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <ScrollToHashElement />
                <Hero />
                <Bestseller />
                <Visit />
                <Review />
              </>
            }
          />

          {/* Shop & Cart */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

          {/* Halaman Profil */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile/edit" element={<Edit />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-6">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Jajanin. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
