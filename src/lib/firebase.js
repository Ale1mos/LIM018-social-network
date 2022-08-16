// Import the functions you need from the SDKs you need
// tienen que ser los mismos números
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
// import {getFirestore} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';
// import { } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';
// import { title } from "../view/home";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBn5X_44ytK6mODiWfu1m40kjng40lkc-w',
  authDomain: 'peruvian-taste-lim018.firebaseapp.com',
  projectId: 'peruvian-taste-lim018',
  storageBucket: 'peruvian-taste-lim018.appspot.com',
  messagingSenderId: '274986797180',
  appId: '1:274986797180:web:68c0aeb5dda634d579a1f9',
  measurementId: 'G-W8T4LHJTK6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore();

export const saveTask = (title, description) => addDoc(collection(db, 'tasks'), { title, description });
// console.log(title,description)

export const getTasks = () => getDocs(collection(db, 'tasks'));
// console.log(getDocs);

export const onGetTask = (callback) => onSnapshot(collection(db, 'tasks'),callback)

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getFirestore,
};
