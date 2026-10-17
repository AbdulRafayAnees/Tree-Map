// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "tree-planting-maps.firebaseapp.com",
  databaseURL: "https://tree-planting-maps-default-rtdb.firebaseio.com",
  projectId: "tree-planting-maps",
  storageBucket: "tree-planting-maps.firebasestorage.app",
  messagingSenderId: "1000303410692",
  appId: "1:1000303410692:web:424f072bd215dc9239ff51",
  measurementId: "G-KDCRSH5WW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;