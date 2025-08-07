import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Kue Cubit",
    type: "Tradisional",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    price: "Rp 8.000",
  },
  {
    name: "Keripik Singkong",
    type: "Tradisional",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    price: "Rp 12.000",
  },
  {
    name: "Onde-onde",
    type: "Tradisional",
    image:
      "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80",
    price: "Rp 10.000",
  },
  {
    name: "Potato Chips",
    type: "Modern",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    price: "Rp 18.000",
  },
  {
    name: "Chocolate Cookies",
    type: "Modern",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    price: "Rp 20.000",
  },
  {
    name: "Donat Mini",
    type: "Modern",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    price: "Rp 15.000",
  },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <section id="shop" className="bg-white py-16 relative">
      <h2 className="text-4xl font-bold text-orange-500 text-center mb-10">
        Pilih Produk Jajanan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-orange-50 rounded-2xl shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-bold text-xl mb-2 text-gray-800">
              {product.name}
            </h3>
            <span className="text-sm mb-2 px-3 py-1 rounded-full bg-orange-200 text-orange-700 font-semibold">
              {product.type}
            </span>
            <span className="text-lg font-bold text-orange-600 mb-4">
              {product.price}
            </span>
            <button
              className="px-6 py-2 bg-orange-500 text-white rounded-lg font-bold text-base transition-colors duration-200 hover:bg-orange-600 mb-2"
              onClick={() => addToCart(product)}
            >
              Tambahkan ke Keranjang
            </button>
          </div>
        ))}
      </div>
      {/* Floating Cart Icon */}
      <button
        className="fixed bottom-8 right-8 bg-orange-500 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center z-50 hover:bg-orange-600 transition"
        onClick={() => navigate("/cart")}
        aria-label="Keranjang"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h9a1 1 0 011 1v7"
          />
        </svg>
        {cart.length > 0 && (
          <span className="absolute top-2 right-2 bg-white text-orange-500 rounded-full px-2 py-1 text-xs font-bold">
            {cart.length}
          </span>
        )}
      </button>
    </section>
  );
};

export default Shop;
