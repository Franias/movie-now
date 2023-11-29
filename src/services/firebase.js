import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAnvE6GdYsR698ZHwSeXXU0MXYThSwp4J4",
  authDomain: "project-movie-now.firebaseapp.com",
  projectId: "project-movie-now",
  storageBucket: "project-movie-now.appspot.com",
  messagingSenderId: "326794518728",
  appId: "1:326794518728:web:5ddba2823a37c0e91ec5fd"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);
export { auth, db };