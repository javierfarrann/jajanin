import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Ambil data keranjang dari localStorage (atau bisa dari context/global state jika sudah ada)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <section className="bg-white min-h-screen py-16">
      <h2 className="text-4xl font-bold text-orange-500 text-center mb-10">Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Keranjang kamu masih kosong.</p>
      ) : (
        <div className="max-w-3xl mx-auto px-8">
          {cart.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between bg-orange-50 rounded-xl shadow p-4 mb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-orange-200 text-orange-700 font-semibold">
                    {item.type}
                  </span>
                  <div className="text-orange-600 font-bold mt-2">{item.price}</div>
                </div>
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition"
                onClick={() => removeFromCart(idx)}
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Cart;