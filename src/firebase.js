// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB6xKAphA2aF-uRQvEMVFkDaWtwn_R8I0",
  authDomain: "jajanin-bcd4c.firebaseapp.com",
  projectId: "jajanin-bcd4c",
  storageBucket: "jajanin-bcd4c.firebasestorage.app",
  messagingSenderId: "414403190583",
  appId: "1:414403190583:web:5857de0c8f2e662799c4b2",
  measurementId: "G-XZE3KHJJ26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);