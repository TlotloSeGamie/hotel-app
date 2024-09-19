// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHNlX3_SVLxBIscChuSDgJQVCWg6z5Wig",
  authDomain: "hotel-react-25a6b.firebaseapp.com",
  projectId: "hotel-react-25a6b",
  storageBucket: "hotel-react-25a6b.appspot.com",
  messagingSenderId: "866217455138",
  appId: "1:866217455138:web:f209761f02e45d9bf6247b",
  measurementId: "G-GSVLH0JCBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app) 
export {auth, db} 
