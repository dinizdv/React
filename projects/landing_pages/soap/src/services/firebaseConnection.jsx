import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjJM5Az9F1fnyiznjctMPfrg0Wf6kpdhs",
  authDomain: "soap-776fc.firebaseapp.com",
  projectId: "soap-776fc",
  storageBucket: "soap-776fc.appspot.com",
  messagingSenderId: "76860157987",
  appId: "1:76860157987:web:4a76e5fb12bebcffdf8196",
  measurementId: "G-7XEVXV5B37"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }