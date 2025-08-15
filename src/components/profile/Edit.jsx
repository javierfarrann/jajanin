import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { getUserProfile, updateUserProfile } from "../../services/userService";


const Edit = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (uid) {
      getUserProfile(uid).then((data) => {
        if (data) setFormData(data);
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;
    await updateUserProfile(uid, formData);
    alert("Profil berhasil diperbarui!");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Profil</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        {["name", "email", "phone", "address"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 font-medium mb-2">
              {field === "name" ? "Nama" : field === "email" ? "Email" : field === "phone" ? "Nomor HP" : "Alamat"}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        ))}
        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
          Simpan Perubahan
        </button>
      </form>
      <Link to="/profile" className="block text-center mt-6 text-orange-500 hover:underline">
        Kembali ke Profil
      </Link>
    </div>
  );
};

export default Edit;
