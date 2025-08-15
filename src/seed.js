// src/seed.js
import { db } from "./firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

// Dummy data products
const products = [
  {
    name: "Kue Lapis",
    price: 15000,
    image: "https://images.unsplash.com/photo-1601050690297-6be2c8d7c77b",
    discount: 10,
    promo: "Promo Kemerdekaan",
    expiryDate: "2025-12-31",
  },
  {
    name: "Cilok Bumbu Kacang",
    price: 10000,
    image: "https://images.unsplash.com/photo-1617196031135-6fbbdcc4d4d4",
    discount: 0,
    promo: "",
    expiryDate: "2025-09-30",
  },
  {
    name: "Onde-onde",
    price: 12000,
    image: "https://images.unsplash.com/photo-1617196030665-aaf7fecd1b2d",
    discount: 5,
    promo: "Promo Awal Bulan",
    expiryDate: "2025-10-15",
  },
];

// Dummy data user
const userProfile = {
  name: "John Doe",
  email: "john@example.com",
  phone: "081234567890",
  address: "Jl. Mawar No. 123, Jakarta",
  avatar: "https://i.pravatar.cc/150?img=3",
};

async function seedDatabase() {
  try {
    // Tambahkan products
    for (let product of products) {
      await addDoc(collection(db, "products"), product);
    }

    // Tambahkan user dummy (UID: dummyUser1)
    await setDoc(doc(db, "users", "dummyUser1"), userProfile);

    console.log("✅ Data berhasil di-seed ke Firestore!");
  } catch (error) {
    console.error("❌ Gagal seed data:", error);
  }
}

seedDatabase();
