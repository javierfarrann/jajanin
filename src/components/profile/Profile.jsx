import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  // Dummy data user, nanti bisa diganti dari backend
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Mawar No. 123, Jakarta",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Avatar */}
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-28 h-28 rounded-full shadow-lg mb-4"
      />

      {/* Info */}
      <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-gray-500">{user.phone}</p>
      <p className="text-gray-500 text-center max-w-xs">{user.address}</p>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Link
          to="/history"
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Lihat Riwayat
        </Link>
        <Link
          to="/edit"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Edit Profil
        </Link>
      </div>
    </div>
  );
};

export default Profile;
