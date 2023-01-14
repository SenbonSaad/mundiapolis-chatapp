import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWmHYGWvNkIS_hay8cM2TxJQfElqazb64",
  authDomain: "chat-box-45439.firebaseapp.com",
  projectId: "chat-box-45439",
  storageBucket: "chat-box-45439.appspot.com",
  messagingSenderId: "889842911610",
  appId: "1:889842911610:web:e69de95b23555414b8aec3",
  measurementId: "G-16ZKH0DM4Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
// const analytics = getAnalytics(app);
