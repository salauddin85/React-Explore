// Do not store config in the client side


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyA_xELDl0OItWBvgZfmXwMpfzlE0cMWp9o",
  authDomain: "test-project-d2bb0.firebaseapp.com",
  projectId: "test-project-d2bb0",
  storageBucket: "test-project-d2bb0.firebasestorage.app",
  messagingSenderId: "630012546957",
  appId: "1:630012546957:web:0235ea41deaf09dca777c4",
  measurementId: "G-6BPDLCJYRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
export default auth;
