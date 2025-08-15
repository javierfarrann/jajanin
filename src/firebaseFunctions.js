// src/firebaseFunctions.js
import { db, storage } from "./firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// 📌 Upload gambar ke Storage
export async function uploadImage(file) {
  const storageRef = ref(storage, `products/${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

// 📌 Tambah produk baru
export async function addProduct(product) {
  return await addDoc(collection(db, "products"), product);
}

// 📌 Ambil semua produk
export async function getProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// 📌 Update produk
export async function updateProduct(id, updatedData) {
  const productRef = doc(db, "products", id);
  await updateDoc(productRef, updatedData);
}

// 📌 Hapus produk
export async function deleteProduct(id) {
  const productRef = doc(db, "products", id);
  await deleteDoc(productRef);
}
// 📌 Tambah produk ke keranjang
export async function addToCart(productId) {
  const cartRef = collection(db, "cart");
  await addDoc(cartRef, { productId });
}
