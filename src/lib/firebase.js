// Import the functions you need from the SDKs you need
// tienen que ser los mismos números
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged  } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

import {
  getFirestore,
  setDoc,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  getDoc,
  updateDoc,
  doc
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

export const createUserWithEmailPassword = (email,password) => createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmailPassword = (email, password) => signInWithEmailAndPassword(auth, email, password)

export const saveTask = (title, description) => addDoc(collection(db, 'tasks'), { title, description, likes : []});
// console.log(title,description)

export const getTasks = () => getDocs(collection(db, 'tasks'));
// console.log(getDocs);

export const onGetTask = (callback) => onSnapshot(collection(db, 'tasks'),callback)

export const deleteTask = id => deleteDoc(doc(db, 'tasks', id));

export const getTask = id => getDoc(doc(db, 'tasks', id));

export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id),newFields);

// export const registerUser =()
export const userCollection = (userId, name, photo, email) => setDoc(doc(db, 'user', userId), { name, photo, email });

export const getUser = (userId) => getDoc(doc(db, 'user', userId)).then((documentUser) => documentUser.data());
// getUser("3HnQc0Zp3mYiZjqxxkMXcWd8r2x2");
// console.log(getUser("3HnQc0Zp3mYiZjqxxkMXcWd8r2x2")
// )

// export const singGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider)
// }

const provider = new GoogleAuthProvider();
export const singGoogle = () => signInWithPopup(auth, provider);

export const disconnect = () => signOut(auth);

export const onAuthObserver = (callback, noCallback) => onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log(user);
    const diplayName = user.displayName;
    console.log(diplayName);

    // ...
  } else {
    // User is signed out
    // ...
  }
});

export const newLikes = async (id, arraylikes ) =>{
  await updateDoc(doc(db,'tasks', id),{
    likes : arraylikes,
  })
}

export {
  signInWithEmailAndPassword,
  getFirestore,
  GoogleAuthProvider,

};
