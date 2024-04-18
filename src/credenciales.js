// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGZSr0MDTROhPsBkxkC58QkcwLiso0uGs",
  authDomain: "pokemon-login-5ccad.firebaseapp.com",
  projectId: "pokemon-login-5ccad",
  storageBucket: "pokemon-login-5ccad.appspot.com",
  messagingSenderId: "591625316424",
  appId: "1:591625316424:web:5976a0837768cc1131d07d"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;