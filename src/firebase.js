// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALzCexagRt-25dqiyiT0U_rJzB3eYe46E",
    authDomain: "travel-web-b9a4c.firebaseapp.com",
    projectId: "travel-web-b9a4c",
    storageBucket: "travel-web-b9a4c.firebasestorage.app",
    messagingSenderId: "905248173570",
    appId: "1:905248173570:web:b74e95ef8d5aa60601c11b",
    measurementId: "G-YSZDKZHCQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };
