import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { auth } from "../../firebase"; // ga perlu dipakai dulu
import { getUserProfile } from "../../services/userService";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);

      // Pakai UID dummy langsung
      const dummyUid = "dummyUser1";
      const profileData = await getUserProfile(dummyUid);

      setUser(profileData);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Memuat profil...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <p className="text-center mt-10 text-red-500">
        Profil dummy tidak ditemukan di database.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-28 h-28 rounded-full shadow-lg mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-gray-500">{user.address}</p>
      <p className="text-gray-500">{user.phone}</p>

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
