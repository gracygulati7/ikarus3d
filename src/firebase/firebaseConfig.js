// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCl8_Hg0O7LN-PMh_JvE64bj-wdph-Amc8",
    authDomain: "solar-system-a9468.firebaseapp.com",
    projectId: "solar-system-a9468",
    storageBucket: "solar-system-a9468.firebasestorage.app",
    messagingSenderId: "1060640703745",
    appId: "1:1060640703745:web:203abddf80d1ec388bc700"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, getDoc, setDoc };
