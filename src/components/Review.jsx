import React from "react";

const reviews = [
  {
    name: "Rina S.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    stars: 5,
    text: "Camilannya enak banget, renyah dan gurih! Anak-anak di rumah suka semua.",
  },
  {
    name: "Budi P.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 4,
    text: "Pengiriman cepat, rasa oke, harga terjangkau. Recommended buat ngemil sore!",
  },
  {
    name: "Siti M.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    text: "Best seller-nya wajib dicoba, rasanya beda dari yang lain. Pasti repeat order!",
  },
  {
    name: "Andi T.",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    stars: 4,
    text: "Toko offline-nya juga nyaman, pelayanannya ramah. Produk fresh setiap hari.",
  },
  {
    name: "Dewi K.",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    stars: 5,
    text: "Suka banget sama promo diskonnya! Camilan favorit keluarga.",
  },
];

const Star = ({ filled }) => (
  <span className={filled ? "text-yellow-400" : "text-gray-300"}>★</span>
);

const Review = () => {
  return (
    <section
      id="reviews"
      className="bg-white w-full min-h-screen flex flex-col items-center py-16"
    >
      <h2 className="text-4xl font-bold text-orange-500 mb-10">Review Pembeli</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-8">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-orange-50 rounded-2xl shadow-lg p-8 flex flex-col items-center"
          >
            <img
              src={review.photo}
              alt={review.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="font-bold text-xl mb-2 text-gray-800">{review.name}</h3>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < review.stars} />
              ))}
            </div>
            <p className="text-gray-700 text-center">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;