import { signInWithEmailAndPassword, auth } from "./firebase.js";

export const login = () => console.log('hacer login con signInWithEmailAndPassword');

const signInWithEmailPassword = (email, password) => signInWithEmailAndPassword(auth, email, password)
