
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAjmKcIvq1OvyNdH5HBlCiavdiRKqSpLU",
  authDomain: "minimalnotes-369523.firebaseapp.com",
  projectId: "minimalnotes-369523",
  storageBucket: "minimalnotes-369523.appspot.com",
  messagingSenderId: "378005017257",
  appId: "1:378005017257:web:eb90a6fb43915cd05fcfb8",
  measurementId: "G-GX0RQ65LQJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();