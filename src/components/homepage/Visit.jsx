import React from "react";

// Ganti gambar toko dengan foto street food/restoran pinggir jalan
const tokoImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"; // contoh street food

const Visit = () => {
  return (
    <section
      id="visit"
      className="flex items-center justify-center bg-white"
      style={{ width: "1440px", height: "810px", margin: "0 auto" }}
    >
      <div className="flex flex-row-reverse items-center gap-16 w-full h-full px-16 py-12">
        {/* Gambar toko besar di kanan */}
        <img
          src={tokoImage}
          alt="Toko Jajanin"
          className="w-[520px] h-[520px] object-cover rounded-3xl shadow-2xl"
        />
        {/* Teks di kiri gambar */}
        <div className="flex flex-col justify-center items-start max-w-xl mr-8 text-left">
          <h2 className="text-5xl font-extrabold mb-6 text-orange-500 drop-shadow-lg">
            KUNJUNGI TOKO KAMI!
          </h2>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Alamat Toko</h3>
          <p className="text-xl text-gray-600 mb-6">
            Jl. Jajanan No. 12, Kota Snack, Indonesia
          </p>
          <div className="mb-8">
            <span className="block text-lg font-semibold text-gray-700 mb-2">
              Jam Buka:
            </span>
            <span className="block text-base text-gray-600">
              Senin - Sabtu: 09.00 - 18.00 <br />
              Minggu: Tutup{" "}
            </span>
            <br />
            <span className="block text-lg font-semibold text-gray-700 mb-2">
              Kontak Kami:
            </span>
            <span className="text-orange-500">08xx-xxxx-xxxx</span>
          </div>
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold text-lg shadow">
            Tidak menerima order besar kecuali pesanan seminggu sebelumnya.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Visit;
