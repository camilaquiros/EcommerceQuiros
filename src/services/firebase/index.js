// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcvjmywkS3UfdfNikPdmLcVPwYDPUtyjo",
  authDomain: "ecommercequiros.firebaseapp.com",
  projectId: "ecommercequiros",
  storageBucket: "ecommercequiros.appspot.com",
  messagingSenderId: "602611449792",
  appId: "1:602611449792:web:3214738f4fbe1837649225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);