// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-9f2ba.firebaseapp.com",
  projectId: "vingo-9f2ba",
  storageBucket: "vingo-9f2ba.firebasestorage.app",
  messagingSenderId: "508945479085",
  appId: "1:508945479085:web:50f492ac6448f291b75d24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}