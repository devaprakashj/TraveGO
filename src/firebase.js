// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For local development: uses .env file
// For production: set these in your deployment platform (Vercel, Netlify, etc.)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyALzCexagRt-25dqiyiT0U_rJzB3eYe46E",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "travel-web-b9a4c.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "travel-web-b9a4c",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "travel-web-b9a4c.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "905248173570",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:905248173570:web:b74e95ef8d5aa60601c11b",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-YSZDKZHCQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };
