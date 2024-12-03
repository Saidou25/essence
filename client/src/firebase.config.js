// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "essence-9f702.firebaseapp.com",
  projectId: "essence-9f702",
  storageBucket: "essence-9f702.firebasestorage.app",
  messagingSenderId: "319949189908",
  appId: "1:319949189908:web:f9c7b925fd4e464d81c801",
  measurementId: "G-838GRBQ63S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export to components
export { app, db };