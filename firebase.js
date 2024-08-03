// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmfNfesLlgsgGALcm3KSzokYFW1z2nZSY",
  authDomain: "inventory-management-f839d.firebaseapp.com",
  projectId: "inventory-management-f839d",
  storageBucket: "inventory-management-f839d.appspot.com",
  messagingSenderId: "857164614314",
  appId: "1:857164614314:web:da324b1b54177485fb5ed3",
  measurementId: "G-2CNH45NE3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };