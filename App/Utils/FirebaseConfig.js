// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import GlobalApi from "./GlobalApi";

const firebaseConfig = {
  apiKey: GlobalApi.FIREBASE_API,
  authDomain: "charityappjspm.firebaseapp.com",
  projectId: "charityappjspm",
  storageBucket: "charityappjspm.appspot.com",
  messagingSenderId: "952929501464",
  appId: "1:952929501464:web:b2692f0a8749efd162de6d",
  measurementId: "G-C5TSRVB850",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
