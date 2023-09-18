// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "socialblog-399312",
  storageBucket: "socialblog-399312.appspot.com",
  messagingSenderId: "697723929136",
  appId: "1:697723929136:web:8990cf7bdbbab81469a3f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);