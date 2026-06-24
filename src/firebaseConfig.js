import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// 1. Storage ko import kiya
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBK8SZgae3eMq9eNuVTsGr21n3Vqj5UOoc",
  authDomain: "globereliancetransport-aa937.firebaseapp.com",
  projectId: "globereliancetransport-aa937",
  storageBucket: "globereliancetransport-aa937.firebasestorage.app",
  messagingSenderId: "914927031766",
  appId: "1:914927031766:web:5d924ba9ad1b39761bc077",
  measurementId: "G-V2M063G2YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Dono cheezon ko ek sath export kar diya
export const db = getFirestore(app);
export const storage = getStorage(app);