import React, { useState } from "react";
import { Link } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("+62 812-3456-7890");
  const [address, setAddress] = useState("Jl. Mawar No. 123, Jakarta");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profil berhasil diperbarui!");
    // TODO: Kirim data ke backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Profil</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto"
      >
        {/* Nama */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Nomor HP */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Nomor HP</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+62 ..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Alamat */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Alamat</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Simpan Perubahan
        </button>
      </form>

      <Link
        to="/profile"
        className="block text-center mt-6 text-orange-500 hover:underline"
      >
        Kembali ke Profil
      </Link>
    </div>
  );
};

export default Edit;
