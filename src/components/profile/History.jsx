import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  // Dummy data history pembelian
  const history = [
    { id: 1, name: "Keripik Singkong", date: "2025-08-10", price: 15000 },
    { id: 2, name: "Bakpia Pathok", date: "2025-08-12", price: 25000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Riwayat Pembelian</h1>

      {history.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-4">Produk</th>
                <th className="py-3 px-4">Tanggal</th>
                <th className="py-3 px-4">Harga</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">Rp {item.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">Belum ada riwayat pembelian.</p>
      )}

      <Link
        to="/profile"
        className="inline-block mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Kembali ke Profil
      </Link>
    </div>
  );
};

export default History;
