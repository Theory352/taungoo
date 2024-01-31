import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoMK2m13yNTH8pSitJ8J_doC3u0AEQVIs",
  authDomain: "ucsnotice.firebaseapp.com",
  projectId: "ucsnotice",
  storageBucket: "ucsnotice.appspot.com",
  messagingSenderId: "170618358045",
  appId: "1:170618358045:web:b0c9247d395b1cd976b9f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
