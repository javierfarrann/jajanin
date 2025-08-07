import React from "react";

const bestSeller = {
  name: "Crispy Snack",
  description:
    "Camilan renyah favorit semua orang, cocok untuk segala suasana!",
  image:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  price: "Rp 15.000",
  originalPrice: "Rp 20.000",
};

const Bestseller = () => {
  return (
    <section
      id="bestseller"
      className="bg-orange-50 w-full min-h-screen flex items-center justify-center px-6 md:px-24 py-10 md:py-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full max-w-7xl">
        {/* Gambar */}
        <div className="w-full md:w-1/2 transform rotate-3 overflow-hidden shadow-2xl">
          <img
            src={bestSeller.image}
            alt={bestSeller.name}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Teks */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4 uppercase">
            Promo Best Seller!
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            {bestSeller.name}
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            {bestSeller.description}
          </p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xl md:text-2xl text-gray-400 font-semibold line-through">
              {bestSeller.originalPrice}
            </span>
            <span className="text-2xl md:text-3xl font-bold text-orange-600">
              {bestSeller.price}
            </span>
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold text-sm md:text-lg shadow">
              Diskon 20%!
            </span>
          </div>
          <a
            href="/shop"
            className="inline-block px-8 py-3 bg-orange-500 text-white rounded-xl font-bold text-lg transition-colors duration-200 hover:bg-orange-600 shadow-lg"
          >
            Cek Toko
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestseller;
