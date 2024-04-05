import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase-auth'

const firebaseConfig = {
  apiKey: "AIzaSyB6PznXUHDPueEEuPNJ51rFZuMbNQBeNJY",
  authDomain: "login-react-dab12.firebaseapp.com",
  projectId: "login-react-dab12",
  storageBucket: "login-react-dab12.appspot.com",
  messagingSenderId: "580147879673",
  appId: "1:580147879673:web:72624c2a1ebab33e8d0c28",
  measurementId: "G-E936TV8NGP"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }