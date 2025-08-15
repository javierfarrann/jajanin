import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const getUserProfile = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));
  return userDoc.exists() ? userDoc.data() : null;
};

export const saveUserProfile = async (uid, profileData) => {
  await setDoc(doc(db, "users", uid), profileData);
};

export const updateUserProfile = async (uid, updatedData) => {
  await updateDoc(doc(db, "users", uid), updatedData);
};
