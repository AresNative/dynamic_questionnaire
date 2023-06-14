// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FB_APIKEY,
  authDomain: import.meta.env.VITE_APP_FB_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_APP_FB_DATABASEURL,
  projectId: import.meta.env.VITE_APP_FB_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_FB_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FB_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_FB_APPID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const database = getDatabase();

// Instace db firebase
export const db = getFirestore();
