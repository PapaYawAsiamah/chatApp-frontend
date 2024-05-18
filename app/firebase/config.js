// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByA_R_FRvA8sEMCwEgTC2_lIP9Wa-mT8U",
  authDomain: "health-f6385.firebaseapp.com",
  projectId: "health-f6385",
  storageBucket: "health-f6385.appspot.com",
  messagingSenderId: "605789135255",
  appId: "1:605789135255:web:aaa48a3e372dc5e1a9e4d2"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

// const ap = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, auth, db}
// Initialize Firebase
