import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const userImage = "https://i.pravatar.cc/150?img=3"; // foto profil contoh

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
      {/* Logo */}
      <Link
        to="/"
        className="font-bold text-xl text-orange-500 px-3 py-2 rounded-md hover:bg-orange-50 transition"
      >
        Jajanin
      </Link>

      {/* Desktop Menu */}
      <div className="flex-1 hidden md:flex justify-center">
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
            <a
              href="/#visit"
              className="text-gray-700 hover:text-orange-500 transition font-medium px-3 py-2 rounded-md duration-200 transform hover:-translate-y-1 hover:scale-105"
            >
              Visit
            </a>
          </li>
          <li>
            <a
              href="/#reviews"
              className="text-gray-700 hover:text-orange-500 transition font-medium px-3 py-2 rounded-md duration-200 transform hover:-translate-y-1 hover:scale-105"
            >
              Reviews
            </a>
          </li>
        </ul>
      </div>

      {/* Avatar Dropdown */}
      <div
        className="relative ml-4"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <img
          src={userImage}
          alt="User"
          className="w-10 h-10 rounded-full cursor-pointer border-2 border-orange-500"
        />

        {/* Dropdown menu */}
        <div
          className={`absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-[999] transition-all duration-200 ${
            dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            👤 Profile
          </Link>
          <Link
            to="/cart"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            🛒 Cart
          </Link>
          <Link
            to="/history"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            📜 History
          </Link>
          <Link
            to="/profile/edit"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            ✏️ Edit Profile
          </Link>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="ml-4 md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link
                to="/"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <a
                href="/#visit"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Visit
              </a>
            </li>
            <li>
              <a
                href="/#reviews"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Reviews
              </a>
            </li>
            <li>
              <Link
                to="/profile"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                History
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
