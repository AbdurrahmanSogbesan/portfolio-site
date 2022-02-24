import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQmVhn3It8nttPfZ9X0ueW2uqXReFUcXQ",
  authDomain: "portfolio-website-42916.firebaseapp.com",
  projectId: "portfolio-website-42916",
  storageBucket: "portfolio-website-42916.appspot.com",
  messagingSenderId: "1033098951827",
  appId: "1:1033098951827:web:c502b1ddde1713939fe166",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
