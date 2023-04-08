import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  // your app's configuration object here
  apiKey: "AIzaSyBLzCiuE9KjfbdjJrIgLCQSZfkrccYdIgE",
  authDomain: "blacknebula-467bc.firebaseapp.com",
  projectId: "blacknebula-467bc",
  storageBucket: "blacknebula-467bc.appspot.com",
  messagingSenderId: "900779493765",
  appId: "1:900779493765:web:62590e7792b5bd6438dcec",
  measurementId: "G-DK8LYKXL1G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
