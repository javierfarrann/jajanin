import React from "react";

const heroImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";

const Hero = () => {
  return (
    <main id="home" className="bg-orange-500 w-full min-h-screen">
      <section className="flex flex-row items-center justify-between w-full h-full px-24 py-20">
        {/* Tulisan di kiri */}
        <div className="flex flex-col justify-center items-start text-left max-w-xl w-full">
          <h1 className="text-[80px] leading-[1.1] font-extrabold text-neutral-50 mb-6 uppercase">
            Nikmati Camilan<br />Renyah Favoritmu!
          </h1>
          <p className="text-2xl text-neutral-50 mb-10 max-w-[420px]">
            Temukan berbagai jajanan lezat dan crispy yang cocok untuk segala
            suasana. Segera coba best seller kami!
          </p>
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-white text-[#dc3f31] rounded-xl font-bold text-xl transition-colors duration-200 hover:bg-gray-100 shadow-lg"
          >
            Lihat Best Seller
          </a>
        </div>

        {/* Gambar di kanan, dimiringkan */}
        <div className="w-full h-auto transform rotate-3 overflow-hidden shadow-2xl">
          <img
            src={heroImage}
            alt="Crispy Snack"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
