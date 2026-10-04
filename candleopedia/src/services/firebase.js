// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA66KnlXVS2ZwnWNj9Q7gK-vCFRrlFh1B0",
  authDomain: "candleopedia-8c156.firebaseapp.com",
  projectId: "candleopedia-8c156",
  storageBucket: "candleopedia-8c156.firebasestorage.app",
  messagingSenderId: "327934348679",
  appId: "1:327934348679:web:f8a1abd401fa216c0ed722",
  measurementId: "G-42Y41Q6W4V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
