// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHMHJynzSuzTwst8CSKbpSF0_jUJWaoGw",
  authDomain: "task-management-1187d.firebaseapp.com",
  projectId: "task-management-1187d",
  storageBucket: "task-management-1187d.appspot.com",
  messagingSenderId: "543174055170",
  appId: "1:543174055170:web:83525a4cef5eac971e9e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;