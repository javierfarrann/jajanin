import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement";

import Hero from "./components/homepage/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Bestseller from "./components/homepage/Bestseller.jsx";
import Visit from "./components/homepage/Visit.jsx";
import Review from "./components/Review.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
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
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <footer className="bg-gray-100 text-center py-6">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Jajanin. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
