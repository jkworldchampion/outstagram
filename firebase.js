// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcJHlB9nX02ZDCVLFOjGfYmNNjwPohVMY",
  authDomain: "rn-outstagram-clone.firebaseapp.com",
  projectId: "rn-outstagram-clone",
  storageBucket: "rn-outstagram-clone.appspot.com",
  messagingSenderId: "658723026546",
  appId: "1:658723026546:web:075257169ab44130d3f4eb"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);