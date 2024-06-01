// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlRjOkDonF6vEez6TmSU0J0DvR3ai0v6Y",
  authDomain: "health-e9a4d.firebaseapp.com",
  projectId: "health-e9a4d",
  storageBucket: "health-e9a4d.appspot.com",
  messagingSenderId: "665347606449",
  appId: "1:665347606449:web:7ad9871238543369d2df90"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

// const ap = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, auth, db}
// Initialize Firebase
