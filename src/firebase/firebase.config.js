// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyD2XuXPwMBkKg4YKMHlBq9Hoi3sHp-scZo",
 authDomain: "teeth-wizard-8d5c0.firebaseapp.com",
 projectId: "teeth-wizard-8d5c0",
 storageBucket: "teeth-wizard-8d5c0.firebasestorage.app",
 messagingSenderId: "860895233990",
 appId: "1:860895233990:web:e947af9084d45134b094c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;