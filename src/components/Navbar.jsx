import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFloating(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 flex flex-row items-center px-8 py-4 bg-white transition-shadow duration-200 ${
        floating ? "fixed top-0 left-0 shadow-lg" : "shadow"
      }`}
    >
      {/* Logo di kiri */}
      <Link
        to="/"
        className="font-bold text-xl text-orange-500 px-3 py-2 rounded-md hover:bg-orange-50 transition"
      >
        Jajanin
      </Link>
      {/* Navbar button di tengah */}
      <div className="flex-1 flex justify-center">
        <ul className="flex flex-row items-center gap-8 list-none m-0 p-0">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition font-medium px-3 py-2 rounded-md duration-200 transform hover:-translate-y-1 hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-orange-500 transition font-medium px-3 py-2 rounded-md duration-200 transform hover:-translate-y-1 hover:scale-105"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/#visit"
              className="text-gray-700 hover:text-orange-500 transition font-medium px-3 py-2 rounded-md duration-200 transform hover:-translate-y-1 hover:scale-105"
            >
              Visit
            </Link>
          </li>
          <li>
            <Link
              to="/#reviews"
              className="text-gray-700 hover:text-orange-500 transition font-medium px-3 py-2 rounded-md duration-200 transform hover:-translate-y-1 hover:scale-105"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
