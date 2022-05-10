import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlZB4zimmMEt2hlIQUuXuj7e4Z0cjOmgI",
  authDomain: "my-articles-c9feb.firebaseapp.com",
  projectId: "my-articles-c9feb",
  storageBucket: "my-articles-c9feb.appspot.com",
  messagingSenderId: "1084392101034",
  appId: "1:1084392101034:web:40c3406f80958adc392cd3"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);