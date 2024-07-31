import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDBp6jOohmrpyCjBO82SMjdh-iYCkJRrmA",
  authDomain: "draw-win-419d2.firebaseapp.com",
  projectId: "draw-win-419d2",
  storageBucket: "draw-win-419d2.appspot.com",
  messagingSenderId: "948868768334",
  appId: "1:948868768334:web:4982cac44aa47d5bea991f",
  measurementId: "G-0PCT0F1B38"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }