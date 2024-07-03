import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {getStorage } from 'firebase/storage'
 
const firebaseConfig = {
  apiKey: "AIzaSyBBv5bStS2abLb7dHgCoeAZQANwuWYJ7eI",
  authDomain: "calling-system-98be5.firebaseapp.com",
  projectId: "calling-system-98be5",
  storageBucket: "calling-system-98be5.appspot.com",
  messagingSenderId: "314589024475",
  appId: "1:314589024475:web:7479d5545b32a179727cfe",
  measurementId: "G-2G35H3KLK5"
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }