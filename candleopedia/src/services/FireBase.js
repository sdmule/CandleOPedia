// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOj92zH95o-4kddy53Hf_X0bhLAQOMVwQ",
  authDomain: "candleopedia-aa70e.firebaseapp.com",
  projectId: "candleopedia-aa70e",
  storageBucket: "candleopedia-aa70e.firebasestorage.app",
  messagingSenderId: "870701068171",
  appId: "1:870701068171:web:282514a1916790e3b5498e",
  measurementId: "G-6PNGHDF1V0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
