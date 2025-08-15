import { db } from "../firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const productCollection = collection(db, "products");

export const getProducts = async () => {
  // Ambil max 20 produk, urutkan berdasarkan nama
  const q = query(productCollection, orderBy("name"), limit(20));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
