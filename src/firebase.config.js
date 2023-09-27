// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfYsQr4nVVQMc7kzbDwYZbBXfps5mrhPU",
  authDomain: "otp-verification-f7876.firebaseapp.com",
  projectId: "otp-verification-f7876",
  storageBucket: "otp-verification-f7876.appspot.com",
  messagingSenderId: "683428136292",
  appId: "1:683428136292:web:8d3dcac9261f6da09b6671",
  measurementId: "G-3KVQDZXCWS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
