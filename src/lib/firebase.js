// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";


import { } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn5X_44ytK6mODiWfu1m40kjng40lkc-w",
  authDomain: "peruvian-taste-lim018.firebaseapp.com",
  projectId: "peruvian-taste-lim018",
  storageBucket: "peruvian-taste-lim018.appspot.com",
  messagingSenderId: "274986797180",
  appId: "1:274986797180:web:68c0aeb5dda634d579a1f9",
  measurementId: "G-W8T4LHJTK6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export {
  signInWithEmailAndPassword
}







