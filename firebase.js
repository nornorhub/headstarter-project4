// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA97sVIaYWWLkapaDFPscOb8rijUeAluG0",
  authDomain: "headstarterproj4.firebaseapp.com",
  projectId: "headstarterproj4",
  storageBucket: "headstarterproj4.appspot.com",
  messagingSenderId: "201889512065",
  appId: "1:201889512065:web:b42e5af144ec8ff2556b80",
  measurementId: "G-STM32X5L6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;