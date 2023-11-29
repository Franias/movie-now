import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


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

export { auth, db };