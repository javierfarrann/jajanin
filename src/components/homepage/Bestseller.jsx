import React from 'react';

const bestSeller = {
  name: 'Crispy Snack',
  description: 'Camilan renyah favorit semua orang, cocok untuk segala suasana!',
  image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  price: 'Rp 15.000',
  originalPrice: 'Rp 20.000'
};

const Bestseller = () => {
  return (
    <section
      id="bestseller"
      className="bg-orange-50 w-full min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-row items-center justify-between w-full h-full px-24 py-20">
        {/* Gambar di kiri */}
        <div className="w-full h-auto transform rotate-3 overflow-hidden shadow-2xl">
          <img
            src={bestSeller.image}
            alt={bestSeller.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tulisan di kanan */}
        <div className="flex flex-col justify-center items-start text-left max-w-xl w-full ml-16">
          <h2 className="text-5xl font-extrabold text-orange-500 mb-4 uppercase">
            Promo Best Seller!
          </h2>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            {bestSeller.name}
          </h3>
          <p className="text-xl text-gray-700 mb-6">
            {bestSeller.description}
          </p>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl text-gray-400 font-semibold line-through">
              {bestSeller.originalPrice}
            </span>
            <span className="text-4xl font-bold text-orange-600">
              {bestSeller.price}
            </span>
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold text-lg shadow">
              Diskon 20%!
            </span>
          </div>
          <a
            href="/shop"
            className="inline-block px-10 py-4 bg-orange-500 text-white rounded-xl font-bold text-xl transition-colors duration-200 hover:bg-orange-600 shadow-lg"
          >
            Cek Toko
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestseller;
