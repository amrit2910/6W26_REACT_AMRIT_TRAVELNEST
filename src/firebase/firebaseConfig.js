import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoh2VkBSjEx1heQDtXKH8uhzoZQnCTqPo",
  authDomain: "tourism-d1f73.firebaseapp.com",
  projectId: "tourism-d1f73",
  storageBucket: "tourism-d1f73.firebasestorage.app",
  messagingSenderId: "1043147853379",
  appId: "1:1043147853379:web:e499193211390ad75d8ef6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);