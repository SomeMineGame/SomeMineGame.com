// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkv_QTP3TVMQCW3WdZ6OWSt2Mjt0E1b94",
  authDomain: "smg-smp.firebaseapp.com",
  projectId: "smg-smp",
  storageBucket: "smg-smp.appspot.com",
  messagingSenderId: "179884342891",
  appId: "1:179884342891:web:8833ba91f143de0ec0bb2e",
  measurementId: "G-1WLRV8T7GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);