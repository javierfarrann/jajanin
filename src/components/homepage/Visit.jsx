import React from "react";

const tokoImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

const Visit = () => {
  return (
    <section
      id="visit"
      className="bg-orange-500 w-full min-h-200 flex items-center justify-center px-6 md:px-24 py-10 md:py-20"
    >
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 w-full max-w-7xl">
        {/* Gambar */}
        <img
          src={tokoImage}
          alt="Toko Jajanin"
          className="w-full md:w-[520px] h-auto object-cover rounded-3xl shadow-2xl rotate-2"
        />

        {/* Teks */}
        <div className="flex flex-col justify-center items-start text-left w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            KUNJUNGI TOKO KAMI!
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Alamat Toko
          </h3>
          <p className="text-lg md:text-xl text-white mb-6">
            Jl. Jajanan No. 12, Kota Snack, Indonesia
          </p>
          <div className="mb-8">
            <span className="block text-base md:text-lg font-semibold text-white mb-2">
              Jam Buka:
            </span>
            <span className="block text-sm md:text-base text-white">
              Senin - Sabtu: 09.00 - 18.00 <br />
              Minggu: Tutup
            </span>
            <br />
            <span className="block text-base md:text-lg font-semibold text-white mb-2">
              Kontak Kami:
            </span>
            <span className="text-white text-sm md:text-base">
              08xx-xxxx-xxxx
            </span>
          </div>
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold text-sm md:text-lg shadow">
            Tidak menerima order besar kecuali pesanan seminggu sebelumnya.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Visit;
