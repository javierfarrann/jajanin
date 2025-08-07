import React from "react";

const heroImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";

const Hero = () => {
  return (
    <main id="home" className="bg-orange-500 w-full min-h-screen">
      <section className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-24 py-10 md:py-20 gap-10">
        {/* Tulisan */}
        <div className="flex flex-col justify-center items-start text-left max-w-xl w-full">
          <h1 className="text-4xl md:text-[64px] leading-[1.1] font-extrabold text-neutral-50 mb-6 uppercase">
            Nikmati Camilan
            <br />
            Renyah Favoritmu!
          </h1>
          <p className="text-lg md:text-2xl text-neutral-50 mb-8 md:mb-10 max-w-[420px]">
            Temukan berbagai jajanan lezat dan crispy yang cocok untuk segala
            suasana. Segera coba best seller kami!
          </p>
          <a
            href="#shop"
            className="inline-block px-6 md:px-10 py-3 md:py-4 bg-white text-[#dc3f31] rounded-xl font-bold text-lg md:text-xl transition-colors duration-200 hover:bg-gray-100 shadow-lg"
          >
            Lihat Best Seller
          </a>
        </div>

        {/* Gambar */}
        <div className="w-full md:w-auto h-auto transform rotate-3 overflow-hidden shadow-2xl flex justify-center">
          <img
            src={heroImage}
            alt="Crispy Snack"
            className="w-full md:w-[520px] h-auto object-cover rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
