// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGz9AjdwvMmdXa3Flp1cPnb75CxwN0njc",
  authDomain: "email-password-auth-d6f18.firebaseapp.com",
  projectId: "email-password-auth-d6f18",
  storageBucket: "email-password-auth-d6f18.firebasestorage.app",
  messagingSenderId: "779773159767",
  appId: "1:779773159767:web:2be7c925d541a8a1a17612",
  measurementId: "G-KM84Z6WRXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
// const analytics = getAnalytics(app);